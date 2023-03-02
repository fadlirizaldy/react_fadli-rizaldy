# (11) Introduction Data Structures (javascript)

## Resume

1.  Data merupakan sekumpulan informasi yang dapat berupa angka, huruf karakter, dan lain lain. Teknik dalam mengatur data disebut struktur data. Struktur data merupakan suatu teknik dalam mengatur data di dalam komputer sehingga dapat digunakan dengan efisien.

2.  Struktur data yang biasa digunakan pada Javascript ada dua, yaitu array dan set. Array adalah sekumpulan data yang disimpan di lokasi memori yang berdekatan. Sedangkan Set layaknya array dimana set dapat menyimpan data namun tidak boleh ada data yang duplikat.

3.  Method pada Array dan Set:

    a. Inisiasi Array dan Set

    Untuk mendeklarasikan sebuah array kita memerlukan tanda `[]`, sedangkan Set kita hanya perlu menulis keyword `new Set()`. Sebagai Contoh :

    ```js
    const arr = [1, 2, 3, 4, 3]; // array
    let letters = new Set(["a", "b", "c"]); //Set
    ```

    b. Membaca Data pada Array dan Set

    Untuk read data pada Arry diperlukan index untuk membaca suatu data pada index tertentu. Array memiliki index yang dimulai dari angka 0. Contoh

    ```js
    const arr = [23, 36, 51, 16];
    console.log(arr[0]); // 23
    console.log(arr[2]); // 51
    ```

    Sedangkan pada Set kita dapat menggunakan method has atau melooping untuk mengetahui value pada elemen Set. Contoh :

    ```js
    const setCollection = new Set(["1", 2, "hello"]);
    console.log(setCollection.has("1")); // true

    for (const item of setCollection) {
      console.log(item);
    } // {"1", 2,"hello"}
    ```

    c. Menambah Data pada Array dan Set

    Pada Array, terdapat beberapa method untuk menambahnya yaitu yang paling biasa dipakai adalah method **push** dan **splice**. Contoh:

    ```js
    const arr = [23, 36, 51, 16];
    arr.push(70);

    console.log(arr); // 23, 36, 51, 16, 70

    arr.splice(1, 0, 84);
    console.log(arr); // 23, 84, 36, 51, 16, 70
    ```

    Sedangkan pada Set, kita dapat menggunakan method **add**. Contoh :

    ```js
    const setCollection = new Set(["1", 2, "hello"]);
    setCollection.add("walter");
    console.log(setCollection); //"1", 2,"hello", "walter"
    ```

    d. Menghapus data pada Array dan Set

    Pada array, data dapat dihapus dengan dua method yaitu **pop()** dan **shift()**. Method pop akan menghapus elemen paling terakhir sedangkan shift sebaliknya. Contoh:

    ```js
    const arr = [23, 36, 51, 16];
    arr.pop();
    console.log(arr); // [23, 36, 51]

    arr.shift();
    console.log(arr); // [36, 51]
    ```

    Sedangkan pada Set kita dapat menggunakan method **delete()**. Contoh:

    ```js
    const setCollection = new Set(["1", 2, "hello"]);

    console.log(setCollection.delete(1)); //false karena tidak ada number 1, adanya string 1
    console.log(setCollection.delete("hello")); //true
    console.log(setCollection); // {'1', 2}
    ```
