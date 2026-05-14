export type PiiCategory =
  | "credit_card"
  | "ssn"
  | "email"
  | "street_address"
  | "api_key";

export interface PiiDetectionResult {
  ok: boolean;
  category?: PiiCategory;
  reason?: string;
}

const luhnValid = (digits: string): boolean => {
  let sum = 0;
  let alternate = false;
  for (let i = digits.length - 1; i >= 0; i--) {
    let n = parseInt(digits.charAt(i), 10);
    if (Number.isNaN(n)) return false;
    if (alternate) {
      n *= 2;
      if (n > 9) n -= 9;
    }
    sum += n;
    alternate = !alternate;
  }
  return sum > 0 && sum % 10 === 0;
};

const looksLikeCreditCard = (text: string): boolean => {
  const re = /(?:\d[ -]?){13,19}/g;
  for (const match of text.matchAll(re)) {
    const digits = match[0].replace(/[ -]/g, "");
    if (digits.length >= 13 && digits.length <= 19 && luhnValid(digits)) {
      return true;
    }
  }
  return false;
};

const SSN_RE = /\b\d{3}-\d{2}-\d{4}\b/;
const EMAIL_RE = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
const API_KEY_RE =
  /\b(?:AKIA[0-9A-Z]{16}|sk-[A-Za-z0-9]{20,}|ghp_[A-Za-z0-9]{20,}|xox[baprs]-[A-Za-z0-9-]{10,}|pk_live_[A-Za-z0-9]{20,}|AIza[A-Za-z0-9_-]{30,})\b/;
const STREET_RE =
  /\b\d{1,5}\s+[A-Za-z][A-Za-z.'-]*(?:\s+[A-Za-z][A-Za-z.'-]*){0,4}\s+(?:street|st|avenue|ave|road|rd|boulevard|blvd|drive|dr|lane|ln|court|ct|place|pl|way|highway|hwy|parkway|pkwy|terrace|ter)\b\.?/i;

export const detectPii = (text: string): PiiDetectionResult => {
  if (looksLikeCreditCard(text)) {
    return {
      ok: false,
      category: "credit_card",
      reason:
        "Your question appears to contain a credit card number. Please remove sensitive information and try again.",
    };
  }
  if (SSN_RE.test(text)) {
    return {
      ok: false,
      category: "ssn",
      reason:
        "Your question appears to contain a Social Security Number. Please remove sensitive information and try again.",
    };
  }
  if (API_KEY_RE.test(text)) {
    return {
      ok: false,
      category: "api_key",
      reason:
        "Your question appears to contain an API key or access token. Please remove it and try again.",
    };
  }
  if (EMAIL_RE.test(text)) {
    return {
      ok: false,
      category: "email",
      reason:
        "Your question appears to contain an email address. Please remove personal contact information and try again.",
    };
  }
  if (STREET_RE.test(text)) {
    return {
      ok: false,
      category: "street_address",
      reason:
        "Your question appears to contain a specific street address. Use a city or neighborhood name instead.",
    };
  }
  return { ok: true };
};
