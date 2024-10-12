import { useState } from "react"
import { axiosInstance } from "../axiosInstance"
import "./User.css"

const User = () => {
  const [users, setUsers] = useState([] as any[])
  const fetchUsers = () => {
    axiosInstance
      .get("/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err))
  }
  return (
    <div>
      <button type="button" onClick={fetchUsers}>
        Fetch
      </button>
      <div>
        {users.map((user) => (
          <div key={user._id} className="user-item">
            {user.email}
          </div>
        ))}
      </div>
    </div>
  )
}

export default User
