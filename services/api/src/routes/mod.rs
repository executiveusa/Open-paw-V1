pub mod health;
pub mod animals;
pub mod tenants;
pub mod grants;

use axum::{Router, routing::get};
use tower_http::cors::{Any, CorsLayer};
use tower_http::trace::TraceLayer;
use crate::state::AppState;

pub fn create_router(state: AppState) -> Router {
    let cors = CorsLayer::new()
        .allow_origin(Any)
        .allow_methods(Any)
        .allow_headers(Any);

    Router::new()
        .route("/health", get(health::health))
        .route("/api/v1/health", get(health::health))
        .route("/api/v1/tenants", get(tenants::list_tenants).post(tenants::create_tenant))
        .route("/api/v1/tenants/:tenant_id", get(tenants::get_tenant))
        .route(
            "/api/v1/tenants/:tenant_id/animals",
            get(animals::list_animals).post(animals::create_animal),
        )
        .route(
            "/api/v1/tenants/:tenant_id/animals/:animal_id",
            get(animals::get_animal).patch(animals::update_animal_status),
        )
        .route(
            "/api/v1/tenants/:tenant_id/funders",
            get(grants::list_funders).post(grants::create_funder),
        )
        .route(
            "/api/v1/tenants/:tenant_id/grant-opportunities",
            get(grants::list_opportunities),
        )
        .layer(cors)
        .layer(TraceLayer::new_for_http())
        .with_state(state)
}
