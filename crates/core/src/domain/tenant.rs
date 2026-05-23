use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "snake_case")]
pub enum OrgType {
    Rescue,
    Shelter,
    FosterNetwork,
    VetClinic,
    SpayNeuterClinic,
    Nonprofit,
    FiscalSponsor,
    Other,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Tenant {
    pub id: Uuid,
    pub name: String,
    pub slug: String,
    pub org_type: OrgType,
    pub contact_email: Option<String>,
    pub website: Option<String>,
    pub city: Option<String>,
    pub state: Option<String>,
    pub country: Option<String>,
    pub is_active: bool,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl Tenant {
    pub fn new(name: String, org_type: OrgType) -> Self {
        let slug = name
            .to_lowercase()
            .chars()
            .map(|c| if c.is_alphanumeric() { c } else { '-' })
            .collect::<String>();
        let now = Utc::now();
        Self {
            id: Uuid::new_v4(),
            name,
            slug,
            org_type,
            contact_email: None,
            website: None,
            city: None,
            state: None,
            country: None,
            is_active: true,
            created_at: now,
            updated_at: now,
        }
    }
}
