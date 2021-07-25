import React, { useState } from 'react';
import './App.css';
import User, { UserInt } from './components/User';


const App: React.FC = () => {



  interface AllUsersInt {
    currentUser: UserInt
    allUsers: Array<UserInt>
  }

  const [usersState, setUsersState] = useState<AllUsersInt>({
    currentUser: {
      name: "",
      age: "",
      job: "",
      deleteUser: () => { }
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

  const submitFormHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    setUsersState({
      currentUser: {
        name: "",
        age: "",
        job: "",
        deleteUser: () => { }

      },
      allUsers: [
        ...usersState.allUsers,
        usersState.currentUser
      ]
    })
  }

  const deleteHandler = (index: number): void => {
    const filterUsers = usersState.allUsers.filter((user, i) => {
      return index !== i
    })
    setUsersState({
      ...usersState,
      allUsers: filterUsers
    })
  }


  const allUSers = usersState.allUsers.map((user, i) => (
    <User
      key={i}
      name={user.name}
      age={user.age}
      job={user.job}
      deleteUser={() => deleteHandler(i)}
    />
  ))



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
      {allUSers}
    </div>
  );
}

export default App;
