use async_trait::async_trait;
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Serialize, Deserialize, PartialEq)]
#[serde(rename_all = "lowercase")]
pub enum ChatRole {
    System,
    User,
    Assistant,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ChatMessage {
    pub role: ChatRole,
    pub content: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CompletionRequest {
    pub messages: Vec<ChatMessage>,
    pub max_tokens: Option<u32>,
    pub temperature: Option<f32>,
    pub model: Option<String>,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CompletionResponse {
    pub content: String,
    pub model: String,
    pub input_tokens: Option<u32>,
    pub output_tokens: Option<u32>,
    pub is_draft: bool,
}

#[derive(Debug, thiserror::Error)]
pub enum LlmError {
    #[error("Provider not configured")]
    NotConfigured,
    #[error("API error: {0}")]
    ApiError(String),
    #[error("Rate limited")]
    RateLimited,
    #[error("Context too long")]
    ContextTooLong,
    #[error("Network error: {0}")]
    Network(#[from] reqwest::Error),
}

#[async_trait]
pub trait LlmProvider: Send + Sync {
    async fn complete(&self, request: CompletionRequest) -> Result<CompletionResponse, LlmError>;
    fn provider_name(&self) -> &str;
    fn is_available(&self) -> bool;
}
