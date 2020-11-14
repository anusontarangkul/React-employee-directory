import React from "react";
import Heading from "./components/Heading";
import Search from "./components/Search";
import Wrapper from "./components/Wrapper";
import Employees from "./components/Employees";
// import employee_db from "./components/employee_db";
import './App.css';


const employee_db = [
  {
    "image": "https://www.flaticon.com/free-icon/man_146031",
    "name": "Brad Smith",
    "phone": "305-423-9999",
    "email": "bradsmith@gmail.com",
    "DOB": "02/05/1990"
  },
  {
    "image": "https://www.flaticon.com/free-icon/man_146029",
    "name": "Sean Smith",
    "phone": "305-423-9998",
    "email": "seansmith@gmail.com",
    "DOB": "1/11/1990"
  },
  {
    "image": "https://www.flaticon.com/free-icon/woman_146036",
    "name": "Samantha Smith",
    "phone": "305-423-9997",
    "email": "samanthasmith@gmail.com",
    "DOB": "10/05/1990"
  },
  {
    "image": "https://www.flaticon.com/free-icon/woman_146030",
    "name": "Christine Smith",
    "phone": "305-423-9996",
    "email": "christinesmith@gmail.com",
    "DOB": "02/21/1990"
  },
  {
    "image": "https://www.flaticon.com/free-icon/man_146035",
    "name": "David Smith",
    "phone": "305-423-9995",
    "email": "davidsmith@gmail.com",
    "DOB": "04/05/1990"
  }
]





function App() {
  return (
    <div className="App">
      <Wrapper>
        <Heading />
        <Search />
        <Employees employee_db={employee_db} />
      </Wrapper>
    </div>
  );
}

export default App;




// Sort by one category
//Filter by one property