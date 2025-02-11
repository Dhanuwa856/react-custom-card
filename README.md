# Customizable Card Component

This is a customizable Card component built with React and Tailwind CSS. It displays an image, category, post title, post description, and a "Read More" link with smooth gradient hover effects. The card's size and gradient colors can be easily adjusted via props.

## Features

- **Gradient Hover Effect:**  
  On hover, a gradient overlay scales up from the bottom left, revealing a stylish background effect.
- **Image Grayscale Transition:**  
  The image transitions smoothly from a slight grayscale to full color when hovering.

- **Customizable Colors:**  
  Easily update the gradient colors using the `primaryColor` and `secondaryColor` props.

- **Adjustable Card Size:**  
  Customize the card's dimensions using the `cardWidth` and `cardHeight` props.
- **Responsive & Modern Design:**  
  Built using Tailwind CSS classes for a modern, responsive design.

## Installation

Make sure your project has React and Tailwind CSS installed and configured. If you haven't set up Tailwind CSS yet, follow the [Tailwind CSS Installation Guide](https://tailwindcss.com/docs/installation).

1. **Clone or Download the Component:**  
   Place the `Card.js` file in your project's components folder.

2. **Ensure Tailwind CSS is Active:**  
   Confirm your project is correctly configured to compile Tailwind CSS classes.

## Usage

Import and use the Card component in your React application as shown below:

```jsx
import React from "react";
import Card from "./Card";

const App = () => {
  return (
    <div className="p-10">
      <Card
        image_url="/path/to/image.jpg"
        category="Nature"
        post_title="Blog Post 1"
        post_description="This is the excerpt for blog post 1. It's a short summary of the article."
        post_url="https://www.example.com"
        primaryColor="#0D92F4" // Custom gradient primary color (Default)
        secondaryColor="#3D8D7A" // Custom gradient secondary color (Default)
        cardWidth="max-w-xs" // Card width (Default = max-w-xs)
        cardHeight="h-[400px]" // Card height (Default = h-[400px])
      />
    </div>
  );
};

export default App;
```
