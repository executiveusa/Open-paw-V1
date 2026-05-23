use serde::{Deserialize, Serialize};
use uuid::Uuid;
use crate::capabilities::PluginCapability;

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PluginManifest {
    pub id: Uuid,
    pub name: String,
    pub version: String,
    pub description: String,
    pub author: String,
    pub capabilities: Vec<PluginCapability>,
    pub wasm_hash: Option<String>,
}

impl PluginManifest {
    pub fn has_sensitive_capabilities(&self) -> bool {
        self.capabilities.iter().any(|c| c.is_sensitive())
    }
}
