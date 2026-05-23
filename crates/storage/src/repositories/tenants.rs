use crate::error::StorageError;
use chrono::Utc;
use sqlx::SqlitePool;
use uuid::Uuid;

#[derive(sqlx::FromRow, serde::Serialize, serde::Deserialize, Debug, Clone)]
pub struct TenantRow {
    pub id: String,
    pub name: String,
    pub slug: String,
    pub org_type: String,
    pub contact_email: Option<String>,
    pub is_active: bool,
    pub created_at: String,
    pub updated_at: String,
}

pub struct TenantRepository<'a> {
    pub pool: &'a SqlitePool,
}

impl<'a> TenantRepository<'a> {
    pub fn new(pool: &'a SqlitePool) -> Self {
        Self { pool }
    }

    pub async fn find_all(&self) -> Result<Vec<TenantRow>, StorageError> {
        let rows = sqlx::query_as::<_, TenantRow>(
            "SELECT id, name, slug, org_type, contact_email, is_active, created_at, updated_at FROM tenants WHERE is_active = 1"
        )
        .fetch_all(self.pool)
        .await?;
        Ok(rows)
    }

    pub async fn find_by_id(&self, id: &str) -> Result<Option<TenantRow>, StorageError> {
        let row = sqlx::query_as::<_, TenantRow>(
            "SELECT id, name, slug, org_type, contact_email, is_active, created_at, updated_at FROM tenants WHERE id = ?"
        )
        .bind(id)
        .fetch_optional(self.pool)
        .await?;
        Ok(row)
    }

    pub async fn create(&self, name: &str, org_type: &str) -> Result<TenantRow, StorageError> {
        let id = Uuid::new_v4().to_string();
        let slug = name
            .to_lowercase()
            .chars()
            .map(|c| if c.is_alphanumeric() { c } else { '-' })
            .collect::<String>();
        let now = Utc::now().to_rfc3339();
        sqlx::query(
            "INSERT INTO tenants (id, name, slug, org_type, is_active, created_at, updated_at) VALUES (?, ?, ?, ?, 1, ?, ?)"
        )
        .bind(&id)
        .bind(name)
        .bind(&slug)
        .bind(org_type)
        .bind(&now)
        .bind(&now)
        .execute(self.pool)
        .await?;
        Ok(TenantRow {
            id,
            name: name.to_string(),
            slug,
            org_type: org_type.to_string(),
            contact_email: None,
            is_active: true,
            created_at: now.clone(),
            updated_at: now,
        })
    }
}
