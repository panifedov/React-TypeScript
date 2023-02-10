import React, { FC,useEffect, useState } from 'react';
import List from './List';
import { IUser } from '../types/types';
import axios from 'axios';
import UserItem from './UserItem';
import { useNavigate } from 'react-router-dom';

const UserPages: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const history = useNavigate()

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        }
        catch (e) {
            alert(e)
        }
    }

    return (
            <List items={users}
                renderItem={(user: IUser) => <UserItem onClick={(user) => history('/users' + user.id)} user={user} key={user.id} />}
            />
    );
};

export default UserPages;