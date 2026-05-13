# Weather App

A weather app with an AI assistant. The UI shows current conditions and a 5-day
forecast for any city. Users can also ask follow-up questions in natural
language ("what's it usually like in Paris in May?", "should I pack a jacket for
Tokyo next week?") and get answers grounded in real current weather and
historical climate records.

## Architecture

```
┌────────────────────┐   GraphQL    ┌────────────────────────────┐
│  React + Vite UI   │ ───────────▶ │  Express + Apollo Server   │
│  Apollo Client     │              │  (BFF)                     │
└────────────────────┘              └────────────────────────────┘
                                                │
                       ┌────────────────────────┼────────────────────────┐
                       ▼                        ▼                        ▼
                 AccuWeather API        Open-Meteo Archive         Anthropic API
                 (current + 5-day)      (historical climate)       (Claude)
```

- **Frontend** (`src/frontend`) — React + Vite + Apollo Client.
- **BFF** (`src/server`) — Express + Apollo Server. Owns all API keys; the
  browser never talks to upstream providers directly.

## AI assistant flow

When a user submits a question, the BFF:

1. Runs a PII check on the question (rejects emails, phone numbers, etc.).
2. Asks Claude to extract `{location, month, day?}` from the question, falling
   back to the currently-displayed location and current month.
3. Calls the Open-Meteo Archive API via `fetchHistoricalWeather` to pull the
   last 5 years of daily records for that location and date.
4. Summarises those records to plain text and passes them to Claude along with
   the user's current weather context, so the answer is grounded in real
   climate data rather than the model's general knowledge.

## Project layout

```
src/
├── frontend/        # React + Vite + Apollo Client
│   ├── App.tsx
│   ├── AiAssistance.tsx
│   ├── weather-query.ts
│   ├── pii.ts
│   └── ...
└── server/          # Express + Apollo Server BFF
    ├── index.ts
    ├── schema.ts
    ├── resolvers.ts
    ├── weather-service.ts      # AccuWeather
    ├── historical-weather.ts   # Open-Meteo archive
    ├── ai-service.ts           # Anthropic / Claude
    └── pii.ts
```

## Setup

1. **Install dependencies** (frontend + server are separate npm packages):

   ```bash
   npm run install:all
   ```

2. **Configure the BFF** — copy the example and fill in your keys:

   ```bash
   cp src/server/.env.example src/server/.env
   ```

   Required keys in `src/server/.env`:

   - `ACCUWEATHER_API_KEY` — for current weather + forecast
   - `ANTHROPIC_API_KEY` — for the AI assistant
   - `PORT` (optional, defaults to `4000`)

3. **Configure the frontend** (optional — defaults usually fine):

   ```bash
   cp src/frontend/.env.example src/frontend/.env
   ```

## Running

```bash
npm run dev            # frontend + server together
npm run dev:frontend   # frontend only (http://localhost:5173)
npm run dev:server     # server only   (http://localhost:4000/graphql)
```

Build the frontend bundle:

```bash
npm run build
```

## GraphQL API

```graphql
type Query {
  weather(location: String!, metric: Boolean = true): WeatherPayload!
  askAi(question: String!, weather: WeatherContextInput): String!
}
```

The GraphQL Playground is available at <http://localhost:4000/graphql> when the
server is running.
