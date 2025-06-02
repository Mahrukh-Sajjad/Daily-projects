import React, { useState } from "react";
import "./App1.css";
let random;

const App = () => {
  const [selected, setSelected] = useState(null);
  const employees = [
    {
      id: 1,
      name: "Alice Johnson",
      position: "Frontend Developer",
      department: "Engineering",
      email: "alice.johnson@example.com",
      phone: "555-123-4567",
    },
    {
      id: 2,
      name: "Bob Smith",
      position: "Backend Developer",
      department: "Engineering",
      email: "bob.smith@example.com",
      phone: "555-987-6543",
    },
    {
      id: 3,
      name: "Carol Lee",
      position: "UX Designer",
      department: "Design",
      email: "carol.lee@example.com",
      phone: "555-555-7890",
    },
    {
      id: 4,
      name: "David Kim",
      position: "Product Manager",
      department: "Product",
      email: "david.kim@example.com",
      phone: "555-222-3333",
    },
    {
      id: 5,
      name: "Eva Martinez",
      position: "QA Engineer",
      department: "Quality Assurance",
      email: "eva.martinez@example.com",
      phone: "555-444-7777",
    },
  ];
  const handleOptionChange = (e) => {
    setSelected(e.target.value);
  };
  console.log(selected);
  const list = employees.map((emp) => {
    return (
      <div key={emp.id} className="eContainer">
        <input
          type="radio"
          name="employee"
          value={emp.name}
          checked={selected === emp.name}
          onChange={handleOptionChange}
        />

        <h4>{emp.name}</h4>
        <div>___</div>
        <p>{emp.position}</p>
      </div>
    );
  });
  switch (selected) {
    case employees[0].name:
      random = (
        <div>
          <h4>Name:</h4>
          <div className="input">{employees[0].name}</div>
          <h4>Position:</h4>
          <div className="input">{employees[0].position}</div>
          <h4>Department:</h4>
          <div className="input">{employees[0].department}</div>
          <h4>Email:</h4>
          <div className="input">{employees[0].email}</div>
          <h4>Phone:</h4>
          <div className="input">{employees[0].phone}</div>
        </div>
      );

      break;
    case employees[1].name:
      random = (
        <div>
          <h4>Name:</h4>
          <div className="input">{employees[1].name}</div>
          <h4>Position:</h4>
          <div className="input">{employees[1].position}</div>
          <h4>Department:</h4>
          <div className="input">{employees[1].department}</div>
          <h4>Email:</h4>
          <div className="input">{employees[1].email}</div>
          <h4>Phone:</h4>
          <div className="input">{employees[1].phone}</div>
        </div>
      );

      break;
    case employees[2].name:
      random = (
        <div>
          <h4>Name:</h4>
          <div className="input">{employees[2].name}</div>
          <h4>Position:</h4>
          <div className="input">{employees[2].position}</div>
          <h4>Department:</h4>
          <div className="input">{employees[2].department}</div>
          <h4>Email:</h4>
          <div className="input">{employees[2].email}</div>
          <h4>Phone:</h4>
          <div className="input">{employees[2].phone}</div>
        </div>
      );
      break;
    case employees[3].name:
      random = (
        <div>
          <h4>Name:</h4>
          <div className="input">{employees[3].name}</div>
          <h4>Position:</h4>
          <div className="input">{employees[3].position}</div>
          <h4>Department:</h4>
          <div className="input">{employees[3].department}</div>
          <h4>Email:</h4>
          <div className="input">{employees[3].email}</div>
          <h4>Phone:</h4>
          <div className="input">{employees[3].phone}</div>
        </div>
      );
      break;
    case employees[4].name:
      random = (
        <div>
          <h4>Name:</h4>
          <div className="input">{employees[4].name}</div>
          <h4>Position:</h4>
          <div className="input">{employees[4].position}</div>
          <h4>Department:</h4>
          <div className="input">{employees[4].department}</div>
          <h4>Email:</h4>
          <div className="input">{employees[4].email}</div>
          <h4>Phone:</h4>
          <div className="input">{employees[4].phone}</div>
        </div>
      );
      break;
    default:
    //do
  }

  return (
    <div className="container">
      <h1>Employee Directory</h1>
      <div className="details">
        <div className="left">{list}</div>

        <div className="right">
          <div className="data">{random}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
