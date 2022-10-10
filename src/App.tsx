import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import {List} from './Components/List'
import User from './Models/Users'



function App() {

  const [users,setUsers] = useState <User[]> ([]);

  useEffect(() =>{
    Axios.get<User[]> ('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
  })
  
  return (
    <div className="container mt-2">
      <List data={users} />
    </div>
   )
}

export default App;
