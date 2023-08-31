import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Link } from "react-router-dom";

const SingleProjects = ({ project }) => {
  const { projectImg, projectName, shortDetails, _id } = project;

  return (
    <div data-aos="zoom-in" className="shadow-lg rounded-lg">
      <div>
        <PhotoProvider>
          <PhotoView src={projectImg}>
            <img
              className="w-full h-96 object-cover object-top cursor-pointer rounded-lg"
              src={projectImg}
              alt=""
            />
          </PhotoView>
        </PhotoProvider>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold capitalize">{projectName}</h2>
        <p className="font-medium text-gray-600">{shortDetails}</p>
        <br />
        <Link
          to={`/details/${_id}`}
          className="bg-gradient-to-r from-cyan-500 to-blue-500 lg:px-5 py-3 rounded-full text-white font-medium button"
        >
          Explore More
        </Link>
      </div>
    </div>
  );
};

export default SingleProjects;
