import React, { createContext, useState } from "react";
export const empInfo = createContext(null);
const Wrapper = (props) => {
  const employees = [
    {
      id: 1,
      name: "Alice Johnson",
      position: "Frontend Developer",
      department: "Engineering",
      email: "alice.johnson@example.com",
      salary: 70000,
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Bob Smith",
      position: "Backend Developer",
      department: "Engineering",
      email: "bob.smith@example.com",
      salary: 75000,
      url: "https://images.unsplash.com/photo-1697542636537-b0fc72c7e1ab?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const [info, setinfo] = useState(employees);

  return (
    <div>
      <empInfo.Provider value={[info, setinfo]}>
        {props.children}
      </empInfo.Provider>
    </div>
  );
};

export default Wrapper;
