import React, { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [users, setUsers] = useState([]);
  const [click, changeinclick ] = useState(false);

  useEffect(() =>
  {
     getdata();   
  } ,[]);

  const clickevent = () =>
  {
    changeinclick(!click);
  }

  const getdata = async () =>
  {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const content = await response.json();
      setUsers(content.data);
  }

  return (
    <div className="App">
      <button className="btn" onClick={clickevent}>Get User Data </button>
      
      {click && (
        <div className="box">
          <h1>USER DETAILS</h1>
            
            {users.map((users) => (
             <div className="data" key={users.id}>
                <h3>Name : {users.first_name}{users.last_name}</h3>
                <img src={users.avatar} alt=""></img>
                <h5>Email : {users.email}</h5>
              </div>
              ))}
        </div>
      )}    
    </div>
  );
}
export default App;
