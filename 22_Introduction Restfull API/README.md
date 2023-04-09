# (22) Introduction Restfull API

## Resume

1. API atau Application Programming Interface merupakan sebuah standar dan protokol yang mengintegrasikan user dengan aplikasi. API memungkinkan produk atau layanan berkomunikasi dengan produk dan layanan lain tanpa harus tahu bagaimana penerapannya. Fungsi dari API sendiri yaitu sebagai mediator atau komunikator antara pengguna dan sistem. API terbagi menjadi beberapa jenis yaitu :

   - Private API : sebuah interface pemrograman yang tidak terbuka untuk umum.
   - Public API : disebut open API adalah sebuah programming interface yang dapat diakses secara publik.
   - Partner API : hanya dapat diakses oleh pihak-pihak tertentu yang telah ditunjuk sebagai partner.
   - Composite API : jenis interface yang terdiri dari gabungan berbagai jenis data dari berbagai server dan hosting dalam satu tempat.

2. Representational State Transfer atau yang biasa disingkat REST merupakan arsitektur perangkat lunak yang memberlakukan ketentuan mengenai cara API bekerja. API yang memiliki arsitektur REST disebut sebagai REST API, Sedangkan Layanan web yang menerapkan arsitektur REST disebut sebagai layanan web RESTful.

Metode dasar pada RESTful API yang sering digunakan ada berbagai macam yaitu:

    - GET : untuk mengakses sumber daya yang berada di URL.
    - POST : untuk mengirim data ke server.
    - PUT : untuk memperbarui data yang ada di server.
    - DELETE : untuk menghapus data di server.

3. REST API memiliki status code yang dikeluarkan ketika client mengirimkan sebuah request, berikut code yang dikirimkan sebuah rest api:

   - 1xx : memiliki arti permintaan dari client masih diproses karena suatu hal.
   - 2xx : memiliki arti permintaan client telah berhasil diterima, dipahami, dan diproses oleh server.
   - 3xx : memiliki arti bahwa redirect yang mana data sudah dipindah.
   - 4xx : memiliki arti adanya error dari sisi client.
   - 5xx : memiliki arti adanya error dari server.
