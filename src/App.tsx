import React, { useEffect, useState } from 'react';
import Card, { CardVariant } from './component/Card';
import UserList from './component/UserList';
import { IUser } from './types/types';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data)
    } 
    catch (e){
      alert(e)
    }
  }
  
  return (
    <div>
      <Card onClick={(num) => console.log(num)} 
        variant={CardVariant.outlined}
        width='200px' 
        height='200px'
        >
        <button> Button!</button>
        dsa 
      </Card>
      <UserList users={users}/>
    </div >
  );
}

export default App;