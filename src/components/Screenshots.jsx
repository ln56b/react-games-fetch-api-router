import React from "react";
// import "./screenshots.css";
import { Link } from "react-router-dom";

const Screenshots = props => {
  return (
    <div>
      <Link to="/">Home</Link>
      <br />

      {props.short_screenshots.map(game => (
        <img src={game[0].image} alt="ok" className="img-screen" />
      ))}
    </div>
  );
};

export default Screenshots;