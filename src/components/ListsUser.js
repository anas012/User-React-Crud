const ListsUser = (props) => {
  return (
    // <div className='flex flex-row justify-between' key={props.users.id}>
    //   <p className='p-2 ml-8 font-medium'>{props.users.userName}</p>
    //   <p className='p-2 mr-8  font-medium'>{props.users.Age}</p>
    // </div>
    <li key={props.users.id}>
    {props.users.userName} ({props.users.Age} years old)
  </li>
  );
};

export default ListsUser;
