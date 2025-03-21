
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import UserDetails from "./pages/UserDetails";
import Users from "./pages/Users"
//import UserForm from "./components/UserForm";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Navbar from "./components/Navbar";


import './App.css'

function App() {


  return (
    <Router>
       <Navbar />
      <Routes>
       
       <Route path="/users" element={<Users />} />
       <Route path="/add-user" element={<AddUser />} />
       <Route path="/edit-user/:id" element={<EditUser />} />
      <Route path="/users/:id" element={<UserDetails/>}></Route>
      </Routes>
    </Router>   
  )
}

export default App
