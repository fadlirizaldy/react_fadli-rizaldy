# (25) Authentication in React

## Resume

1. Pengembangan aplikasi diperlukan suatu sistem yang memberikan suatu akses/hak kepada user yang diperbolehkan.Sistem tersebut biasa dinamai autentikasi. Autentikasi adalah proses yang dilakukan untuk memvalidasi identitas seorang user. Biasanya proses autentikasi tersebut akan menggunakan sejumlah data penting seperti nama dan password. Sebagai contoh alur autentikasi yaitu pada tugas telah dibuat, telah dibuat autentikasi sederhana berupa private routing yang mana ketika ingin mengakses halaman product maka diperlukan sebuah autentikasi berupa login. Jika user belum melakukan login maka akan tampil halaman login. Setelah login berhasil maka akan dikembalikan ke halaman product.

2. Autentikasi memiliki beberapa manfaat yaitu

   - Dapat meningkatkan keamanan akses dari akun yang dimiliki user
   - Meningkatkan proteksi data yang ada di dalam server
   - Meminimalisir terjadinya upaya pembobolan akun dari pihak yang tidak bertanggung jawab

3. Contoh kode login sederhana untuk mengecek apakah seorang client sudah mengautentikasikan dirinya untuk mengakses page tertentu pada halaman website.

```jsx
// menginisiasi state untuk menyimpan data
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [errorMessage, setErrorMessage] = useState("");

const handleLogin = (event) => {
  event.preventDefault();
  // membuat dummy user. User ini dapat diganti dengan data user yang ada pada database
  const dummyUser = { username: "admin", password: "password123" };

  // mengambil data user pada localstorage
  const user = JSON.parse(localStorage.getItem("user"));

  //pengecekan apabila username dan password yang dimasukkan sesuai dengan data pada local
  if (user && user.username === username && user.password === password) {
    localStorage.setItem("isLoggedIn", true);
    window.location.reload();
  }
  // mengecek apabila data yang dimasukkan sesuai dengan data dummy
  else if (username === dummyUser.username && password === dummyUser.password) {
    localStorage.setItem("user", JSON.stringify(dummyUser));
    localStorage.setItem("isLoggedIn", true);
    window.location.reload();
  }
  // pengecekan jika semua tidak memenuhi maka akan menampilkan pesan error
  else {
    setErrorMessage("Invalid username or password");
  }
};
```
