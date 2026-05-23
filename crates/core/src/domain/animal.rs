use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;
use validator::Validate;

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "snake_case")]
pub enum AnimalStatus {
    Intake,
    Quarantine,
    MedicalHold,
    BehaviorHold,
    FosterNeeded,
    InFoster,
    Adoptable,
    AdoptionPending,
    Adopted,
    Transferred,
    Returned,
    Lost,
    Found,
    Deceased,
}

impl AnimalStatus {
    pub fn is_active(&self) -> bool {
        !matches!(self, Self::Adopted | Self::Transferred | Self::Deceased)
    }
}

impl std::fmt::Display for AnimalStatus {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        let s = serde_json::to_value(self)
            .ok()
            .and_then(|v| v.as_str().map(String::from))
            .unwrap_or_default();
        write!(f, "{}", s)
    }
}

impl std::str::FromStr for AnimalStatus {
    type Err = AnimalError;
    fn from_str(s: &str) -> Result<Self, Self::Err> {
        match s {
            "intake" => Ok(Self::Intake),
            "quarantine" => Ok(Self::Quarantine),
            "medical_hold" => Ok(Self::MedicalHold),
            "behavior_hold" => Ok(Self::BehaviorHold),
            "foster_needed" => Ok(Self::FosterNeeded),
            "in_foster" => Ok(Self::InFoster),
            "adoptable" => Ok(Self::Adoptable),
            "adoption_pending" => Ok(Self::AdoptionPending),
            "adopted" => Ok(Self::Adopted),
            "transferred" => Ok(Self::Transferred),
            "returned" => Ok(Self::Returned),
            "lost" => Ok(Self::Lost),
            "found" => Ok(Self::Found),
            "deceased" => Ok(Self::Deceased),
            _ => Err(AnimalError::InvalidStatus(s.to_string())),
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "snake_case")]
pub enum Species {
    Dog,
    Cat,
    Rabbit,
    GuineaPig,
    Bird,
    Reptile,
    SmallAnimal,
    Farm,
    Other(String),
}

impl Species {
    pub fn requires_name(&self) -> bool {
        true
    }
}

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "snake_case")]
pub enum Sex {
    Male,
    Female,
    Unknown,
}

#[derive(Debug, Clone, Serialize, Deserialize, Validate)]
pub struct Animal {
    pub id: Uuid,
    pub tenant_id: Uuid,
    #[validate(length(min = 1, max = 200))]
    pub name: String,
    pub species: Species,
    pub breed: Option<String>,
    pub sex: Sex,
    pub age_estimate_months: Option<i32>,
    pub weight_kg: Option<f64>,
    pub color: Option<String>,
    pub microchip_id: Option<String>,
    pub intake_date: DateTime<Utc>,
    pub intake_source: Option<String>,
    pub status: AnimalStatus,
    pub location: Option<String>,
    pub public_bio: Option<String>,
    pub private_notes: Option<String>,
    pub is_restricted: bool,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl Animal {
    pub fn new(tenant_id: Uuid, name: String, species: Species) -> Result<Self, AnimalError> {
        if name.trim().is_empty() {
            return Err(AnimalError::NameRequired);
        }
        Ok(Self {
            id: Uuid::new_v4(),
            tenant_id,
            name: name.trim().to_string(),
            species,
            breed: None,
            sex: Sex::Unknown,
            age_estimate_months: None,
            weight_kg: None,
            color: None,
            microchip_id: None,
            intake_date: Utc::now(),
            intake_source: None,
            status: AnimalStatus::Intake,
            location: None,
            public_bio: None,
            private_notes: None,
            is_restricted: false,
            created_at: Utc::now(),
            updated_at: Utc::now(),
        })
    }

    pub fn public_fields(&self) -> PublicAnimalProfile {
        if self.is_restricted {
            return PublicAnimalProfile::restricted(self.id);
        }
        PublicAnimalProfile {
            id: self.id,
            name: self.name.clone(),
            species: self.species.clone(),
            breed: self.breed.clone(),
            sex: self.sex.clone(),
            age_estimate_months: self.age_estimate_months,
            color: self.color.clone(),
            public_bio: self.public_bio.clone(),
            status: self.status.clone(),
            restricted: false,
        }
    }
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PublicAnimalProfile {
    pub id: Uuid,
    pub name: String,
    pub species: Species,
    pub breed: Option<String>,
    pub sex: Sex,
    pub age_estimate_months: Option<i32>,
    pub color: Option<String>,
    pub public_bio: Option<String>,
    pub status: AnimalStatus,
    pub restricted: bool,
}

impl PublicAnimalProfile {
    fn restricted(id: Uuid) -> Self {
        Self {
            id,
            name: "[Restricted]".to_string(),
            species: Species::Other("Unknown".to_string()),
            breed: None,
            sex: Sex::Unknown,
            age_estimate_months: None,
            color: None,
            public_bio: None,
            status: AnimalStatus::Intake,
            restricted: true,
        }
    }
}

#[derive(Debug, thiserror::Error)]
pub enum AnimalError {
    #[error("Animal name is required")]
    NameRequired,
    #[error("Invalid animal status: {0}")]
    InvalidStatus(String),
    #[error("Validation error: {0}")]
    Validation(#[from] validator::ValidationErrors),
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn animal_requires_name() {
        let tenant = Uuid::new_v4();
        let result = Animal::new(tenant, "".to_string(), Species::Dog);
        assert!(result.is_err());
    }

    #[test]
    fn animal_created_with_valid_data() {
        let tenant = Uuid::new_v4();
        let animal = Animal::new(tenant, "Luna".to_string(), Species::Cat).unwrap();
        assert_eq!(animal.name, "Luna");
        assert_eq!(animal.status, AnimalStatus::Intake);
        assert_eq!(animal.tenant_id, tenant);
    }

    #[test]
    fn animal_status_from_str_valid() {
        let status: AnimalStatus = "adoptable".parse().unwrap();
        assert_eq!(status, AnimalStatus::Adoptable);
    }

    #[test]
    fn animal_status_from_str_invalid() {
        let result: Result<AnimalStatus, _> = "flying".parse();
        assert!(result.is_err());
    }

    #[test]
    fn restricted_animal_returns_restricted_profile() {
        let tenant = Uuid::new_v4();
        let mut animal = Animal::new(tenant, "Shadow".to_string(), Species::Dog).unwrap();
        animal.is_restricted = true;
        let profile = animal.public_fields();
        assert!(profile.restricted);
        assert_eq!(profile.name, "[Restricted]");
    }

    #[test]
    fn unrestricted_animal_returns_full_profile() {
        let tenant = Uuid::new_v4();
        let mut animal = Animal::new(tenant, "Biscuit".to_string(), Species::Dog).unwrap();
        animal.public_bio = Some("Loves belly rubs".to_string());
        let profile = animal.public_fields();
        assert!(!profile.restricted);
        assert_eq!(profile.name, "Biscuit");
    }

    #[test]
    fn active_statuses() {
        assert!(AnimalStatus::Intake.is_active());
        assert!(AnimalStatus::Adoptable.is_active());
        assert!(!AnimalStatus::Adopted.is_active());
        assert!(!AnimalStatus::Deceased.is_active());
    }
}
