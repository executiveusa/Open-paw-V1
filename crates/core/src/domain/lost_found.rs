use chrono::{DateTime, NaiveDate, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "snake_case")]
pub enum ReportType {
    Lost,
    Found,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "snake_case")]
pub enum MatchStatus {
    Open,
    PotentialMatch,
    Reunited,
    Closed,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LostFoundReport {
    pub id: Uuid,
    pub tenant_id: Uuid,
    pub report_type: ReportType,
    pub species: String,
    pub breed: Option<String>,
    pub color: Option<String>,
    pub description: String,
    pub location: String,
    pub incident_date: NaiveDate,
    pub contact_name: String,
    pub contact_phone: Option<String>,
    pub contact_email: Option<String>,
    pub match_status: MatchStatus,
    pub internal_notes: Option<String>,
    pub matched_animal_id: Option<Uuid>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}
