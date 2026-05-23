use open_paw_auth::{Action, Role};
use uuid::Uuid;

#[derive(Debug, Clone, PartialEq)]
pub enum PolicyDecision {
    Allow,
    Deny { reason: String },
    RequireApproval { approver_roles: Vec<Role> },
}

#[derive(Debug, Clone)]
pub struct PolicyContext {
    pub actor_id: Option<Uuid>,
    pub actor_roles: Vec<Role>,
    pub tenant_id: Uuid,
    pub action: Action,
    pub resource_id: Option<Uuid>,
}

impl PolicyContext {
    pub fn new(tenant_id: Uuid, action: Action, roles: Vec<Role>) -> Self {
        Self {
            actor_id: None,
            actor_roles: roles,
            tenant_id,
            action,
            resource_id: None,
        }
    }
}
