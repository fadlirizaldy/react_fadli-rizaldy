# (16) React Hook

## Resume

1. React Hooks pada dasarnya adalah function bawaan yang disediakan React untuk mempermudah developer dalam menggunakan state dan fitur React lain seperti lifecycle, context, dll. React Hooks merupakan fitur baru di React 16.8.

2. Terdapat beberapa Hooks yang sering digunakan yaitu :

   - useState()
     merupakan function yang digunakan untuk membuat dan mengupdate sebuah state.
   - useEffect()
     merupakan function yang memungkinkan untuk membuat side effect pada komponen dan juga merupakan life cycle pada functional komponen. Side effect ini akan dieksekusi setelah terjadi rendering.
   - useContext()
     merupakan function yang digunakan dalam penggunaan context

3. Contoh penggunaan useState dan useEffect:

   - useState()

   ```jsx
   import React, { useState } from "react";

   export default function App() {
     const [state, setState] = useState("Captain");

     const handleClick = () => {
       setState("Monsta");
     };

     return (
       <div>
         <h1>Hello!</h1>
         <p>My Name is {state}</p>
         <button onClick={handleClick}>Change Name</button>
       </div>
     );
   }
   ```

   pada kode diatas state gunakan sebagai data nama dengan menamai variabel tersebut dengan "state". Lalu button dibuat fungsi "handleClick" untuk menjalankan function "setState" dimana setState akan merubah state menjadi suatu nilai yang lain ketika button diklik.

   - useEffect()

   ```jsx
   import React, { useState, useEffect } from "react";

   export default function App() {
     const [data, setData] = useState([]);

     useEffect(() => {
       tmpData = fetchData("https//somewhere.com");
       setData(tmpData);
     }, []);

     return (
       <div>
         <h1>Hello!</h1>
         <p>This is your Data: {data}</p>
       </div>
     );
   }
   ```

   Pada kode diatas dapat dilihat useEffect digunakan untuk mengambil data dari suatu API. Side Effect tersebut akan dijalankan pertama kali saat komponen dirender dan akan mem-fetching data yang nantinya disimpan ke dalam state bernama "data".
