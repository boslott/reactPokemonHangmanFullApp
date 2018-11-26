import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';
// import { LOCAL_STATE_QUERY } from '../components/Cart';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
    // Local data
    clientState: {
      resolvers: {
        Mutation: {
          setCurrentUser(_, variables, ctx) {
            // Query the DB for the current user

            // Set the current user to the local state
            const currentUser ={
              data: {
                id: variables.id,
                name: variables.name,
                gameOption: variables.gameOption,
              },
            };
            caches.writeData(data);
            return data;
          }
          // params: (_, variables, ApolloClient)
          // toggleCart(_, variables, { cache }) {
          //   // First read the cartOpen value from the cache
          //   const { cartOpen } = cache.readQuery({
          //     query: LOCAL_STATE_QUERY,
          //   }); 
          //   // Write the cart State to the opposite
          //   const data = {
          //     data: { cartOpen: !cartOpen },
          //   };
          //   cache.writeData(data);
          //   return data;
          // },
        },
      },
      defaults:  {
        currentUser: {
          __typename: 'CurrentUser',
          id: '0001',
          name: 'Carl Default',
          gameOption: 'DEMO',
        }
      }
    }
  });
}

export default withApollo(createClient);
