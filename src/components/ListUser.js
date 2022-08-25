import ListsUser from './ListsUser';

const ListUser = (props) => {
  //   let UserData = [];
 

  console.log(props.users);
  return (
    <div className='bg-green-400 p-10'>
      <div className='bg-yellow-200 rounded-lg p-2 mr-96 ml-96'>
        <div className='flex flex-row justify-between'>
          <p className='p-2 ml-8 font-medium'>UserName</p>
          <p className='p-2 mr-8  font-medium'>Age</p>
        </div>
        <ul>
          {props.users.map((user) => (
            <div className='flex flex-row justify-between' key={user.id}>
              <p className='p-2 ml-8 font-medium'>{user.userName}</p>
              <p className='p-2 mr-8  font-medium'>{user.Age}</p>
            </div>
          ))}
        </ul>
      </div>
      <ListsUser></ListsUser>
    </div>

    
  );
};

export default ListUser;
