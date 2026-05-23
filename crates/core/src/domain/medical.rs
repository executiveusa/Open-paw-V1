use chrono::{DateTime, NaiveDate, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "snake_case")]
pub enum MedicalNoteType {
    GeneralNote,
    Vaccination,
    Medication,
    Procedure,
    WeightCheck,
    SpayNeuter,
    Exam,
    LabResult,
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "snake_case")]
pub enum SpayNeuterStatus {
    Unknown,
    Intact,
    SpayedNeutered,
    Scheduled,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct MedicalRecord {
    pub id: Uuid,
    pub tenant_id: Uuid,
    pub animal_id: Uuid,
    pub note_type: MedicalNoteType,
    pub note: Option<String>,
    pub performed_by: Option<String>,
    pub performed_at: Option<NaiveDate>,
    pub is_restricted: bool,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl MedicalRecord {
    pub fn new(tenant_id: Uuid, animal_id: Uuid, note_type: MedicalNoteType) -> Self {
        let now = Utc::now();
        Self {
            id: Uuid::new_v4(),
            tenant_id,
            animal_id,
            note_type,
            note: None,
            performed_by: None,
            performed_at: None,
            is_restricted: false,
            created_at: now,
            updated_at: now,
        }
    }

    pub fn is_visible_to_public(&self) -> bool {
        !self.is_restricted
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct WeightRecord {
    pub id: Uuid,
    pub animal_id: Uuid,
    pub weight_kg: f64,
    pub recorded_at: NaiveDate,
    pub notes: Option<String>,
}
