import { type FormEvent, type KeyboardEvent, useEffect, useRef, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { ASK_AI } from "./weather-query";
import type { AskAiResponse, AskAiVariables, WeatherContextInput } from "./types";
import { detectPii } from "./pii";

interface AiAssistanceProps {
  open: boolean;
  onClose: () => void;
  weatherContext: WeatherContextInput | null;
}

export const AiAssistance = ({ open, onClose, weatherContext }: AiAssistanceProps) => {
  const [question, setQuestion] = useState("");
  const [cleared, setCleared] = useState(false);
  const [piiError, setPiiError] = useState<string | null>(null);
  const [askAi, { data, loading, error }] = useLazyQuery<AskAiResponse, AskAiVariables>(ASK_AI, {
    fetchPolicy: "no-cache",
    onCompleted: () => setCleared(false),
    onError: () => setCleared(false),
  });
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (open) {
      textareaRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const trySubmit = (value: string) => {
    if (value.length === 0 || loading) return;
    const pii = detectPii(value);
    if (!pii.ok) {
      setPiiError(pii.reason ?? "Your question appears to contain sensitive information.");
      return;
    }
    setPiiError(null);
    askAi({ variables: { question: value, weather: weatherContext } });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    trySubmit(question.trim());
  };

  const onTextareaKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      trySubmit(question.trim());
    }
  };

  const onClear = () => {
    setQuestion("");
    setCleared(true);
    setPiiError(null);
  };

  const showData = !cleared && data?.askAi;
  const showError = !cleared && error;
  const hasResult = showData || showError;

  return (
    <div className="ai-backdrop" onClick={onClose}>
      <div
        className="ai-modal"
        role="dialog"
        aria-modal="true"
        aria-label="AI assistance"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="ai-header">
          <h2>Weather AI assistant</h2>
          <button type="button" className="ai-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </header>

        <section className="ai-section">
          <label htmlFor="ai-question" className="ai-label">
            Ask a question
          </label>
          <form className="ai-input-row" onSubmit={onSubmit}>
            <textarea
              id="ai-question"
              ref={textareaRef}
              className="ai-textarea"
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
                if (piiError) setPiiError(null);
              }}
              onKeyDown={onTextareaKeyDown}
              placeholder={
                weatherContext
                  ? `Ask about the weather in ${weatherContext.locationName}...`
                  : "Ask anything about the weather..."
              }
              rows={3}
            />
            <button
              type="submit"
              className="ai-submit"
              disabled={loading || question.trim().length === 0}
              aria-label="Submit question"
              title="Send (Enter)"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path
                  d="M12 4l-7 7h4v9h6v-9h4z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </form>
          {piiError && (
            <p className="ai-status ai-error" role="alert">
              {piiError}
            </p>
          )}
        </section>

        <section className="ai-section">
          <div className="ai-answer-header">
            <span className="ai-label">Answer</span>
            {hasResult && (
              <button type="button" className="ai-clear" onClick={onClear}>
                Clear
              </button>
            )}
          </div>
          <div className="ai-answer" aria-live="polite">
            {loading && <p className="ai-status">Thinking...</p>}
            {showError && !loading && (
              <p className="ai-status ai-error">Failed to get a response: {error!.message}</p>
            )}
            {!loading && !showError && showData && (
              <p className="ai-answer-text">{data!.askAi}</p>
            )}
            {!loading && !hasResult && (
              <p className="ai-placeholder">Ask a question to see an answer here.</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
