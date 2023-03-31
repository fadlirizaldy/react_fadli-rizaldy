# (20) Global State Management and Data Fetching

## Resume

1. Global state management digunakan ketika suatu state digunakan untuk beberapa komponen sekaligus. Global state management ini sangat diperlukan ketika kode yang dibuat ingin menghindari props drilling. Semakin kompleks suatu kode, maka semakin sulit juga jika ingin melakukan props drilling. Oleh karena itu global state management diperlukan. Library yang digunakan untuk global state management salah satunya adalah redux.

2. Redux adalah library yang membantu developer dalam menangani state global (State yang sama yang dipakai di beberapa halaman atau komponen). Hal yang pertama dilakukan untuk menggunakan redux adalah menginstall redux dan redux toolkit. Redux toolkit merupakan library yang dapat membantu dalam menulis kode reducer, action, dan store dengan mudah. Command untuk menginstall redux dan tookitnya:

   ```cli
   npm install react-redux @reduxjs/toolkit
   ```

redux digunakan ketika:

- terdapat state yang perlu digunakan di berbagai tempat
- state pada app sering berubah
- Logic untuk mengubah state cukup kompleks
- Perlu mentrack suatu state berubah seiring waktu

3. React Redux memiliki beberapa istilah konsep dasar yang perlu dipahami yaitu reducers, actions, dan store.

   - Reducers berisi tentang state global yang nantinya bisa dipakai di halaman manapun yang membutuhkan data tersebut. Di bagian ini juga terdapat fungsi yang digunakan untuk menampilkan atau memanipulasi (update / delete) state tersebut.

   - Action berisi action type yang mana berfungsi untuk menghubungkan perintah yang ingin dijalankan dengan fungsi reducers.

   - Store pada redux adalah kumpulan dari banyak slice. Slice tersebut merupakan kumpulan dari reducers dan state yang tersimpan.

Contoh penggunaan react redux untuk menampilkan data todo

1. buat file untuk menampung slicer bernama todoSlice.js

   ```js
   import { createSlice } from "@reduxjs/toolkit";

   const initialState = [{ id: "1", title: "Code", note: "Learn React Redux" }];
   const notesSlice = createSlice({
     name: "todos",
     initialState,
     reducers: {},
   });

   export default notesSlice.reducer;
   ```

2. Membuat store.js untuk menampung slice

   ```js
   import { configureStore } from "@reduxjs/toolkit";
   import notesReducer from "../todosSlice";
   export default configureStore({
     reducer: {
       todos: todosReducer,
     },
   });
   ```

3. Pada main.js kita menambahkan komponen dari redux bernama Provider

   ```js
   import store from "./store.js";
   ReactDOM.render(
     <React.StrictMode>
       <Provider store={store}>
         <BrowserRouter>
           <App />
         </BrowserRouter>
       </Provider>
     </React.StrictMode>,
     document.getElementById("root")
   );
   ```

4. Kita sudah bisa menampilkan data yang berada pada global state todos dengan hook redux bernama useSelector seperti berikut

   ```jsx
   import { useSelector } from "react-redux";

   const dataTodo = useSelector((state) => state.todos);

   return (
     <div>
       {dataTodo.map((todo) => {
         <div>
           <h1>{todo.title}</h1>
           <h2>{todo.note}</h2>
         </div>;
       })}
     </div>
   );
   ```
