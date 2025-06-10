import React, { useState } from "react";
import "./AddPhotos.css";
import { nanoid } from "nanoid";

const AddPhotos = (props) => {
  let photos = props.photos;
  let setphotos = props.setphotos;

  const [url, seturl] = useState("");
  const [caption, setcaption] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    const newPhoto = {
      id: nanoid(),
      url,
      caption,
    };
    let copy = [...photos];
    copy.push(newPhoto);

    setphotos(copy);
    seturl("");
    setcaption("");
  };

  return (
    <div className="add">
      <h1>Photo Caption Gallery</h1>
      <div className="card">
        <form onSubmit={submitHandler}>
          <div className="inputs">
            <input
              className="A"
              type="text"
              placeholder="Enter Url"
              onChange={(e) => {
                seturl(e.target.value);
              }}
              value={url}
            />
            <input
              className="B"
              type="text"
              placeholder="Enter Caption"
              onChange={(e) => {
                setcaption(e.target.value);
              }}
              value={caption}
            />
          </div>

          <button>Add Photo</button>
        </form>
      </div>
    </div>
  );
};

export default AddPhotos;
