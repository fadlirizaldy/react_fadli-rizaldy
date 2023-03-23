const ContainerAbout = () => {
  return (
    <div className="vh-100 p-3 containerAbout">
      <div class="text-center">
        <img src="src/assets/taking-pict2.jpg" className="rounded robotImage w-25" alt="robotfoodies" />
      </div>
      <div className="container aboutText">
        <div className="row mt-4">
          <h1>About Tradify</h1>
        </div>
        <div className="row mt-4">
          <div className="col lh-lg">
            Tradify adalah project yang dikembangkan oleh para mentee dari Bangkit Academy sebagai bahan capstone project. Tradify dikembangkan oleh 6 mentee berbakat yang memiliki ide untuk membantu
            masyarakat mengenali makanan tradisional daerah.
          </div>
          <div className="col lh-lg">
            Tradify dapat bekerja dengan memotret makanan yang ingin diketahui datanya. Data dari makanan tradisional tersebut akan langsung terdeteksi dengan mudah ketika diambil gambarnya. Tradify
            bekerja dengan algoritma transfer learning. Tradify sudah tersedia untuk Android.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContainerAbout;
