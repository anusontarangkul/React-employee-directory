import React from "react";
import Heading from "./components/Heading";
import Search from "./components/Search";
import Wrapper from "./components/Wrapper";
import Employees from "./components/Employees"
import './App.css';






function App() {
  return (
    <div className="App">
      <Wrapper>
        <Heading />
        <Search />
        <Employees />
      </Wrapper>
    </div>
  );
}

export default App;


//5 columns
  // Image Name Phone Email DOB

// Sort by one category
//Filter by one property