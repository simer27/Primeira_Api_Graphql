import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server";
import { AppointmentesResolver } from "./resolvers/appointments-resolver";
import path from "node:path";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [AppointmentesResolver],
    emitSchemaFile: path.resolve(__dirname, "schema.gql"),
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log(`🚀 HTTP Server Running On ${url}`);
}

bootstrap();
