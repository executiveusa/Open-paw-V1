use async_trait::async_trait;
use crate::provider::{ChatRole, CompletionRequest, CompletionResponse, LlmError, LlmProvider};

pub struct StubProvider {
    pub name: String,
}

impl StubProvider {
    pub fn new(name: impl Into<String>) -> Self {
        Self { name: name.into() }
    }
}

#[async_trait]
impl LlmProvider for StubProvider {
    async fn complete(&self, request: CompletionRequest) -> Result<CompletionResponse, LlmError> {
        let user_content = request
            .messages
            .iter()
            .find(|m| m.role == ChatRole::User)
            .map(|m| m.content.as_str())
            .unwrap_or("(empty)");

        Ok(CompletionResponse {
            content: format!("[DRAFT — AI OUTPUT REQUIRES HUMAN REVIEW]\n\nResponding to: {}", user_content),
            model: format!("stub/{}", self.name),
            input_tokens: Some(100),
            output_tokens: Some(50),
            is_draft: true,
        })
    }

    fn provider_name(&self) -> &str {
        &self.name
    }

    fn is_available(&self) -> bool {
        true
    }
}
