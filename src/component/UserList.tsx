import React from 'react';
import { PropsWithChildren } from 'react';
import { IUser } from '../types/types';

interface UserListProps {
    users: IUser[];
}

function UserList: FC<UserListProps>({users}) {

    return (
        <div>
            {users.map(user => 
                <div key={user.id} style= {{padding: 15, border: '1px solid blue'}}>
                    {user.id}, {user.name} проживает в городе {user.address.city}
                    на улице {user.address.street}
                </div>
            )}
        </div>
    );
}

export default UserList;