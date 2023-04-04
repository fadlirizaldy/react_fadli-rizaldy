# (21) React Testing

## Resume

1. Testing merupakan proses memverifikasi bahwa test assertions yang dibuat adalah benar dan code yang dibuat juga sudah baik berjalan sesuai kebutuhan. Test assertion merupakan ekspresi boolean yang mereturn nilai true jika berjalan sesuai dengan keinginan. Manfaat dari testing dari kode yang kita buat adalah kode akan semakin reliable dan dapat ditracking dengan mudah jika terdapat kesalahan di depannya. Testing memiliki beberapa kategori yaitu :

   - React component trees yang mana kode dites di dalam environment.
   - Menjalankan aplikasi secara lengkap atau biasa disebut end-to-end test.

2. Library yang biasa digunakan untuk developer React adalah React Testing Library (RTL) dan Jest. React Testing Library adalah sebuah library JavaScript yang digunakan untuk melakukan pengujian (testing) pada komponen React. React Testing Library bekerja dengan cara mengeksplorasi tampilan (DOM) dari sebuah komponen React, dan menguji perilaku (behavior) komponen tersebut dari sudut pandang pengguna. Cara penggunaan RTL yaitu

   - Install library RTL pada environment

     ```cli
     npm install --save-dev @testing-library/react @testing-library/user-event
     ```

     atau

     ```cli
     yarn add --save-dev @testing-library/react @testing-library/user-event
     ```

   - contoh penggunaan testing pada sebuah function

     ```js
     function sum(x, y) {
       return x + y;
     }
     ```

     Lalu pada file testing perlu penamaan .testing seperti berikut : "namafile.testing.js"

     ```js
     import sum from "./sum.js";

     describe("sum", () => {
       test("sum up two int", () => {
         expect(sum(2, 4).toBe(6));
       });
     });
     ```

     Lalu jalankan testing

     ```cli
     yarn run test
     ```

3. Contoh pengujian react testing library pada rendering komponen

```jsx
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
  };

  return <button onClick={toggleTheme}>Current theme: {theme}</button>;
}

export default App;
```

Lalu buat file testing bernama App.testing.js

```js
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("Test ganti tema dengan button", () => {
  render(<App />);
  const buttonToggle = screen.getByText(/Current theme/i);

  userEvent.click(buttonToggle);
  expect(buttonToggle).toHaveTextContent(/dark/i);
});
```

Lalu jalankan file testing dengan command

```cli
yarn run test
```

command tersebut akan menjalankan semua file yang memiliki ekstension .testing pada directory.
