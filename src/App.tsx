import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {

  interface UserInt {
    name: string
    age: string
    job: string
  }

  interface AllUsersInt {
    currentUser: UserInt
    allUsers: Array<UserInt>
  }

  const [usersState, setUsersState] = useState<AllUsersInt>({
    currentUser: {
      name: "",
      age: "",
      job: ""
    },
    allUsers: []
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // console.log(e.target.value);
    setUsersState({
      ...usersState,
      currentUser: {
        ...usersState.currentUser,
        [e.target.name]: e.target.value
      }
    })
  }

  // console.log(usersState.currentUser);

  const submitFormHandler = (e: React.SyntheticEvent) : void => {
    e.preventDefault();
  }


  return (
    <div className='container'>
      <h1>React with TypeScript</h1>
      <form onSubmit={submitFormHandler}>
        <label htmlFor="userName">Name: </label>
        <input
          id="userName"
          type="text"
          name="name"
          value={usersState.currentUser.name}
          onChange={onChangeHandler} />

        <label htmlFor="userAge">Age: </label>
        <input
          id="userAge"
          type="number"
          name="age"
          value={usersState.currentUser.age}
          onChange={onChangeHandler} />

        <label htmlFor="userJob">Job: </label>
        <input
          id="userJob"
          type="text"
          name="job"
          value={usersState.currentUser.job}
          onChange={onChangeHandler} />

        <button type="submit">Add user: </button>
      </form>
    </div>
  );
}

export default App;
