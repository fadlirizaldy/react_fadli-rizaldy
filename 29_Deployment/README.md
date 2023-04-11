# (29) Deployment

## Resume

1. Untuk mendeploy project yang telah dibuat, kita memerlukan pembungkusan code kita menggunakan npm run build. Build ini dilakukan untuk membuat file js dan css kita menjadi satu file. Karena saat kita membuat kode, kita memisahkan file satu dengan file lainnya terpisah sehingga deploy dalam keadaan tersebut akan sangat menurunkan performa web. Keadaan penurunan performa tersebut akibat request http tiap kali mengakses file yang berbeda, oleh karena itu npm run build berguna untuk membungkus semua file yang telah dibuat menjadi satu file js dan satu file css. Build dapat dilakukan dengan command berikut

   npm

   ```cli
   npm run build
   ```

   yarn

   ```cli
   yarn build
   ```

2. Deployment adalah kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah dibuat. Diharapkan deployment akan membuat aplikasi yang telah dibuat menjadi bermanfaat bagi banyak orang. Disana sudah banyak sekali platform bagi front end developer untuk mendeploy aplikasi mereka. Beberapa contoh platform yang dapat digunakan seperti : Surge, Netlify, Vercel, dan lain-lain. Beberapa platform juga sudah dapat melakukan Continous Deployment. Continous Deployment atau CD merupakan pengiriman software ke lingkungan produksi secara otomatis setelah melalui tahap integrasi, pengujian, dan verifikasi.

3. Pada section ini, mentee menggunakan Vercel sebagai platform deployment tugas. Cara menggunakan Vercel yaitu:

   - Pertama buat akun Vercel
   - Lalu hubungkan akun Vercel dengan akun Github
   - Setelah terhubung dengan Github, kita dapat melihat beberapa repository yang dapat diakses.
   - Siapkan project yang ingin dideploy lalu push ke sebuah repository.
   - Setelah itu, melalui Vercel kita dapat langsung memilik repository tersebut untuk deployment.
   - Saat pensettingan deployment, kita dapat memiliki template apa yang kita gunakan seperti create-react-app, vite, vue js, dan masih banyak lagi.
   - Lalu klik deploy dan tunggu hingga selesai, selamat project telah dideploy dan mendapatkan url yang dapat diakses orang banyak

## Mentee telah berhasil deployment dengan link berikut

***https://react-alterra-assignment-zwlf.vercel.app/***
