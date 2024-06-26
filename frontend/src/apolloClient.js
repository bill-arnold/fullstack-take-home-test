
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000', // Update the URI with your GraphQL server endpoint
  cache: new InMemoryCache(),
});

export default client;
