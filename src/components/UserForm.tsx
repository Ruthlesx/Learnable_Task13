import { useDispatch  } from "react-redux"
import { useState } from "react"
//import store from "../store/store"
import { addUser, updateUser } from "../store/userSlice"
import { useNavigate } from "react-router-dom"
import { AppDispatch } from '../store/store'
//import { RootState } from "../store/store"

interface UserFormProps {
    user? : {
        id?: number;
        name: string;
        email: string;
        address: {
            street?: string; 
            city: string;
        };
    };
}


const UserForm: React.FC<UserFormProps> = ({ user }) => {

   // const { id } = useParams<{ id: string }>();

   const [name, setName] = useState(user?.name || "");
   const [email, setEmail] = useState(user?.email || "");
   const [city, setCity] = useState(user?.address.city || "");
   const [street, setStreet] = useState(user?.address.street || "");


    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

//    const user = useSelector((state: RootState) => id ? state.users.users.find(u => u.id === parseInt(id, 10)) : undefined);
  //  const [formData, setFormData] = useState(user || { name: "", email: "", address: { city: "" }});

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

       const newUser = {
          id: user?.id || Date.now(),
          name,
          email,
          address: { street, city }
       }

       user ? dispatch(updateUser(newUser)) : dispatch(addUser(newUser));
        navigate("/users");
    } 

  return (
    <div className="edit-container">

    
    <form onSubmit={handleSubmit}>

        <input type="text" value={name} onChange={(e) => setName( e.target.value)} placeholder="Enter name" required/>
        <input type="email" value={email} onChange={(e) => setEmail( e.target.value)} placeholder="Enter email" required />
        <input type="text" value={city} onChange={(e) => setCity( e.target.value )} placeholder="Enter City"  />
        <input  type="text" value={street} onChange={(e) => setStreet(e.target.value)} placeholder="Enter Street" />

        <div className="save-btn">
        <button  type='submit'>  Save</button>
        </div>
    </form>  
    </div>
    );

};

export default UserForm 

/*
import React from 'react'

const UserForm = () => {
  return (<>
    <div>UserForm</div>
    <h1>Hi, I'm working! </h1>

    </>
  )
}

export default UserForm */