import ApolloClient, { gql } from "apollo-boost"
const client = new ApolloClient({ uri: 'https://48p1r2roz4.sse.codesandbox.io' })
client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

export default client;
