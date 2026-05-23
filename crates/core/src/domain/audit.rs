use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AuditEvent {
    pub id: Uuid,
    pub tenant_id: Uuid,
    pub actor_id: Option<Uuid>,
    pub action: String,
    pub resource_type: String,
    pub resource_id: Option<Uuid>,
    pub payload: Option<serde_json::Value>,
    pub ip_address: Option<String>,
    pub created_at: DateTime<Utc>,
}

impl AuditEvent {
    pub fn new(
        tenant_id: Uuid,
        actor_id: Option<Uuid>,
        action: impl Into<String>,
        resource_type: impl Into<String>,
        resource_id: Option<Uuid>,
    ) -> Self {
        Self {
            id: Uuid::new_v4(),
            tenant_id,
            actor_id,
            action: action.into(),
            resource_type: resource_type.into(),
            resource_id,
            payload: None,
            ip_address: None,
            created_at: Utc::now(),
        }
    }
}
