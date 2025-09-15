import "reflect-metadata";
import { ApolloServer, BaseContext } from "@apollo/server";
import { dataSource } from "./config/db";
import { buildSchema as typeGraphqlBuildSchema } from "type-graphql";
import { startStandaloneServer } from "@apollo/server/standalone";
import { PaysResolver } from "./resolvers/PaysResolver";




const port = 3000;

async function startServer() {
  await dataSource.initialize();
  // Build the GraphQL schema (sans resolvers)
  const schema = await typeGraphqlBuildSchema({
    resolvers: [PaysResolver],
  });

  const apolloServer = new ApolloServer({ schema });
  const { url } = await startStandaloneServer(apolloServer, {
    listen: { port },
  });
  console.info("Server started on " + url);
}
startServer();
