import React from "react";
import "../App.css";

const HomePage = () => {
  return (
    <div className="card">
      <div className="image-container">
        <img
          src="https://imgix.bustle.com/uploads/image/2022/11/10/017af216-48f5-4f23-8c21-eeea1df7de8c-daemon-1.jpeg"
          alt="Daemon-Targaryen"
        ></img>
      </div>
      <div className="card-header">
        <h1>Daemon Targaryen</h1>
        <h2>The Rogue Prince</h2>
      </div>
    </div>
  );
};

export default HomePage;
