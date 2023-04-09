# (24) Restfull API with Javascript

## Resume

1.  Berdasarkan hak aksesnya, terdapat empat jenis API, yaitu public API, private API, partner API, dan composite API. Developer dapat mencoba untuk membuat sebuah public API dengan dummy data dengan mock api. Mock api memungkinkan pengembangan software lebih cepat karena front end dapat membuat kode untuk fetching data dan testing tanpa perlu menunggu back end. Contoh aplikasi mock api seperti Mockoon, Mocki, Stoplight, MockAPI, dan lain-lain.

2.  Pada section ini digunakan website bernama Mockapi.io dimana tempat tersebut developer dapat membuat dummy data yang dapat diakses menggunakan sebuah url layaknya restful api sungguhan. Cara kerja sebuah restful api seperti berikut.

        1. Klien mengirimkan permintaan ke server.
        2. Server mengautentikasi klien dan mengonfirmasi bahwa klien memiliki hak untuk membuat permintaan.
        3. Server menerima permintaan dan memproses secara internal.
        4. Server mengembalikan respons kepada klien berupa data yang direquest.

sisi server pada poin-poin diatas akan ditangani oleh Mockapi.io sehingga developer hanya perlu menampilkannya. Hal-hal yang perlu dilakukan untuk menggunakan Mockapi:

    - pertama, kunjungi web Mockapi.io
    - Lalu login atau register.
    - Selanjutnya, kita dapat membuat new project. kita dapat menentukan data apa yang ingin disimpan pada rest api tersebut.
    - Mockapi.io akan mengenerate url dan method secara otomatis untuk mengakses rest api yang telah dibuat.
    - Bahkan kita dapat meminta Mockapi.io untuk membuatkan data dummy random hingga 100 data dummy.

3. Contoh kode untuk mengakses data ke MockAPI.io

Buat file js untuk menyimpan function fetching data

```js
export async function getProducts() {
  let url = `{url yang diberikan Mockapi.io}`;
  try {
    let res = await fetch(url);
    return await res.json();
  } catch {
    console.log(err);
  }
}
```

Lalu pada file komponen react kita dapat memanggil fungsi tersebut

```jsx
import { getProducts } from "./api.js";
import { useState, useEffect } from "react";

const ListData = () => {
  const [datas, setDatas] = useState([]);

  // fetching data dilakukan ketika komponen pertama kali dirender
  useEffect(() => {
    setDatas(
      getProducts()
        .then((res) => {
          return res.data;
        })
        .catch((err) => console.log(err.message))
    );
  }, []);

  return (
    <div>
      {datas.map((data) => {
        <div>
          <h2>{data.name}</h2>
          <h3>{data.price}</h3>
        </div>;
      })}
    </div>
  );
};
```
