import React,  { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, selectUsers } from "../store/userSlice"
import UserCard from "./UserCard";
import { Link } from "react-router-dom";
import { RootState, AppDispatch } from "../store/store"




const UserList: React.FC =  () => {

    const dispatch = useDispatch<AppDispatch>();
    const { users, loading } = useSelector((state: RootState) => selectUsers(state));
    
    useEffect(() => { 
        dispatch(fetchUsers()); 
     }, [dispatch]);


    if (loading) return <p>Loading users...</p>;
    return (
        <div className='container'>
            <div className='user-card'>{users && users.map(user => <UserCard key={user.id} user={user} />)}</div>
            <button className='add-user-btn '> <Link className='link' to="/add-user">Add User</Link> </button>
        </div>
    );


};

export default UserList