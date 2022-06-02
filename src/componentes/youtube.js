import ReactPlayer from "react-player";
import React from "react";
import '../stylesheets/youtube.css';

const Canciones = ({ CancionesLink }) => {
  return (
      <div className="youtube">
        <ReactPlayer
            url={CancionesLink} />
      </div>
  );
};
export default Canciones;