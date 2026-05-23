use crate::roles::Role;

#[derive(Debug, Clone, PartialEq, Eq)]
pub enum Action {
    CreateAnimal,
    EditAnimal,
    DeleteAnimal,
    ReadMedical,
    WriteMedical,
    ExportRecords,
    PublishPublicProfile,
    DraftGrant,
    SubmitGrant,
    SendMessage,
    ReadAuditLog,
    ManageUsers,
    ManageTenant,
}

#[derive(Debug, Clone)]
pub struct Permission {
    pub role: Role,
    pub action: Action,
    pub allowed: bool,
}

pub fn can_perform(role: &Role, action: &Action) -> bool {
    match (role, action) {
        // Owner and Admin can do everything
        (Role::Owner | Role::Admin, _) => true,

        // Vet and medical staff
        (Role::Vet | Role::MedicalStaff, Action::ReadMedical) => true,
        (Role::Vet | Role::MedicalStaff, Action::WriteMedical) => true,
        (Role::Vet | Role::MedicalStaff, Action::CreateAnimal) => true,
        (Role::Vet | Role::MedicalStaff, Action::EditAnimal) => true,

        // Foster coordinator
        (Role::FosterCoordinator, Action::CreateAnimal) => true,
        (Role::FosterCoordinator, Action::EditAnimal) => true,

        // Adoption coordinator
        (Role::AdoptionCoordinator, Action::EditAnimal) => true,
        (Role::AdoptionCoordinator, Action::PublishPublicProfile) => true,

        // Grant writer
        (Role::GrantWriter, Action::DraftGrant) => true,
        (Role::GrantWriter, Action::ReadMedical) => false,

        // Finance
        (Role::Finance, Action::DraftGrant) => true,
        (Role::Finance, Action::ExportRecords) => true,

        // Volunteer - limited
        (Role::Volunteer, Action::CreateAnimal) => false,
        (Role::Volunteer, Action::ReadMedical) => false,

        // Foster - very limited
        (Role::Foster, Action::ReadMedical) => false,
        (Role::Foster, Action::WriteMedical) => false,

        // Read only
        (Role::ReadOnly, Action::ReadMedical) => false,
        (Role::ReadOnly, _) => false,

        // Public intake - no privileged actions
        (Role::PublicIntake, _) => false,

        _ => false,
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn volunteer_cannot_read_medical() {
        assert!(!can_perform(&Role::Volunteer, &Action::ReadMedical));
    }

    #[test]
    fn vet_can_read_medical() {
        assert!(can_perform(&Role::Vet, &Action::ReadMedical));
    }

    #[test]
    fn public_intake_cannot_publish_profile() {
        assert!(!can_perform(&Role::PublicIntake, &Action::PublishPublicProfile));
    }

    #[test]
    fn grant_writer_can_draft_grant() {
        assert!(can_perform(&Role::GrantWriter, &Action::DraftGrant));
    }

    #[test]
    fn grant_writer_cannot_submit_grant_automatically() {
        // GrantWriter cannot SubmitGrant without approval (admin action)
        assert!(!can_perform(&Role::GrantWriter, &Action::SubmitGrant));
    }

    #[test]
    fn admin_can_export_records() {
        assert!(can_perform(&Role::Admin, &Action::ExportRecords));
    }

    #[test]
    fn read_only_cannot_write() {
        assert!(!can_perform(&Role::ReadOnly, &Action::EditAnimal));
        assert!(!can_perform(&Role::ReadOnly, &Action::WriteMedical));
    }

    #[test]
    fn owner_can_do_everything() {
        assert!(can_perform(&Role::Owner, &Action::DeleteAnimal));
        assert!(can_perform(&Role::Owner, &Action::ManageUsers));
        assert!(can_perform(&Role::Owner, &Action::SubmitGrant));
    }
}
