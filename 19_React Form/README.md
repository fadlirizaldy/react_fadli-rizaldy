# (19) React Form

## Resume

1. Form merupakan suatu komponen yang akan berguna untuk menghandle inputan dari user. Form merupakan salah satu hal yang sangat penting dalam pengembangan aplikasi website. Contoh bentuk form seperti, halaman login, register, halaman review, mengisi data dan lain-lain. Form ini dapat dibentuk dengan beberapa element seperti :

   - text
   - button
   - checkbox
   - select
   - password
   - file
   - dan masih banyak lagi

2. Pada React JS, form dibagi menjadi dua jenis yaitu controlled form dan uncontrolled form. Controlled form merupakan sebuah element form yang valuenya dikontrol oleh React, sedangkan uncontrolled adalah yang sebaliknya. Controlled component memanfaatkan state hook untuk menghandle perubahan data yang terjadi di tiap input. Controlled input memanfaatkan state dan properti onChange pada element input untuk menghandle data secara real time.

3. Contoh penggunaan react controlled form :

   ```jsx
   import React, { useState } from "react";

   export default function App() {
     const [state, setState] = useState("");

     const handleSubmit = () => {
       alert(`Hi ${state}`);
     };

     const handleChange = (e) => {
       setState(e.target.value);
     };

     return (
       <div>
         <h1>Enter a name</h1>
         <form onSubmit={handleSubmit}>
           <label>
             Name:
             <input type="text" value={state} onChange={handleChange} />
           </label>
           <input type="submit" value="Submit" />
         </form>
       </div>
     );
   }
   ```

Pada code di atas value dari element `<input>` disimpan dalam state dan diupdate menggunakan setState(), handler handleSubmit() dieksekusi ketika form disubmit.

Sedangkan, contoh penggunaan uncontrolled input sebagai berikut :

```jsx
import React from "react";

export default function App() {
  const fileInput = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nama file: ${e.fileInput.current.files[0].name}`);
  };

  return (
    <div>
      <h1>Upload File</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pilih File
          <input type="file" ref={fileInput} />
        </label>
      </form>
    </div>
  );
}
```

Pada uncontrolled form digunakan hook useRef sebagai pengakses value dari elemen tersebut. Ref akan mengambil element inputan lalu dapat diakses value dari inputan tersebut.
