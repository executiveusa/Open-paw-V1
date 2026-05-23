use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;
use validator::Validate;

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "snake_case")]
pub enum PersonRole {
    Adopter,
    Foster,
    Volunteer,
    Staff,
    Donor,
    Vet,
    ResourcePartner,
    Other,
}

#[derive(Debug, Clone, Serialize, Deserialize, Validate)]
pub struct Person {
    pub id: Uuid,
    pub tenant_id: Uuid,
    #[validate(length(min = 1, max = 200))]
    pub name: String,
    #[validate(email)]
    pub email: Option<String>,
    pub phone: Option<String>,
    pub address: Option<String>,
    pub role: PersonRole,
    pub notes: Option<String>,
    pub is_active: bool,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl Person {
    pub fn new(tenant_id: Uuid, name: String, role: PersonRole) -> Self {
        let now = Utc::now();
        Self {
            id: Uuid::new_v4(),
            tenant_id,
            name,
            email: None,
            phone: None,
            address: None,
            role,
            notes: None,
            is_active: true,
            created_at: now,
            updated_at: now,
        }
    }
}
