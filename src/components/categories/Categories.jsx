import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ category }) => {
  console.log(category);
  return (
    <div>
      <div className="col-span-1 animate__animated animate__fadeInLeft animate__delay-2s">
        <div
          key={category.id}
          className="border p-4 transition hover:scale-105 border-opacity-30 rounded-xl group hover:no-underline focus:no-underline "
        >
          <img src={category.image} className="w-full h-64 object-cover mb-4" />
          <h2 className="text-xl font-bold mb-2">{category.segment_name}</h2>
          <p className="text-gray-600 mb-4">{category.description}</p>
          <div className="text-gray-800 font-bold flex gap-4">
            <p>price:</p>
            <p>{category.price}</p>
          </div>
          <div className="text-gray-600 flex gap-4">
            <p>area:</p>
            <p>{category.area}</p>
          </div>
          <Link to={`/category-details/${category.id}`}>
            <button className="btn btn-accent text-white font-bold w-full my-4">View Property</button>
          </Link>
          {/* <p className="text-gray-600">{category.location}</p> */}
          {/* <ul className="mt-2">
            {category.facilities.map((facility, index) => (
              <li key={index} className="text-gray-600">
                {facility}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Categories;
