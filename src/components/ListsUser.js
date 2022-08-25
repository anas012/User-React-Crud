import AuthContext from '../store/Auth';
import React, { useContext } from 'react';
const ListsUser = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <div className='bg-purple-400 p-2 m-1'>
   
     
     
     <p>{ctx.text}</p>
     
     <button className='' onClick={ctx.onClickContext}>Click me</button>
    </div>
    
    );
    
  

};

export default ListsUser;
