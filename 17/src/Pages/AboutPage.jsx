import React from "react";
import { Outlet } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="card">
      <div className="image-container">
        <img
          src="https://pbs.twimg.com/media/Fe31-x5WIAAsDcp.jpg:large"
          alt="Daemon-Targaryen"
        ></img>
      </div>
      <div className="card-header">
        <h1>Daemon Targaryen</h1>
        <p>
          Daemon is the grandson of Jaehaerys I Targaryen, younger brother of
          King Viserys, and heir presumptive to the Iron Throne. Ser Otto
          Hightower, the Hand of the King, considers Daemon the greatest threat
          to the realm.[14] He is the rider of the dragon Caraxes, an older
          dragon known as the Blood Wyrm. An experienced and skilled fighter, he
          wields Dark Sister, the Valyrian steel sword of his grandfather's
          great aunt Visenya Targaryen. Unlike his older brother, Daemon is -
          despite his great cunning - an unpredictable and impulsive rogue
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
