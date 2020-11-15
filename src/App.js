import React from "react";
import Heading from "./components/Heading";
import Search from "./components/Search";
import Wrapper from "./components/Wrapper";
import Employees from "./components/Employees";
import employeeList from "./components/employeeList";
import './App.css';







function App() {

  // function handleChange(searched) {
  //   const matchingEmployee = [];
  //   for (let i = 0; i < employeeList.length; i++) {
  //     let currentEmployee = employeeList[i];
  //     if (currentEmployee.name.inclues(searched)) {
  //       matchingEmployee.push(currentEmployee)
  //     }
  //   }
  //   setEmployes({
  //     type: "change",
  //     input: matchingEmployee
  //   });
  // }
  return (
    <div className="App">
      <Wrapper>
        <Heading />
        {/* <Search handleChange={handleChange} /> */}
        <Search />
        {/* <Employees employeeList={employeeList} matchingEmployee={matchingEmployee} /> */}
        <Employees employeeList={employeeList} />
      </Wrapper>
    </div>
  );
}

export default App;




// Sort by one category
//Filter by one property