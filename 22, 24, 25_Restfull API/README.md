# (22, 24, 25) Restful API

## RESUME

1. API atau Application Programming Interface merupakan sebuah standar dan protokol yang mengintegrasikan user dengan aplikasi. API memungkinkan produk atau layanan berkomunikasi dengan produk dan layanan lain tanpa harus tahu bagaimana penerapannya. Fungsi dari API sendiri yaitu sebagai mediator atau komunikator antara pengguna dan sistem. Penggunaan API sangat menguntungkan karena dapat mengurangi beban kerja server, memercepat pengembangan aplikasi, dan meningkatkan fungsionalitas aplikasi. API terbagi menjadi beberapa jenis yaitu :

   - Private API : sebuah interface pemrograman yang tidak terbuka untuk umum.
   - Public API : disebut open API adalah sebuah programming interface yang dapat diakses secara publik.
   - Partner API : hanya dapat diakses oleh pihak-pihak tertentu yang telah ditunjuk sebagai partner.
   - Composite API : jenis interface yang terdiri dari gabungan berbagai jenis data dari berbagai server dan hosting dalam satu tempat.

2. Representational State Transfer atau yang biasa disingkat REST merupakan arsitektur perangkat lunak yang memberlakukan ketentuan mengenai cara API bekerja. API yang memiliki arsitektur REST disebut sebagai REST API, Sedangkan Layanan web yang menerapkan arsitektur REST disebut sebagai layanan web RESTful. Restful API bekerja dengan cara memanipulasi resource dan representasi. Representasi ini saling dipertukarkan di antara pengguna dan server melalui antarmuka terstandar dan protokol komunikasi tertentu, biasanya HTTP. Representasi yang dikirim oleh server bisa memiliki berbagai format, seperti JSON, XML, Python, dll. Berikut beberapa manfaat ketika menggunakan Restful API :
   - Memiliki skalabilitas yang tinggi karena REST mengoptimalkan interaksi klien-server. Server tidak perlu mempertahankan informasi permintaan klien di masa lalu.
   - Rest API memiliki fleksibilitas yang tinggi karena memisahkan berbagai komponen server sehingga masing-masing bagian dapat berkembang secara mandiri.
   - Memiliki independensi yang artinya aplikasi klien dan server dalam berbagai bahasa pemrograman tanpa memengaruhi desain API.

Cara kerja dari komunikasi dengan RESTful API adalah sebagai berikut:

    1. Klien mengirimkan permintaan ke server.
    2. Server mengautentikasi klien dan mengonfirmasi bahwa klien memiliki hak untuk membuat permintaan.
    3. Server menerima permintaan dan memproses secara internal.
    4. Server mengembalikan respons kepada klien berupa data yang direquest.

Metode dasar pada RESTful API yang sering digunakan ada berbagai macam yaitu:

    - GET : untuk mengakses sumber daya yang berada di URL.
    - POST : untuk mengirim data ke server.
    - PUT : untuk memperbarui data yang ada di server.
    - DELETE : untuk menghapus data di server.

3. Pengembangan aplikasi diperlukan suatu sistem yang memberikan suatu akses/hak kepada user yang diperbolehkan.Sistem tersebut biasa dinamai autentikasi. Autentikasi adalah proses yang dilakukan untuk memvalidasi identitas seorang user. Biasanya proses autentikasi tersebut akan menggunakan sejumlah data penting seperti nama dan password. Sebagai contoh alur autentikasi yaitu pada tugas telah dibuat, telah dibuat autentikasi sederhana berupa private routing yang mana ketika ingin mengakses halaman product maka diperlukan sebuah autentikasi berupa login. Jika user belum melakukan login maka akan tampil halaman login. Setelah login berhasil maka akan dikembalikan ke halaman product.
