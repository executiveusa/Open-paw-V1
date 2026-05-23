pub mod adapters;
pub mod provider;

pub use adapters::stub::StubProvider;
pub use provider::{
    ChatMessage, ChatRole, CompletionRequest, CompletionResponse, LlmError, LlmProvider,
};
