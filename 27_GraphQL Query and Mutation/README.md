# (27) GraphQL Query and Mutation

## Resume

1. GraphQL adalah bahasa query dan runtime sisi server untuk Application Programming Interfaces (API) yang memprioritaskan untuk memberi client data sesuai dengan apa yang direquest. Graphql meminimalisir data yang perlu ditransfer. Salah satu keunggulan graphql adalah developer hanya memerlukan satu single endpoint untuk semua request yang diperlukan. Graphql juga memiliki kemudah dalam mengumpulkan data dari berbagai sumber.

2. Mutation merupakan suatu fitur utama dari graphql yang berfungsi untuk mengupdate, menambah, dan menghapus data. Mutation bekerja dengan didefinisikan terlebih dahulu query untuk memanipulasi data dan mendeskripsikan apa yang ingin direturn. Sebagai contoh client ingin menambah data pada database menggunakan graphql maka dapat menggunakan mutation create data.

   Contoh query mutation pada graphql

   - Menambah message

   ```gql
   mutation MyMutationName {
     createMessage(input: { author: "John Doe", content: "Hello, How is it going?" }) {
       id
       content
     }
   }
   ```

   lalu akan menghasilkan data seperti berikut

   ```json
   {
     "data": {
       "createMessage": {
         "id": "7f1413ec-4ffa-45bc-bce2-583072745d84",
         "content": "Hello, How is it going?"
       }
     }
   }
   ```

3. Untuk menggunakan graphql, dapat menggunakan layanan bernama Hasura. Hasura merupakan sebuah layaran yang menyediakan graphql dan rest api. Hasura dapat dimanaged secara mandiri maupun default.
   Untuk menghubungkan Reactjs dengan Graphql dapat menggunakan library bantuan bernama Apollo Client. Apollo Client merupakan library state management javascript yang memungkinkan mengatur data baik local maupun data graphql. Library ini memungkinkan pengguna untuk fetch, cache, dan memodifikasi aplikasi data dan mengupdate UI. Perintah untuk menginstall graphql dan Apollo Client sebagai berikut

   ```cli
   yarn add graphql @apollo/client
   ```

   Setelah itu, untuk menggunakan graphql pada React, kita perlu mensetup apollo client terlebih dahulu seperti berikut.

   ```js
   import { ApolloClient, InMemoryCache } from "@apollo/client";

   const client = new ApolloClient({
     uri: "{url yang diberikan}",
     cache: new InMemoryCache(),
     headers: {
       "x-hasura-admin-secret": "{your supersecret key}",
     },
   });

   export default client;
   ```

   Selanjutnya kita perlu menyediakan file js yang berisi query graphql untuk dieksekusi, sebagai contoh query untuk mengambil data product dan mutasi menambah data.

   ```js
   import { gql } from "@apollo/client";

   export const GetProductList = gql`
     query GetProduct {
       product {
         id
         name
         description
         freshness
         category
         price
       }
     }
   `;

   export const AddProduct = gql`
     mutation MyQuery($object: product_insert_input!) {
       insert_product_one(object: $object) {
         id
         name
         description
       }
     }
   `;
   ```

   Selanjutnya kita dapat menggunakan Hooks yang disediakan oleh Apollo Client yaitu useQuery untuk mengambil data dan useMutation untuk menggunakan mutation. contoh query.

   ```jsx
   import { GetProductList } from "../services/queryGraphql";

   const { data, loading, error } = useQuery(GetProductList);

   return (
     <div>
       {!loading
         ? data.product.map((data) => {
             return (
               <div>
                 <h2>{data.product.name}</h2>
                 <h2>{data.product.price}</h2>
               </div>
             );
           })
         : ""}
     </div>
   );
   ```
