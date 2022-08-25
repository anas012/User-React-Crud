import logo from './logo.svg';
import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css';
import AddUser from './components/Add-User';
import AuthContext from './store/Auth';
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
const contextHandler=()=>
{
  console.log("Context Test")
}
  return (
    <AuthContext.Provider value={{ text: 'Hello .... How are you??',onClickContext:contextHandler}}>
      <div className='container mx-auto bg-slate-400'>
        <h1 className='flex justify-center text-3xl '>User Register</h1>

        <AddUser onSaveUser={saveUserDataHandler}></AddUser>
        <ListUser users={userData} />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
