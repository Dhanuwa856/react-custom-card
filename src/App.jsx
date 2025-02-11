import React from "react";
import Card from "./components/card";
import Img01 from "/img01.jpg";

const App = () => {
  return (
    <div>
      <Card
        image_url={Img01}
        category="nature"
        post_title="  Blog Post 1"
        post_description=" This is the excerpt for blog post 1. It's a short summary of the
            article. It's a short summary of the article. It's a short summary of
            the article. It's a short summary of the article."
        post_url="https://unsplash.com/s/photos/nature"
      />
    </div>
  );
};

export default App;
