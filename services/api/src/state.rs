use std::sync::Arc;
use open_paw_storage::Database;

#[derive(Clone)]
pub struct AppState {
    pub db: Arc<Database>,
}

impl AppState {
    pub fn new(db: Database) -> Self {
        Self { db: Arc::new(db) }
    }
}
