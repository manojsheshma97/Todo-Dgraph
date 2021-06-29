import React from 'react'


import ApolloClient from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink } from "apollo-link-http";

import TodoApp from "./TodoApp";
//import config from "./config.json";
import './App.css';

const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: 'https://patient-voice.us-east-1.aws.cloud.dgraph.io/graphql',
    options: {
      reconnect: true,
    },
  });

  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
  });
}

const App = () => {
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>todos</h1>
        <TodoApp />
    </div>
    </ApolloProvider>
  );
}

export default App
