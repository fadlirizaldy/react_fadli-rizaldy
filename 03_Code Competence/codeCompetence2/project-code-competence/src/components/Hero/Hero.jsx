import { useState } from "react";

const Hero = () => {
  const [dataHero, setDataHero] = useState({
    name: "",
    email: "",
    desc: "",
  });

  const handleSubmit = (e) => {
    alert(`Thank you ${dataHero.name}. We will contact you to ${dataHero.email} as soon as possible.`);
  };

  return (
    <div className="container-bg">
      <div className="container py-5 hero-section w-100">
        <div className="row">
          <div className="col hero-left-side d-flex flex-column justify-content-center">
            <h1>
              Your Food AI <br />
              Assistant
            </h1>
            <p className="w-75">Introduce people about local cuisine with prediction of AI. Make local cuisine great again</p>
            <div className="button-custom">
              <button type="button" className="btn btn-CTA" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Work with Us
              </button>
            </div>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Contact Us
                    </h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <form role="form" id="form1" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label for="exampleInputName" className="form-label">
                          Full Name
                        </label>
                        <input type="text" className="form-control" id="exampleInputName" onChange={(event) => setDataHero((prevData) => ({ ...prevData, name: event.target.value }))} required />
                      </div>
                      <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">
                          Email address
                        </label>
                        <input type="email" className="form-control" id="exampleInputEmail" onChange={(event) => setDataHero((prevData) => ({ ...prevData, email: event.target.value }))} />
                        <div id="emailHelp" className="form-text">
                          We'll never share your email with anyone else.
                        </div>
                      </div>
                      <div className="mb-3">
                        <label for="exampleInputTextArea" className="form-label">
                          What can we help you with?
                        </label>
                        <textarea
                          type="text"
                          className="form-control"
                          id="exampleInputTextArea"
                          onChange={(event) => setDataHero((prevData) => ({ ...prevData, name: event.target.value }))}
                        ></textarea>
                      </div>
                    </form>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                      </button>
                      <button type="submit" form="form1" className="btn btn-primary button-submit-form" data-toggle="modal">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col hero-right-side">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="src/assets/taking-pict.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="src/assets/sate.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="src/assets/sambal.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
