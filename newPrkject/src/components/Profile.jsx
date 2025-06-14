import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { empInfo } from "./Wrapper";
import "./Profile.css";

const Profile = () => {
  const [info, setinfo] = useContext(empInfo);
  const params = useParams();
  const navigate = useNavigate();
  let profileCard;
  switch (params.name) {
    case "Alice Johnson":
      profileCard = (
        <div className="card1">
          <div className="left">
            <img src={info[0].url} alt="" />
            <h2>{info[0].name}</h2>
          </div>
          <div className="right">
            <div className="row">
              <h3>Name:</h3>
              <p>{info[0].name}</p>
            </div>
            <div className="row">
              <h3>Position:</h3>
              <p>{info[0].position}</p>
            </div>
            <div className="row">
              <h3>Department:</h3>
              <p>{info[0].department}</p>
            </div>
            <div className="row">
              <h3>Email:</h3>
              <p>{info[0].email}</p>
            </div>
            <div className="row">
              <h3>Salary:</h3>
              <p>{info[0].salary}</p>
            </div>
          </div>
        </div>
      );
      break;
    case "Bob Smith":
      profileCard = (
        <div className="card1">
          <div className="left">
            <img src={info[1].url} alt="" />
            <h2>{info[1].name}</h2>
          </div>
          <div className="right">
            <div className="row">
              <h3>Name:</h3>
              <p>{info[1].name}</p>
            </div>
            <div className="row">
              <h3>Position:</h3>
              <p>{info[1].position}</p>
            </div>
            <div className="row">
              <h3>Department:</h3>
              <p>{info[1].department}</p>
            </div>
            <div className="row">
              <h3>Email:</h3>
              <p>{info[1].email}</p>
            </div>
            <div className="row">
              <h3>Salary:</h3>
              <p>{info[1].salary}</p>
            </div>
          </div>
        </div>
      );
      break;
    default:
      console.log("error");
  }
  return (
    <div className="mainDiv">
      {profileCard};
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go back
      </button>
    </div>
  );
};

export default Profile;
