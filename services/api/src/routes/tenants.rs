use axum::{extract::{Path, State}, Json};
use serde::Deserialize;
use serde_json::{json, Value};
use crate::{error::ApiError, state::AppState};
use open_paw_storage::repositories::tenants::TenantRepository;

#[derive(Deserialize)]
pub struct CreateTenantBody {
    pub name: String,
    pub org_type: Option<String>,
}

pub async fn list_tenants(State(state): State<AppState>) -> Result<Json<Value>, ApiError> {
    let repo = TenantRepository::new(&state.db.pool);
    let tenants = repo.find_all().await?;
    Ok(Json(json!({ "data": tenants })))
}

pub async fn get_tenant(
    State(state): State<AppState>,
    Path(tenant_id): Path<String>,
) -> Result<Json<Value>, ApiError> {
    let repo = TenantRepository::new(&state.db.pool);
    let tenant = repo
        .find_by_id(&tenant_id)
        .await?
        .ok_or_else(|| ApiError::NotFound("Tenant not found".to_string()))?;
    Ok(Json(json!({ "data": tenant })))
}

pub async fn create_tenant(
    State(state): State<AppState>,
    Json(body): Json<CreateTenantBody>,
) -> Result<Json<Value>, ApiError> {
    if body.name.trim().is_empty() {
        return Err(ApiError::BadRequest("Tenant name is required".to_string()));
    }
    let repo = TenantRepository::new(&state.db.pool);
    let org_type = body.org_type.as_deref().unwrap_or("rescue");
    let tenant = repo.create(&body.name, org_type).await?;
    Ok(Json(json!({ "data": tenant })))
}
