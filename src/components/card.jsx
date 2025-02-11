import React from "react";

const Card = (props) => {
  return (
    // The outer wrapper uses "group" so we can trigger child hover effects.
    <div className="group relative max-w-xs h-[400px] mx-auto mt-20 rounded-4xl overflow-hidden shadow-lg bg-white">
      {/* 
        This absolutely positioned element is our gradient overlay.
        It is scaled to 0 by default and scales up (from its bottom-left origin)
        when the group is hovered.
      */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-emerald-600 
                   transform scale-0 group-hover:scale-100 transition-transform duration-700 origin-bottom-left rounded-4xl"
      ></div>

      {/*
        The content container has a white background by default.
        On hover, its background transitions to transparent so that the
        underlying gradient overlay becomes visible.
      */}
      <div className="relative bg-white group-hover:bg-transparent transition-colors duration-700">
        <div className="relative">
          <img
            src={props.image_url}
            alt=""
            // The image will smoothly change to full grayscale on hover.
            className="w-full p-2 rounded-4xl object-cover object-center transition duration-700 grayscale-25 group-hover:grayscale-0"
          />
          <span
            className="absolute top-5 right-6 bg-white w-fit px-3 py-1 capitalize 
                       rounded-full text-sm font-bold text-gray-800"
          >
            {props.category}
          </span>
        </div>
        <div className="mt-2 px-2 pt-2 relative">
          <h2 className="capitalize text-xl font-bold tracking-wider text-gray-800 w-[95%] mx-auto group-hover:text-gray-200  duration-700">
            {props.post_title}
          </h2>
          <p className="mt-2 text-gray-500 text-sm font-semibold line-clamp-3 w-[95%] mx-auto text-justify group-hover:text-gray-300  duration-700">
            {props.post_description}
          </p>
          <a
            href={props.post_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 bg-gradient-to-r from-cyan-500 to-emerald-600 text-white px-3 py-1 
                       rounded-3xl w-[95%] flex items-center justify-center cursor-pointer 
                       hover:from-emerald-700 hover:to-cyan-500 text-sm font-semibold -translate-x-1/2 
                       absolute left-1/2 transition-colors duration-700 shadow-2xl group-hover:border"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
