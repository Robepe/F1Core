const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./graphql-schema'); // Importa tu esquema GraphQL

const app = express();
const PORT = process.env.PORT || 3000;

// Configura Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

// Define rutas y lógica de manejo de solicitudes adicionales
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor Node.js en ejecución en http://localhost:${PORT}`);
});
