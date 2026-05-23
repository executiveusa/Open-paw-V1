use open_paw_auth::{Action, can_perform};
use crate::decisions::{PolicyContext, PolicyDecision};
use open_paw_auth::Role;

pub struct PolicyEngine;

impl PolicyEngine {
    pub fn decide(ctx: &PolicyContext) -> PolicyDecision {
        // Grant submission requires approval even for admins
        if ctx.action == Action::SubmitGrant {
            let can_draft = ctx.actor_roles.iter().any(|r| can_perform(r, &Action::DraftGrant));
            if can_draft {
                return PolicyDecision::RequireApproval {
                    approver_roles: vec![Role::Admin, Role::Owner, Role::Finance],
                };
            }
            return PolicyDecision::Deny {
                reason: "You do not have permission to submit grant applications".to_string(),
            };
        }

        // Check if any role allows the action
        let allowed = ctx.actor_roles.iter().any(|r| can_perform(r, &ctx.action));

        if allowed {
            PolicyDecision::Allow
        } else {
            PolicyDecision::Deny {
                reason: format!("Action {:?} is not permitted for your role", ctx.action),
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use open_paw_auth::{Action, Role};
    use crate::decisions::PolicyContext;
    use uuid::Uuid;

    fn ctx(roles: Vec<Role>, action: Action) -> PolicyContext {
        PolicyContext::new(Uuid::new_v4(), action, roles)
    }

    #[test]
    fn vet_allowed_to_read_medical() {
        let decision = PolicyEngine::decide(&ctx(vec![Role::Vet], Action::ReadMedical));
        assert_eq!(decision, PolicyDecision::Allow);
    }

    #[test]
    fn volunteer_denied_medical_read() {
        let decision = PolicyEngine::decide(&ctx(vec![Role::Volunteer], Action::ReadMedical));
        assert!(matches!(decision, PolicyDecision::Deny { .. }));
    }

    #[test]
    fn grant_writer_draft_requires_no_approval() {
        let decision = PolicyEngine::decide(&ctx(vec![Role::GrantWriter], Action::DraftGrant));
        assert_eq!(decision, PolicyDecision::Allow);
    }

    #[test]
    fn grant_submission_requires_approval() {
        let decision = PolicyEngine::decide(&ctx(vec![Role::GrantWriter], Action::SubmitGrant));
        assert!(matches!(decision, PolicyDecision::RequireApproval { .. }));
    }

    #[test]
    fn admin_grant_submission_still_requires_approval() {
        let decision = PolicyEngine::decide(&ctx(vec![Role::Admin], Action::SubmitGrant));
        assert!(matches!(decision, PolicyDecision::RequireApproval { .. }));
    }
}
