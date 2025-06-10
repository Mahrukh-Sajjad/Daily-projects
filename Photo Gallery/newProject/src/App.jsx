import React from "react";
import PhotoGallery from "./components/PhotoGallery";
import AddPhotos from "./components/AddPhotos";
import { useState } from "react";

const App = () => {
  const [photos, setphotos] = useState([]);
  return (
    <div>
      <AddPhotos photos={photos} setphotos={setphotos} />
      <PhotoGallery photos={photos} setphotos={setphotos} />
    </div>
  );
};

export default App;
