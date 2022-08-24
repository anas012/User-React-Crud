import logo from './logo.svg';
import './App.css';
import AddUser from './components/Add-User';
import ListUser from './components/ListUser';
import { useState } from 'react';
function App() {
  const [userData, setUserData] = useState([]);
  const saveUserDataHandler = (data) => {
    let userName = data.userName;
    let Age = data.Age;
    setUserData((prevData) => {
      return [
        ...prevData,
        {
          userName,
          Age,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div className='container mx-auto bg-slate-400'>
      <h1 className='flex justify-center text-3xl '>User Register</h1>

      <AddUser onSaveUser={saveUserDataHandler}></AddUser>
      <ListUser users={userData} />
    </div>
  );
}

export default App;
