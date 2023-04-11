# (28) GraphQL - Subscription

## RESUME

1. Salah satu fitur utama dari Graphql adalah subscription. Subscription merupakan fitur GraphQL yang memungkinkan server mengirim data ke client saat peristiwa tertentu terjadi. Penggunaan subscription ini misalnya aplikasi apa pun yang menggunakan data real-time, seperti skor langsung, layanan chat, dan lain-lain juga memerlukan mekanisme di mana server dapat mendorong respons yang diperbarui ke kueri bergantung pada suatu event.

2. Subscription mirip dengan kueri karena mereka menentukan data yang akan dikirim ke client, tetapi tidak mengembalikan satu response, namun hasilnya dikirim setiap kali event tertentu terjadi di server tanpa client perlu mengirim ulang permintaan itu. Hal ini bekerja ketika client membuka saluran komunikasi dua arah dengan server dan mengirimkan kueri berlangganan yang menentukan acara mana yang diminati. Saat sebuah peristiwa dipicu, server mengeksekusi kueri GraphQL yang disimpan, dan hasilnya dikirim melalui saluran komunikasi yang sama yang dibuka oleh client. Salah satu yang membuat sistem ini bekerja adalah dengan menggunakan WebSockets, yang membuat sesi komunikasi interaktif dua arah antara browser pengguna dan server.

   Pada React JS dapat menggunakan fitur subscription dengan menghubungkan websocket dengan library graphql-ws. untuk menginstallnya dapa menggunakan perintah berikut di command prompt.

   ```cli
   yarn add graphql graphql-ws @apollo/client
   ```

3. Untuk menggunakan fitur subscription ini, kita perlu mengubah kode apollo-client.js menjadi split sehingga dapat memilih subscription atau tidak. Berikut kode apollo-client.js

   ```js
   import { ApolloClient, InMemoryCache } from "@apollo/client";
   import { split, HttpLink } from "@apollo/client";
   import { getMainDefinition } from "@apollo/client/utilities";
   import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
   import { createClient } from "graphql-ws";

   const httpLink = new HttpLink({
     uri: "https://frank-puma-39.hasura.app/v1/graphql",
     headers: {
       "x-hasura-admin-secret": "{your super secret key}",
     },
   });

   const wsLink = new GraphQLWsLink(
     createClient({
       url: "wss://frank-puma-39.hasura.app/v1/graphql",
       connectionParams: {
         headers: {
           "x-hasura-admin-secret": "{your super secret key}",
         },
       },
     })
   );

   // The split function takes three parameters:
   //
   // * A function that's called for each operation to execute
   // * The Link to use for an operation if the function returns a "truthy" value
   // * The Link to use for an operation if the function returns a "falsy" value
   const splitLink = split(
     ({ query }) => {
       const definition = getMainDefinition(query);
       return definition.kind === "OperationDefinition" && definition.operation === "subscription";
     },
     wsLink,
     httpLink
   );

   const client = new ApolloClient({
     link: splitLink,
     cache: new InMemoryCache(),
   });

   export default client;
   ```

   Pada kode di atas, terdapat dua pilihan fitur request yaitu menggunakan http dengan variabel httpLink dan ws (websocket) dengan variabel wsLink. Selanjutnya, pada variabel splitLink akan membuat splitter untuk request yang dituju. Lalu, variabel client akan diberikan akses link dengan variabel splitLink.

   Selanjutnya, membuat query subscription

   ```js
   export const SubscriptionProduct = gql`
     subscription ProductSubs {
       product {
         id
         name
         category
         freshness
         price
         description
         image
       }
     }
   `;
   ```

   Lalu, kita dapat menggunakan subscription dengan menggunakan Hooks useSubscription seperti berikut

   ```jsx
   import { SubscriptionProduct } from "../services/queryGraphql";
   const { data, loading, error } = useSubscription(SubscriptionProduct);

   return (
     <div>
       {!loading
         ? data?.product.map((data) => {
             return (
               <div>
                 <h1>{data.name}</h1>
                 <h1>{data.price}</h1>
                 <h1>{data.description}</h1>
               </div>
             );
           })
         : ""}
     </div>
   );
   ```
