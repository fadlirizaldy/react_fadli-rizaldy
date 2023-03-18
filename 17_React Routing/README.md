# (17) React Router

## Resume

1. React Router merupakan modul dalam react yang berfungsi untuk melakukan proses navigasi pada web SPA (Single Page Application). Selain SPA, terdapat istilah MPA. MPA merupakan Multi Page Application yang merupakan jenis aplikasi website yang memerlukan load seluruh halaman ketika terdapat new request. Untuk menginstall React Router dapat menggunakan command berikut :

   ```cli
   yarn add react-router-dom
   ```

2. Terdapat fitur untuk membuat url path menjadi dinamis dengan menggunakan Parameter URL. Parameter URL adalah suatu parameter yang nilainya ditetapkan secara dinamis di URL halaman. Contoh

   ```jsx
   <Route exact path="book/:id" element={BookDetails}>
   ```

Component tersebut akan merender Component BookDetails dengan path yang dinamis tergantung pada id tertentu.

3. Contoh penggunaan React Router untuk menentukan path tiap halaman.

   ```jsx
   function App() {
     return (
       <BrowserRouter>
         <Routes>
           <Route path="/" exact Component={Home} />
           <Route path="/createProduct" exact Component={CreateProduct} />
           <Route path="*" Component={NotFound} />
         </Routes>
       </BrowserRouter>
     );
   }
   ```

Component app ini akan merender komponen tertentu tergantung pada path yang dituju. Untuk halaman default ditandai dengan slash ("/"). Lalu path yang lain akan ditempatkan dibawahnya seperti "/createProduct" dan lain-lain. Terakhir di paling bawah terdapat path yang akan menampilkan halaman not found ketika tidak menemukan path yang cocok
