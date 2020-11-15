import React, { useReducer, useState } from "react";
import Heading from "./components/Heading";
import Search from "./components/Search";
import Wrapper from "./components/Wrapper";
import Employees from "./components/Employees";
import employeeList from "./components/employeeList";
import './App.css';

function App() {


  const [employeeState, setEmployee] = useReducer((state, action) => {
    switch (action.type) {
      case "change":
        return action.input;
      case "ascend":
        return [...state].sort((a, b) => (a.name > b.name) ? 1 : -1);
      case "descend":
        return [...state].sort((a, b) => (a.name > b.name) ? -1 : 1);

      default:
        return employeeList;
    }
  }, employeeList)





  const handleChange = (value) => {
    const matchingEmployee = [];
    for (let i = 0; i < employeeList.length; i++) {
      let currentEmployee = employeeList[i];
      if (currentEmployee.name.toLowerCase().includes(value.toLowerCase())) {
        matchingEmployee.push(currentEmployee)

      }
    }
    setEmployee({
      type: "change",
      input: matchingEmployee
    });
  }


  return (
    <div className="App">
      <Wrapper>
        <Heading />
        <Search handleChange={handleChange} />

        <Employees employeeList={employeeState} setEmployee={setEmployee} />
      </Wrapper>
    </div>
  );
}

export default App;




// Sort by one category
//Filter by one property