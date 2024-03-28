const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const axios = require('axios');

// Define your GraphQL schema
const typeDefs = gql`
  type Query {
    openAiResponse(prompt: String!): String
  }
`;

// Define resolvers for your schema
const resolvers = {
   
  Query: {
    openAiResponse: async (_, { prompt }) => {
      try {
        const response = await axios.post(
          "https://api.openai.com/v1/completions",
          {
            model: "gpt-3.5-turbo-16k",
            messages: [{ role: "user", content: prompt }],
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:"Bearer " + process.env.NEXT_PUBLIC_GPT_API,
            },
          }
        );
        return response.data.choices[0].text.trim();
      } catch (error) {
        console.error("Error querying OpenAI:", error);
        throw new Error("Failed to get response from OpenAI");
      }
    },
  },
};

// Create an instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.start().then(res => {
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
});
