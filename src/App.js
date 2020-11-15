import React, { useReducer } from "react";
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
      case "sort":
        return [...state].sort((a, b) => (a.name > b.name) ? 1 : -1);
      default:
        return employeeList;
    }
  }, employeeList)

  function handleChange(searched) {
    const matchingEmployee = [];
    for (let i = 0; i < employeeList.length; i++) {
      let currentEmployee = employeeList[i];
      if (currentEmployee.name.includes(searched)) {
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