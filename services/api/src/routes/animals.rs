use axum::{extract::{Path, State}, Json};
use serde::Deserialize;
use serde_json::{json, Value};
use crate::{error::ApiError, state::AppState};
use open_paw_storage::repositories::animals::AnimalRepository;

#[derive(Deserialize)]
pub struct CreateAnimalBody {
    pub name: String,
    pub species: String,
}

#[derive(Deserialize)]
pub struct UpdateAnimalStatusBody {
    pub status: String,
}

pub async fn list_animals(
    State(state): State<AppState>,
    Path(tenant_id): Path<String>,
) -> Result<Json<Value>, ApiError> {
    let repo = AnimalRepository::new(&state.db.pool);
    let animals = repo.find_by_tenant(&tenant_id).await?;
    Ok(Json(json!({ "data": animals })))
}

pub async fn get_animal(
    State(state): State<AppState>,
    Path((tenant_id, animal_id)): Path<(String, String)>,
) -> Result<Json<Value>, ApiError> {
    let repo = AnimalRepository::new(&state.db.pool);
    let animal = repo
        .find_by_id(&tenant_id, &animal_id)
        .await?
        .ok_or_else(|| ApiError::NotFound("Animal not found".to_string()))?;
    Ok(Json(json!({ "data": animal })))
}

pub async fn create_animal(
    State(state): State<AppState>,
    Path(tenant_id): Path<String>,
    Json(body): Json<CreateAnimalBody>,
) -> Result<Json<Value>, ApiError> {
    if body.name.trim().is_empty() {
        return Err(ApiError::BadRequest("Animal name is required".to_string()));
    }
    if body.species.trim().is_empty() {
        return Err(ApiError::BadRequest("Species is required".to_string()));
    }
    let repo = AnimalRepository::new(&state.db.pool);
    let animal = repo.create(&tenant_id, &body.name, &body.species).await?;
    Ok(Json(json!({ "data": animal })))
}

pub async fn update_animal_status(
    State(state): State<AppState>,
    Path((tenant_id, animal_id)): Path<(String, String)>,
    Json(body): Json<UpdateAnimalStatusBody>,
) -> Result<Json<Value>, ApiError> {
    let valid_statuses = [
        "intake", "quarantine", "medical_hold", "behavior_hold", "foster_needed",
        "in_foster", "adoptable", "adoption_pending", "adopted", "transferred",
        "returned", "lost", "found", "deceased",
    ];
    if !valid_statuses.contains(&body.status.as_str()) {
        return Err(ApiError::BadRequest(format!("Invalid status: {}", body.status)));
    }
    let repo = AnimalRepository::new(&state.db.pool);
    repo.update_status(&tenant_id, &animal_id, &body.status).await?;
    Ok(Json(json!({ "data": { "status": body.status } })))
}
