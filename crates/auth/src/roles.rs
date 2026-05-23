use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq, Hash)]
#[serde(rename_all = "snake_case")]
pub enum Role {
    Owner,
    Admin,
    Vet,
    MedicalStaff,
    FosterCoordinator,
    AdoptionCoordinator,
    Volunteer,
    Foster,
    GrantWriter,
    Finance,
    ReadOnly,
    PublicIntake,
}

impl Role {
    pub fn display_name(&self) -> &str {
        match self {
            Role::Owner => "Owner",
            Role::Admin => "Admin",
            Role::Vet => "Veterinarian",
            Role::MedicalStaff => "Medical Staff",
            Role::FosterCoordinator => "Foster Coordinator",
            Role::AdoptionCoordinator => "Adoption Coordinator",
            Role::Volunteer => "Volunteer",
            Role::Foster => "Foster",
            Role::GrantWriter => "Grant Writer",
            Role::Finance => "Finance",
            Role::ReadOnly => "Read Only",
            Role::PublicIntake => "Public Intake",
        }
    }

    pub fn is_privileged(&self) -> bool {
        matches!(self, Role::Owner | Role::Admin | Role::Vet | Role::MedicalStaff)
    }
}
