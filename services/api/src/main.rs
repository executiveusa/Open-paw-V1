mod config;
mod error;
mod middleware;
mod routes;
mod state;

use std::net::SocketAddr;
use tracing::info;
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    tracing_subscriber::registry()
        .with(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "open_paw_api=debug,tower_http=debug".into()),
        )
        .with(tracing_subscriber::fmt::layer())
        .init();

    let cfg = config::Config::from_env();
    let db = open_paw_storage::Database::connect(&cfg.database_url).await?;
    db.run_migrations().await?;
    info!("Migrations applied");

    let app_state = state::AppState::new(db);
    let app = routes::create_router(app_state);

    let addr: SocketAddr = format!("{}:{}", cfg.host, cfg.port).parse()?;
    info!("Open Paw API listening on {}", addr);

    let listener = tokio::net::TcpListener::bind(addr).await?;
    axum::serve(listener, app).await?;
    Ok(())
}
