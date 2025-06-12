import React from "react";
import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [message, setmessage] = useState([]);
  return (
    <div>
      <Create message={message} setmessage={setmessage} />
    </div>
  );
};

export default App;
