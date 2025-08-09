import BestSellerProduct from "./bestSellerProduct/BestSellerProduct";
import Card from "./card/Card";
import DietFruit from "./dietFruit/DietFruit";
import Footer from "./footer/Footer";
import FreshFruit from "./freshFruit/FreshFruit";
import Header from "./header/Header";
import OrganicFruit from "./organic-fruit/OrganicFruit";
import Quality from "./quality/Quality";
import Slider from "./slider/Slider";

function Index() {
  return <>
    <Header />
    <Slider />
    <Card />
    <OrganicFruit />
    <DietFruit />
    <FreshFruit />
    <BestSellerProduct />
    <Quality />
    <Footer />


    {/* <div className="container-fluid vesitable py-5">
      <div className="container py-5">
        <h1 className="mb-0">Fresh Organic Vegetables</h1>
        <div className="owl-carousel vegetable-carousel justify-content-center">
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt="" />
            </div>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Vegetable</div>
            <div className="p-4 rounded-bottom">
              <h4>Parsely</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
              </div>
            </div>
          </div>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img src="img/vegetable-item-1.jpg" className="img-fluid w-100 rounded-top" alt="" />
            </div>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Vegetable</div>
            <div className="p-4 rounded-bottom">
              <h4>Parsely</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
              </div>
            </div>
          </div>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img src="img/vegetable-item-3.png" className="img-fluid w-100 rounded-top bg-light" alt="" />
            </div>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Vegetable</div>
            <div className="p-4 rounded-bottom">
              <h4>Banana</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
              </div>
            </div>
          </div>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img src="img/vegetable-item-4.jpg" className="img-fluid w-100 rounded-top" alt="" />
            </div>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Vegetable</div>
            <div className="p-4 rounded-bottom">
              <h4>Bell Papper</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
              </div>
            </div>
          </div>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img src="img/vegetable-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
            </div>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Vegetable</div>
            <div className="p-4 rounded-bottom">
              <h4>Potatoes</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
              </div>
            </div>
          </div>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt="" />
            </div>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Vegetable</div>
            <div className="p-4 rounded-bottom">
              <h4>Parsely</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
              </div>
            </div>
          </div>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img src="img/vegetable-item-5.jpg" className="img-fluid w-100 rounded-top" alt="" />
            </div>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Vegetable</div>
            <div className="p-4 rounded-bottom">
              <h4>Potatoes</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
              </div>
            </div>
          </div>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img src="img/vegetable-item-6.jpg" className="img-fluid w-100 rounded-top" alt="" />
            </div>
            <div className="text-white bg-primary px-3 py-1 rounded position-absolute" style={{ top: "10px", right: "10px" }}>Vegetable</div>
            <div className="p-4 rounded-bottom">
              <h4>Parsely</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt</p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                <a href="#" className="btn border border-secondary rounded-pill px-3 text-primary"><i className="fa fa-shopping-bag me-2 text-primary"></i> Add to cart</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}


    {/* <div className="container-fluid testimonial py-5">
      <div className="container py-5">
        <div className="testimonial-header text-center">
          <h4 className="text-primary">Our Testimonial</h4>
          <h1 className="display-5 mb-5 text-dark">Our Client Saying!</h1>
        </div>
        <div className="owl-carousel testimonial-carousel">
          <div className="testimonial-item img-border-radius bg-light rounded p-4">
            <div className="position-relative">
              <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: "30px", right: "0" }}></i>
              <div className="mb-4 pb-4 border-bottom border-secondary">
                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className="d-flex align-items-center flex-nowrap">
                <div className="bg-secondary rounded">
                  <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{ width: "100px", height: "100px" }} alt="" />
                </div>
                <div className="ms-4 d-block">
                  <h4 className="text-dark">Client Name</h4>
                  <p className="m-0 pb-3">Profession</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item img-border-radius bg-light rounded p-4">
            <div className="position-relative">
              <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: "30px", right: "0" }}></i>
              <div className="mb-4 pb-4 border-bottom border-secondary">
                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className="d-flex align-items-center flex-nowrap">
                <div className="bg-secondary rounded">
                  <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{ width: "100px", height: "100px" }} alt="" />
                </div>
                <div className="ms-4 d-block">
                  <h4 className="text-dark">Client Name</h4>
                  <p className="m-0 pb-3">Profession</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonial-item img-border-radius bg-light rounded p-4">
            <div className="position-relative">
              <i className="fa fa-quote-right fa-2x text-secondary position-absolute" style={{ bottom: "30px", right: "0" }}></i>
              <div className="mb-4 pb-4 border-bottom border-secondary">
                <p className="mb-0">Lorem Ipsum is simply dummy text of the printing Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              </div>
              <div className="d-flex align-items-center flex-nowrap">
                <div className="bg-secondary rounded">
                  <img src="img/testimonial-1.jpg" className="img-fluid rounded" style={{ width: "100px", height: "100px" }} alt="" />
                </div>
                <div className="ms-4 d-block">
                  <h4 className="text-dark">Client Name</h4>
                  <p className="m-0 pb-3">Profession</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    <a href="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top"><i className="fa fa-arrow-up"></i></a>
  </>
}


export default Index;