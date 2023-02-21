# (8) CSS

## Resume

1.  CSS atau Cascading Style Sheets merupakan bahasa style sheet yang berguna untuk menentukan tata letak halaman website. CSS biasanya dihubungkan dengan bahasa Markup yaitu HTML untuk membuat tampilan HTML yang lebih menarik dan tidak monoton. CSS dapat diterapkan dengan inline CSS, internal CSS, dan eksternal CSS. Internal CSS dapat diterapkan dengan hanya menambah tag `<style></style>` di dalam tag head pada folder HTML tersebut.

2.  CSS secara umum memiliki struktur yang terdiri dari selector dan declaration block. Selector mengarah ke tag HTML atau attribute tag HTML seperti class dan id. Id hanya boleh dipakai satu tag dan bersifat unique, sedangkan class dapat dipakai untuk tag HTML yang ingin diseragamkan stylingnya. Declaration block merupakan value dari properti CSS yang akan diterapkan seperti font-size untuk ukuran font, color untuk memberikan warna tulisan, dan lain-lain.

3.  Beberapa contoh sintaks CSS

    a. Mengatur font

        - font-size : untuk mengatur ukuran font
        - font-family : untuk mengatur jenis font yang digunakan
        - font-style : untuk mengatur style font e.g. italic, bold, dan oblique
        - font-weight : untuk mengatur weight font (ketebalan)
        - line-height : untuk mengatur jarak antar baris

    b. Mengatur Tampilan

        - display : mengatur tampilan elemen e.g. block, inline-block, flex, dll
        - background-color : mengatur warna dari background elemen.
        - margin : mengatur margin dari elemen tersebut
        - padding : mengatur padding dari elemen
        - text-align : mengatur posisi text
        - align-items : mengatur posisi content

Contoh penggunaan CSS :

```CSS
p {
    font-family : sans-serif;
    color : lightblue;
    font-size : 24px;
    text-align : center;
}
```

CSS tersebut akan membuat semua elemen yang memiliki tag `<p></p>` akan memiliki style tersebut: font-family berupa sans-serif, memiliki warna biru muda, berukuran 24px, dan tulisan terdapat ditengah.
