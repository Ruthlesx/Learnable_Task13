import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { deleteUser } from "../store/userSlice"
import { AppDispatch } from '../store/store'



// Definition of User type
interface User {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        city: string;

    };
}

const UserCard: React.FC<{ user: User}> = ({user}) => {

    const dispatch = useDispatch<AppDispatch>();


  return (
    <div className='card'>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.address.street}, {user.address.city}</p>

        <Link className='view-link ' to={`/users/${user.id}`}>View</Link>
        <Link className='edit-link' to={`/edit-user/${user.id}`}>Edit</Link>

        <button onClick={() => dispatch(deleteUser(user.id))}>Delete</button>
    </div>
  )
}

export default UserCard 