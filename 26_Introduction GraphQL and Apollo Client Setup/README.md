# (26) Introduction GraphQL and Apollo Client Setup

## Resume

1.  GraphQL merupakan bahasa query untuk sebuah API (Application Program Interface). Graphql merupakan suatu runtime server yang digunakan untuk execute sebuah query dengan menyamakan tipe data yang sesuai. Graphql meminimalisir data yang perlu ditransfer. Salah satu keunggulan graphql adalah developer hanya memerlukan satu single endpoint untuk semua request yang diperlukan.

2.  Developer dapat mencoba graphql dengan Hasura, Apollo Server, dan lain-lain. Graphql juga dapat digunakan di client menggunakan Prisma, Apollo Client, Postman, dll. Graphql memiliki tiga fitur utama yang paling sering digunakan yaitu:

    - Query : untuk query database atau mendapatkan data dari database
    - Mutation : untuk menambah, update, atau delete data pada database.
    - Subscription : Mendapatkan data secara realtime berdasarkan suatu events.

    Contoh query sederhana Graphql untuk mendapatkan data product:

    ```gql
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
    ```

    contoh query untuk menambahkan satu data pada database.

    ```gql
    mutation MyQuery($object: product_insert_input!) {
      insert_product_one(object: $object) {
        id
        name
        description
      }
    }
    ```

3.  Untuk menggunakan graphql, dapat menggunakan layanan bernama Hasura. Hasura merupakan sebuah layaran yang menyediakan graphql dan rest api. Hasura dapat dimanaged secara mandiri maupun default.
    Untuk menghubungkan Reactjs dengan Graphql dapat menggunakan library bantuan bernama Apollo Client. Apollo Client merupakan library state management javascript yang memungkinkan mengatur data baik local maupun data graphql. Library ini memungkinkan pengguna untuk fetch, cache, dan memodifikasi aplikasi data dan mengupdate UI. Perintah untuk menginstall graphql dan Apollo Client sebagai berikut

    ```cli
    yarn add graphql @apollo/client
    ```
