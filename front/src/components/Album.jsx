import React, { useState, useEffect } from 'react';
import './Album.css';

// Import your images directly
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';
import image4 from '../assets/4.jpg';

const Album = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importedImages = [image1, image2, image3, image4];
    setImages(importedImages);
  }, []);

  return (
    <div className="album">
      <h2>Album</h2>
      <div className="image-container">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Album;