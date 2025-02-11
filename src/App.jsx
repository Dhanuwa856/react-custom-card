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
      <Card
        image_url="https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg"
        category="animals"
        post_title="  Blog Post 2"
        post_description=" This is the excerpt for blog post 2. It's a short summary of the
            article. It's a short summary of the article. It's a short summary of
            the article. It's a short summary of the article."
        post_url="https://unsplash.com/s/photos/nature"
      />
      <br />
      <br />
    </div>
  );
};

export default App;
