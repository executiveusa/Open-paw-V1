use crate::{error::ApiError, state::AppState};
use axum::{
    extract::{Path, State},
    Json,
};
use serde::Deserialize;
use serde_json::{json, Value};

#[derive(Deserialize)]
pub struct CreateFunderBody {
    pub name: String,
    pub website_url: Option<String>,
}

pub async fn list_funders(
    State(state): State<AppState>,
    Path(tenant_id): Path<String>,
) -> Result<Json<Value>, ApiError> {
    let rows = sqlx::query(
        "SELECT id, name, website_url, focus_areas, created_at FROM funders WHERE tenant_id = ? ORDER BY name"
    )
    .bind(&tenant_id)
    .fetch_all(&state.db.pool)
    .await
    .map_err(|e| ApiError::Internal(e.to_string()))?;

    let data: Vec<Value> = rows
        .iter()
        .map(|r| {
            use sqlx::Row;
            json!({
                "id": r.get::<String, _>("id"),
                "name": r.get::<String, _>("name"),
                "website_url": r.get::<Option<String>, _>("website_url"),
                "focus_areas": r.get::<String, _>("focus_areas"),
                "created_at": r.get::<String, _>("created_at"),
            })
        })
        .collect();

    Ok(Json(json!({ "data": data })))
}

pub async fn create_funder(
    State(state): State<AppState>,
    Path(tenant_id): Path<String>,
    Json(body): Json<CreateFunderBody>,
) -> Result<Json<Value>, ApiError> {
    if body.name.trim().is_empty() {
        return Err(ApiError::BadRequest("Funder name is required".to_string()));
    }
    let id = uuid::Uuid::new_v4().to_string();
    let now = chrono::Utc::now().to_rfc3339();
    sqlx::query(
        "INSERT INTO funders (id, tenant_id, name, website_url, focus_areas, created_at, updated_at) VALUES (?, ?, ?, ?, '[]', ?, ?)"
    )
    .bind(&id)
    .bind(&tenant_id)
    .bind(&body.name)
    .bind(&body.website_url)
    .bind(&now)
    .bind(&now)
    .execute(&state.db.pool)
    .await
    .map_err(|e| ApiError::Internal(e.to_string()))?;

    Ok(Json(json!({ "data": { "id": id, "name": body.name } })))
}

pub async fn list_opportunities(
    State(state): State<AppState>,
    Path(tenant_id): Path<String>,
) -> Result<Json<Value>, ApiError> {
    let rows = sqlx::query(
        "SELECT g.id, g.title, g.description, g.award_min, g.award_max, g.deadline_at, g.status, f.name as funder_name \
         FROM grant_opportunities g \
         JOIN funders f ON g.funder_id = f.id \
         WHERE g.tenant_id = ? \
         ORDER BY g.deadline_at ASC"
    )
    .bind(&tenant_id)
    .fetch_all(&state.db.pool)
    .await
    .map_err(|e| ApiError::Internal(e.to_string()))?;

    let data: Vec<Value> = rows
        .iter()
        .map(|r| {
            use sqlx::Row;
            json!({
                "id": r.get::<String, _>("id"),
                "title": r.get::<String, _>("title"),
                "description": r.get::<Option<String>, _>("description"),
                "award_min": r.get::<Option<i64>, _>("award_min"),
                "award_max": r.get::<Option<i64>, _>("award_max"),
                "deadline_at": r.get::<Option<String>, _>("deadline_at"),
                "status": r.get::<String, _>("status"),
                "funder_name": r.get::<String, _>("funder_name"),
            })
        })
        .collect();

    Ok(Json(json!({ "data": data })))
}
