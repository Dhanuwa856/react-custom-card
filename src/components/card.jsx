import React from "react";

const Card = ({
  image_url,
  category,
  post_title,
  post_description,
  post_url,
  primaryColor = "#06b6d4", // Default: Tailwind cyan-500
  secondaryColor = "#10b981", // Default: Tailwind emerald-600
}) => {
  return (
    // Outer wrapper with group for hover effects.
    <div className="group relative max-w-xs h-[400px] mx-auto mt-20 rounded-4xl overflow-hidden shadow-lg bg-white">
      {/* 
        Gradient overlay that scales up from the bottom left on hover.
        The background is defined via inline styles so that it can use
        the custom colors passed in as props.
      */}
      <div
        className="absolute inset-0 transform scale-0 group-hover:scale-100 transition-transform duration-700 origin-bottom-left rounded-4xl"
        style={{
          backgroundImage: `linear-gradient(to top right, ${primaryColor}, ${secondaryColor})`,
        }}
      ></div>

      {/* 
        Content container. Its background becomes transparent on hover to reveal the overlay.
      */}
      <div className="relative bg-white group-hover:bg-transparent transition-colors duration-700">
        <div className="relative">
          <img
            src={image_url}
            alt=""
            className="w-full p-2 rounded-4xl object-cover object-center transition duration-700 grayscale-25 group-hover:grayscale-0"
          />
          <span className="absolute top-5 right-6 bg-white w-fit px-3 py-1 capitalize rounded-full text-sm font-bold text-gray-800">
            {category}
          </span>
        </div>
        <div className="mt-2 px-2 pt-2 relative">
          <h2 className="capitalize text-xl font-bold tracking-wider text-gray-800 w-[95%] mx-auto group-hover:text-gray-200 duration-700">
            {post_title}
          </h2>
          <p className="mt-2 text-gray-500 text-sm font-semibold line-clamp-3 w-[95%] mx-auto text-justify group-hover:text-gray-300 duration-700">
            {post_description}
          </p>
          <a
            href={post_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 text-white px-3 py-1 rounded-3xl w-[95%] flex items-center justify-center cursor-pointer text-sm font-semibold -translate-x-1/2 absolute left-1/2 transition-colors duration-700 shadow-2xl group-hover:border"
            style={{
              backgroundImage: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
            }}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
