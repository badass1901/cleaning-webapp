import React from "react";
import { images } from "../assets/data/images";
import "../styles/Carosel.scss";


const Carosel = () => {
  return (
    <div className="caroselMaster container">
     
      <h1 className="mt-5">Our Professional Work</h1>
    <div>

      {/* <!-- Carousel wrapper --> */}
      <div
        id="carouselMultiItemExample2"
        className="carousel slide carousel-dark text-center"
        data-mdb-ride="carousel"
      >
        {/* <!-- Inner --> */}
        <div className="carousel-inner py-4" id="caro">
          {/* <!-- Single item --> */}
          <div className="carousel-item active">
            <div className="container">
              <div className="row" id="row1">
                <div className="col-lg-4">
                  <div className="card">
                    <img
                      src={images.img1}
                      className="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                 
                  </div>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                    <img
                      src={images.img4}
                      className="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                   
                  </div>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                    <img
                      src={images.img5}
                      className="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                 
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item">
            <div className="container">
              <div className="row" id="row1">
                <div className="col-lg-4 col-md-12">
                  <div className="card">
                    <img
                      src={images.img2}
                      className="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                     
                    />
                  </div>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                    <img
                      src={images.img3}
                      className="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                   
                  </div>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                    <img
                      src={images.img1}
                      className="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                   
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Single item --> */}
          <div className="carousel-item">
            <div className="container">
              <div className="row" id="row1">
                <div className="col-lg-4 col-md-12">
                  <div className="card">
                    <img
                      src={images.img3}
                      className="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                     
                    />
                  </div>
                </div>
                <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div className="card">
                    <img
                      src={images.img5}
                      className="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
                   
                  </div>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0 d-none d-lg-block">
                  <div className="card">
                    <img
                      src={images.img6}
                      className="card-img-top"
                      alt="..."
                      id="multiImagesSlider"
                    />
              
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Inner -->
    <!-- Controls --> */}
        <div className="d-flex justify-content-center mb-4" id="contRol">
          <button
            className="carousel-control-prev position-relative"
            id="button1"
            type="button"
            data-mdb-target="#carouselMultiItemExample2"
            data-mdb-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next position-relative"
            id="button2"
            type="button"
            data-mdb-target="#carouselMultiItemExample2"
            data-mdb-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
     
    </div>
  );
};

export default Carosel;
