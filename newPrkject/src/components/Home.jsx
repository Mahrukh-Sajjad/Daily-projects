import React, { useContext } from "react";
import { empInfo } from "./Wrapper";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [info, setinfo] = useContext(empInfo);
  const navigate = useNavigate();
  const NavigateHandler = (name) => {
    navigate(`/profile/detail/${name}`);
  };
  console.log(info);
  const cards = info.map((info) => {
    return (
      <div key={info.id} className="card">
        <img src={info.url} alt="" />
        <h2>{info.name}</h2>
        <button
          onClick={() => {
            NavigateHandler(info.name);
          }}
        >
          View Profile
        </button>
      </div>
    );
  });
  return <div className="container">{cards}</div>;
};

export default Home;
