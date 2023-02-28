# (10) Javascript Refreshment

## Resume

1. Javascript merupakan sebuah bahasa pemrograman tingkat tinggi yang cukup populer dalam pengembangan website. Javascript merupakan bahasa yang bersifat scripting, untyped, dan interpreted. Javascript dapat membuat tampilan koneten website lebih dinamis yang mana konten dapat berubah tanpa memuat ulang website.

2. Javascript memiliki fungsi untuk membuat website yang lebih menarik, membuat aplikasi mobile, mengembangkan game, dan membuat aplikasi web server. Javascript pada umumnya dihubungkan dengan HTML menggunakan tag `<script src="file.js"></script>` di paling bawah halaman body. Hal tersebut dilakukan agar tampilan HTML ditampilkan terlebih dahulu setelah itu file javascript dapat digunakan.

3. Beberapa materi Javascript:

   a. Variabel

   Deklarasi variabel pada javascript memerlukan statement var, let, atau const. Perbedaan dari ketiga statement tersebut adalah :

   - var : digunakan untuk deklarasi variabel tanpa perlu diassign sebuah nilai.
   - let : digunakan untuk deklarasi variabel tanpa perlu diassign sebuah nilai.
   - const : digunakan untuk deklarasi variabel yang perlu diassign sebuah nilai dan tidak bisa diisi nilai baru (konstan).

   contoh penggunaan :

   ```javascript
   let greet = "Hello World!";
   console.log(greet); // Hello World

   // Change value of greet
   greet = "Buenos Dias!";
   console.log(greet); // Buenos Dias!
   ```

   b. Objects

   Objects merupakan tipe data yang dapat menyimpan beberapa data sekaligus. Contoh dari object yaitu object, array, function, date, set, map, weak set, dan weak map. Contoh penggunaan array:

   ```javascript
   const arr = [1, 2, 3, 4];
   console.log(arr); // 1, 2, 3, 4
   ```

   Destructuring dapat memungkinkan untuk menyalin object. contoh:

   ```javascript
   const arr = [1, 2, 3, 4];
   let [satu, dua] = arr;
   console.log(satu); // 1
   ```

   c. Function

   Function merupakan suatu kumpulan kode yang dibungkus oleh suatu variabel. Function dapat dipanggil setelah dideklarasikan. Contoh penggunaan :

   ```javascript
   function greetings() {
     return "Hello Guys!";
   }

   console.log(greetings); // Hello Guys!
   ```

   d. Method

   Method merupakan suatu fungsi dari suatu object. Beberapa method dari array yaitu concat, map, foreach, slice, filter, dan reduce. Contoh penggunaan:

   ```javascript
   const arr = [2, 4, 6, 8];
   const map_arr = arr.map((x) => x * 2);
   console.log(map_arr); // 4, 8, 12, 16
   ```

   e. Async Await

   Pada dasarnya bahasa pemrograman memiliki control flow yaitu dieksekusi dari atas ke bawah. Pada javascript, kode dapat dieksekusi tanpa mengikuti urutan. Contoh penggunaan salah satu sintaks yaitu setTimeout yang digunakan untuk menunda eksekusi:

   ```javascript
   console.log("Mulai");
   setTimeout(() => console.log("Proses ..."), 1000);
   console.log("Berhenti");

   // "Mulai"
   // "Berhenti"
   // "Proses"
   ```

   Async await pada umumnya digunakan pada objek Promise. contoh :

   ```javascript
   const greeting = async () => {
     let promise = new Promise((resolve, reject) => {
       setTimeout(() => resolve("Hello!"), 1000);
     });

     let result = await promise; // menunggu sampai promise selesai lalu lanjutkan kode.

     alert(result); // "Hello!"
   };

   greeting();
   ```

   Async await ini biasanya digunakan pada fetching API dimana data API perlu didapatkan dahulu lalu kode boleh berjalan.

   f. DOM

   DOM adalah API untuk HTML yang merepresentasikan halaman web pada suatu dokumen menjadi suatu **object**. Sintaks pada DOM yang biasa digunakan :

   | Event                    | Kegunaan       |
   | ------------------------ | -------------- |
   | getElementById()         | Element        |
   | getElementsByTagName()   | HTMLCollection |
   | getElementsByClassName() | HTMLCollection |
   | querySelector()          | Element        |
   | querySelectorAll()       | NodeList       |

   contoh penggunaan :

   ```HTML
   <p id="nama">Fadli</p>
   ```

   ```javascript
   const nama = document.getElementById("nama"); // <p id="nama">Fadli</p>

   //merubah warna text
   nama.style.color = "lightblue";
   ```
