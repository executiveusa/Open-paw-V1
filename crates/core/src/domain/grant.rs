use chrono::{DateTime, NaiveDate, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;
use validator::Validate;

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "snake_case")]
pub enum GrantStatus {
    Identified,
    Researching,
    Drafting,
    Submitted,
    Awarded,
    Declined,
    Closed,
}

#[derive(Debug, Clone, Serialize, Deserialize, Validate)]
pub struct Funder {
    pub id: Uuid,
    pub tenant_id: Uuid,
    #[validate(length(min = 1, max = 500))]
    pub name: String,
    pub website_url: Option<String>,
    pub contact_name: Option<String>,
    pub contact_email: Option<String>,
    pub focus_areas: Vec<String>,
    pub geographic_scope: Option<String>,
    pub notes: Option<String>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GrantOpportunity {
    pub id: Uuid,
    pub tenant_id: Uuid,
    pub funder_id: Uuid,
    pub title: String,
    pub description: Option<String>,
    pub focus_area: Option<String>,
    pub award_min: Option<i64>,
    pub award_max: Option<i64>,
    pub deadline_at: Option<NaiveDate>,
    pub recurring: bool,
    pub eligibility_summary: Option<String>,
    pub application_url: Option<String>,
    pub report_requirements: Option<String>,
    pub status: GrantStatus,
    pub source_url: Option<String>,
    pub last_checked_at: Option<DateTime<Utc>>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl GrantOpportunity {
    pub fn is_deadline_past(&self) -> bool {
        match self.deadline_at {
            Some(d) => d < chrono::Local::now().date_naive(),
            None => false,
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "snake_case")]
pub enum ApplicationStatus {
    Draft,
    InReview,
    Submitted,
    Awarded,
    Declined,
    Withdrawn,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct GrantApplication {
    pub id: Uuid,
    pub tenant_id: Uuid,
    pub opportunity_id: Uuid,
    pub status: ApplicationStatus,
    pub requested_amount: Option<i64>,
    pub project_title: Option<String>,
    pub narrative_draft: Option<String>,
    pub budget_json: Option<serde_json::Value>,
    pub submitted_at: Option<DateTime<Utc>>,
    pub awarded_amount: Option<i64>,
    pub reporting_due_at: Option<NaiveDate>,
    pub notes: Option<String>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

#[derive(Debug, thiserror::Error)]
pub enum GrantError {
    #[error("Deadline date is invalid: {0}")]
    InvalidDeadline(String),
    #[error("Grant narrative must be reviewed before submission")]
    NarrativeNotReviewed,
    #[error("Cannot auto-submit grant applications")]
    AutoSubmitForbidden,
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn grant_deadline_past() {
        let opp = GrantOpportunity {
            id: Uuid::new_v4(),
            tenant_id: Uuid::new_v4(),
            funder_id: Uuid::new_v4(),
            title: "Test Grant".to_string(),
            description: None,
            focus_area: None,
            award_min: Some(5000),
            award_max: Some(25000),
            deadline_at: Some(chrono::NaiveDate::from_ymd_opt(2020, 1, 1).unwrap()),
            recurring: false,
            eligibility_summary: None,
            application_url: None,
            report_requirements: None,
            status: GrantStatus::Identified,
            source_url: None,
            last_checked_at: None,
            created_at: Utc::now(),
            updated_at: Utc::now(),
        };
        assert!(opp.is_deadline_past());
    }
}
