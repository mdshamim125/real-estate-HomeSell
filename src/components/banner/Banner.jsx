import "animate.css";

const Banner = () => {
  return (
    <div data-aos="fade-up">
      <div className="carousel  h-[550px]">
        <div
          id="slide1"
          className="carousel-item relative min-h-[550px] w-full"
        >
          <img
            className="w-full"
            src="https://i.ibb.co/3RM2M8w/pexels-pixabay-277667.jpg"
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="text-white text-center ">
              <h2 className="text-4xl font-bold animate__animated animate__fadeInDown animate__delay-1s">
                Best <span className="text-blue-900">Home Services</span> for
                you
              </h2>
              <p className="text-lg animate__animated animate__fadeInUp animate__delay-1s">
                We are ready for providing our best to you. Choose one which you
                or your family want
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide2"
          className="carousel-item relative min-h-[550px] w-full"
        >
          <img
            src="https://i.ibb.co/fvcKy3x/pexels-binyamin-mellish-186077.jpg"
            className="w-full"
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="text-white text-center">
              <h2 className="text-4xl font-bold animate__animated animate__fadeInUp animate__delay-5s">
                Best <span className="text-green-600">Home Services</span> for
                you
              </h2>
              <p className="text-lg animate__animated animate__fadeInDown animate__delay-5s">
                We are ready for providing our best to you. Choose one which you
                or your family want
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          id="slide3"
          className="carousel-item relative min-h-[550px] w-full"
        >
          <img
            src="https://i.ibb.co/qmcYZLt/pexels-pixabay-280229.jpg"
            className="w-full"
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div className="text- text-center">
              <h2 className="text-4xl font-bold animate__animated animate__fadeInUp animate__delay-8s">
                Best <span className="text-blue-900">Home Services</span> for
                you
              </h2>
              <p className="text-lg animate__animated animate__fadeInDown animate__delay-8s">
                We are ready for providing our best to you. Choose one which you
                or your family want
              </p>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
