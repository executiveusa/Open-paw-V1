use sqlx::SqlitePool;
use uuid::Uuid;
use chrono::Utc;
use crate::error::StorageError;

#[derive(sqlx::FromRow, serde::Serialize, serde::Deserialize, Debug, Clone)]
pub struct AnimalRow {
    pub id: String,
    pub tenant_id: String,
    pub name: String,
    pub species: String,
    pub breed: Option<String>,
    pub sex: String,
    pub age_estimate_months: Option<i64>,
    pub weight_kg: Option<f64>,
    pub color: Option<String>,
    pub microchip_id: Option<String>,
    pub intake_date: String,
    pub intake_source: Option<String>,
    pub status: String,
    pub location: Option<String>,
    pub public_bio: Option<String>,
    pub is_restricted: bool,
    pub created_at: String,
    pub updated_at: String,
}

pub struct AnimalRepository<'a> {
    pub pool: &'a SqlitePool,
}

impl<'a> AnimalRepository<'a> {
    pub fn new(pool: &'a SqlitePool) -> Self {
        Self { pool }
    }

    pub async fn find_by_tenant(&self, tenant_id: &str) -> Result<Vec<AnimalRow>, StorageError> {
        let rows = sqlx::query_as::<_, AnimalRow>(
            "SELECT id, tenant_id, name, species, breed, sex, age_estimate_months, weight_kg, color, microchip_id, intake_date, intake_source, status, location, public_bio, is_restricted, created_at, updated_at FROM animals WHERE tenant_id = ? ORDER BY created_at DESC"
        )
        .bind(tenant_id)
        .fetch_all(self.pool)
        .await?;
        Ok(rows)
    }

    pub async fn find_by_id(&self, tenant_id: &str, id: &str) -> Result<Option<AnimalRow>, StorageError> {
        let row = sqlx::query_as::<_, AnimalRow>(
            "SELECT id, tenant_id, name, species, breed, sex, age_estimate_months, weight_kg, color, microchip_id, intake_date, intake_source, status, location, public_bio, is_restricted, created_at, updated_at FROM animals WHERE tenant_id = ? AND id = ?"
        )
        .bind(tenant_id)
        .bind(id)
        .fetch_optional(self.pool)
        .await?;
        Ok(row)
    }

    pub async fn create(&self, tenant_id: &str, name: &str, species: &str) -> Result<AnimalRow, StorageError> {
        let id = Uuid::new_v4().to_string();
        let now = Utc::now().to_rfc3339();
        let intake_date = Utc::now().to_rfc3339();
        sqlx::query(
            "INSERT INTO animals (id, tenant_id, name, species, sex, status, intake_date, is_restricted, created_at, updated_at) VALUES (?, ?, ?, ?, 'unknown', 'intake', ?, 0, ?, ?)"
        )
        .bind(&id)
        .bind(tenant_id)
        .bind(name)
        .bind(species)
        .bind(&intake_date)
        .bind(&now)
        .bind(&now)
        .execute(self.pool)
        .await?;
        Ok(AnimalRow {
            id,
            tenant_id: tenant_id.to_string(),
            name: name.to_string(),
            species: species.to_string(),
            breed: None,
            sex: "unknown".to_string(),
            age_estimate_months: None,
            weight_kg: None,
            color: None,
            microchip_id: None,
            intake_date,
            intake_source: None,
            status: "intake".to_string(),
            location: None,
            public_bio: None,
            is_restricted: false,
            created_at: now.clone(),
            updated_at: now,
        })
    }

    pub async fn update_status(&self, tenant_id: &str, id: &str, status: &str) -> Result<(), StorageError> {
        let now = Utc::now().to_rfc3339();
        let result = sqlx::query(
            "UPDATE animals SET status = ?, updated_at = ? WHERE tenant_id = ? AND id = ?"
        )
        .bind(status)
        .bind(&now)
        .bind(tenant_id)
        .bind(id)
        .execute(self.pool)
        .await?;
        if result.rows_affected() == 0 {
            return Err(StorageError::NotFound);
        }
        Ok(())
    }
}
