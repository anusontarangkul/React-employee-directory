import React from "react";
import Heading from "./components/Heading";
import Search from "./components/Search";
import Wrapper from "./components/Wrapper";
import Employees from "./components/Employees";
import employeeList from "./components/employeeList";
import './App.css';







function App() {
  return (
    <div className="App">
      <Wrapper>
        <Heading />
        <Search />
        <Employees employeeList={employeeList} />
      </Wrapper>
    </div>
  );
}

export default App;




// Sort by one category
//Filter by one property