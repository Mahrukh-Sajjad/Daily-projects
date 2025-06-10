import React from "react";
import "./PhotoGallery.css";

const PhotoGallery = (props) => {
  let photos = props.photos;
  let setphotos = props.setphotos;
  let gallery = photos.map((p) => {
    return (
      <div className="photoCard">
        <img src={p.url} alt="" />
        <div className="para">
          <p>{p.caption}</p>
        </div>
      </div>
    );
  });
  return <div className="pics">{gallery}</div>;
};

export default PhotoGallery;
