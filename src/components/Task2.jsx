import React, { useEffect, useState } from "react";
import axios from "axios";

const Task2 = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(response => {
        const shuffledImages = response.data.sort(() => Math.random() - 0.5);
        setImages(shuffledImages.slice(0, 100));
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
      padding: "20px"
    }}>
      {images.map((image, index) => (
        <div key={image.id} style={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "10px",
          textAlign: "center"
        }}>
          <h3>Card {index + 1}</h3> 
          <img src={"none"} alt={image.title} style={{ width: "100%", borderRadius: "10px" }} />
          <h4 style={{ margin: "10px 0" }}>{image.title}</h4>
          <p><strong>ID:</strong> {image.id}</p>
          <p><strong>Album ID:</strong> {image.albumId}</p>
        </div>
      ))}
    </div>
  );
};

export default Task2;