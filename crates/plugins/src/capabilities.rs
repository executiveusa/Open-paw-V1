use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq, Eq, Hash)]
#[serde(rename_all = "snake_case")]
pub enum PluginCapability {
    CanReadAnimals,
    CanWriteAnimals,
    CanReadMedicalRecords,
    CanWriteTasks,
    CanPublishPublicProfiles,
    CanReadGrants,
    CanWriteGrantApplications,
}

impl PluginCapability {
    pub fn description(&self) -> &str {
        match self {
            Self::CanReadAnimals => "Read animal records",
            Self::CanWriteAnimals => "Create and update animal records",
            Self::CanReadMedicalRecords => "Read medical records (restricted)",
            Self::CanWriteTasks => "Create and update tasks",
            Self::CanPublishPublicProfiles => "Publish public adoption profiles",
            Self::CanReadGrants => "Read grant opportunities",
            Self::CanWriteGrantApplications => "Draft grant applications",
        }
    }

    pub fn is_sensitive(&self) -> bool {
        matches!(
            self,
            Self::CanReadMedicalRecords | Self::CanWriteAnimals | Self::CanPublishPublicProfiles
        )
    }
}
