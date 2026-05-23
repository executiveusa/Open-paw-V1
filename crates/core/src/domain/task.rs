use chrono::{DateTime, NaiveDate, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "snake_case")]
pub enum TaskStatus {
    Todo,
    InProgress,
    Done,
    Cancelled,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "snake_case")]
pub enum TaskPriority {
    Low,
    Medium,
    High,
    Urgent,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct Task {
    pub id: Uuid,
    pub tenant_id: Uuid,
    pub animal_id: Option<Uuid>,
    pub assigned_to: Option<Uuid>,
    pub title: String,
    pub description: Option<String>,
    pub status: TaskStatus,
    pub priority: TaskPriority,
    pub due_date: Option<NaiveDate>,
    pub completed_at: Option<DateTime<Utc>>,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl Task {
    pub fn new(tenant_id: Uuid, title: String) -> Self {
        let now = Utc::now();
        Self {
            id: Uuid::new_v4(),
            tenant_id,
            animal_id: None,
            assigned_to: None,
            title,
            description: None,
            status: TaskStatus::Todo,
            priority: TaskPriority::Medium,
            due_date: None,
            completed_at: None,
            created_at: now,
            updated_at: now,
        }
    }

    pub fn is_overdue(&self) -> bool {
        match self.due_date {
            Some(due) => due < chrono::Local::now().date_naive() && self.status == TaskStatus::Todo,
            None => false,
        }
    }
}
