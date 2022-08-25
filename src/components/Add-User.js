import { useState, useRef } from 'react';
import { Toast } from 'primereact/toast';
const AddUser = (props) => {
  const toast = useRef(null);
  const [enteredValue, setEnteredValue] = useState({
    enteredUserName: '',
    enteredAge: '',
  });

  const submitHandler = (e) => {
    e.preventDefault();

    let userData = {
      userName: enteredValue.enteredUserName,
      Age: enteredValue.enteredAge,
    };
    toast.current.show({
      severity: 'success',
      summary: 'Success',
      detail: 'User Created',
    });
    props.onSaveUser(userData);
  };

  const userNameHandler = (e) => {
    setEnteredValue((prevState) => {
      return {
        ...prevState,
        enteredUserName: e.target.value,
      };
    });
  };

  const ageHandler = (e) => {
    setEnteredValue((prevState) => {
      return {
        ...prevState,
        enteredAge: e.target.value,
      };
    });
  };
  return (
    <div className='flex  m-10 p-3 justify-center'>
      <Toast ref={toast} />
      <form onSubmit={submitHandler}>
        <div className=' flex justify-center'>
          <label className='font-medium'>User Name</label>
          <input
            className='p-2 px-4 ml-5 rounded-lg focus:outline-none'
            type='text'
            name='username'
            onChange={userNameHandler}
          />
        </div>

        <div className='mt-2 flex justify-center'>
          <label className='font-medium px-9'>Age</label>
          <input
            className='p-2 px-4 rounded-lg focus:outline-none'
            type='text'
            name='username'
            onChange={ageHandler}
          />
        </div>
        <div className='mt-3 flex justify-center'>
          <button className='px-7 mr-8 p-2 rounded-lg   bg-lime-300'>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
