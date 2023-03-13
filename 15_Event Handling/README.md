# (15) Event Handling

## Resume

1. State merupakan data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain. State digunakan untuk menghandle data di dalam component yang terus berubah. Terkadang state sangat berpengaruh dalam perubahan dalam component atau rendering komponen.

2. State pada dasarnya sangat mirip dengan props, perbedaannya adalah props bersifat read only dan tidak bisa dimodifikasi, sedangkan state dapat bersifat asynchronus dan dapat dimodifikasi. Komponen dapat bersifat stateful dan stateless component. Stateful component adalah komponen yang memiliki state dan biasanya dibuat dengan class component. Stateless component adalah komponen yang tidak memiliki state atau hanya memiliki prop dan biasanya dibuat dengan functional component.

   contoh penggunaan state pada komponen:

   ```jsx
   import React, { useState } from "react";

   export default function App() {
     const [name, setName] = useState("Fadli");
     return (
       <div>
         <h1>Hello Alterra!</h1>
         <p>My Name is {name}</p>
       </div>
     );
   }
   ```

   dengan variabel "name" menampung data, setName sebuah function untuk mengubah state, dan useState memiliki nilai default "Fadli".

3. Handling Event adalah suatu metode untuk menangani sebuah event yang diberikan user kepada komponen. Contoh list Event :

   - Clipboard Events (Promise terpenuhi)
   - Form Events (onChange, onSubmit)
   - Mouse Events (onClick, onDoubleClick, onMouseOver)
   - Generic Events (onError, onLoad)

   contoh penggunaan event handler dengan state pada sebuah komponen:

   ```jsx
   import React, { useState } from "react";

   export default function App() {
     const [name, setName] = useState("Fadli");
     const handleChange = () => {
       setState("Rizaldy");
     };
     return (
       <div>
         <h1>Hello Alterra</h1>
         <p>My Name is {name}</p>
         <button onClick={handleChange}>Change Name</button>
       </div>
     );
   }
   ```

   Kode diatas adalah sebuah komponen yang mmemiliki satu state yang dapat berganti dengan mengklik button. Button tersebut memiliki event handle onClick yang akan menjalankan function "handleChange".
