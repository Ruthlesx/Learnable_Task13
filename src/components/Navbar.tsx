
import { Link } from "react-router-dom"

const Navbar = () => {
  return (

    <nav className="navbar">
        <div>
          <Link to="/users" className="mr-4">Dashboard</Link>
          <Link to="/add-user"> Add User</Link>
          </div>
    </nav>
)
}

export default Navbar