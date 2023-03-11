# (14) React Fundamental

## Resume

<br>

1. JSX atau Javascript XML merupakan ekstensi sintaks JavaScript yang digunakan untuk memodifikasi Document Object Model (DOM) dengan kode bergaya HTML. JSX digunakan untuk membuat elemen-elemen pada React. Pada umumnya, developer menggunakannya untuk menyematkan (embed) kode HTML pada objek JavaScript sehingga JSX pun membantu mempersingkat struktur kode yang kompleks.

2. JSX dapat dikatakan sebagai expression yang mana setelah dikompilasi, ekspresi JSX akan menjadi fungsi Javascript biasa dan menjadi objek Javascript. JSX sangat mendukung dalam pembuatan komponen yang reusable.

3. Contoh penggunaan JSX dalam pembuatan Komponen:

   - Buat komponen, contoh : komponen card

   ```jsx
   const Card = () => {
     return (
       <div className="container">
         <h1>Ini Sebuah Card </h1>
       </div>
     );
   };

   export default Card;
   ```

   - Lalu import komponen card tersebut ke dalam komponen lain untuk ditampilkan: Contoh di App.jsx

   ```jsx
   import Card from "./components/Card";

   function App() {
     return (
       <div className="container">
         <Card />
       </div>
     );
   }
   ```

   Dari contoh tersebut akan menampilkan sebuah card pada komponen App. Dapat dilihat JSX sangat membantu dalam pembuatan komponen dengan menggabungkan style Language Markup dengan style Javascript sehingga memudahkan developer.
