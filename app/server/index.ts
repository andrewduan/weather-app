import "dotenv/config";
import { setDefaultAutoSelectFamily } from "node:net";
import cors from "cors";
import express from "express";

setDefaultAutoSelectFamily(false);
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import { typeDefs } from "./src/schema/schema.js";
import { resolvers } from "./src/resolvers/resolvers.js";

interface ResolverContext {
  apiKey: string | undefined;
  anthropicKey: string | undefined;
}

const port = Number(process.env.PORT || 4000);
const app = express();

const apolloServer = new ApolloServer<ResolverContext>({
  typeDefs,
  resolvers,
});

await apolloServer.start();

app.use(
  "/graphql",
  cors(),
  express.json(),
  expressMiddleware(apolloServer, {
    context: async (): Promise<ResolverContext> => ({
      apiKey: process.env.ACCUWEATHER_API_KEY,
      anthropicKey: process.env.ANTHROPIC_API_KEY,
    }),
  })
);

app.get("/health", (_, res) => {
  res.status(200).json({ ok: true });
});

app.listen(port, () => {
  console.log(`GraphQL BFF running at http://localhost:${port}/graphql`);
});
