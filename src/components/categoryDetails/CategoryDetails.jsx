import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const CategoryDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const category = data.find((val) => val.id == id);

  const {
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = category;

  return (
    <div className="hero min-h-screen bg-base-200 rounded-3xl">
      <div className="hero-content gap-8 flex-col lg:flex-row">
        <img src={image} className="w-full h-[550px] rounded-lg" />
        <div className="lg:w-1/4 md:w-1/2 w-full">
          <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">
            {segment_name}
          </h1>
          <h2 className="lg:text-3xl md:text-2xl text-xl my-4 font-bold">
            {estate_title}
          </h2>
          <p className="py-6 lg:text-xl">{description}</p>
          <div className="lg:text-xl md:text-xl font-bold">
            <div className="flex gap-8">
              <p>status:</p>
              <p>{status}</p>
            </div>
            <div className="flex gap-8">
              <p>area:</p>
              <p>{area}</p>
            </div>
            <div className="flex gap-8">
              <p>location:</p>
              <p>{location}</p>
            </div>
            <div className="flex  gap-8">
              <p>facilities:</p>
              <p>{facilities}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
