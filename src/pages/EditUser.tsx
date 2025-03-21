import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectUserById } from '../store/userSlice';
import { RootState } from "../store/store";
import UserForm from "../components/UserForm";

const EditUser = () => {

    const { id } = useParams<{id: string}>();
    const user = useSelector((state: RootState ) => id ? selectUserById(state, Number(id)) : undefined )

    if (!user) return <p>User not found</p>

  return (
    <div>
        <h2>Edit User</h2>
    <UserForm user={user} />
    </div>
  )
}

export default EditUser