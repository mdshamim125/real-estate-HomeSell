import React from "react";

const Banner = () => {
  return (
    <div>
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
            <div className="text-white text-center">
              <h2 className="text-4xl font-bold">Title 1</h2>
              <p className="text-lg">Description 1</p>
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
