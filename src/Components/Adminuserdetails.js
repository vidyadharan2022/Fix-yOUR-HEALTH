import React, { useState } from 'react'
import AdminHeader from './AdminHeader'

export default function Adminuserdetails() {
    const AdminUserList = () => {
        const [users, setUsers] = useState([
          { id: 1, name: 'Maharaja', email: 'maharaja@example.com' },
          { id: 2, name: 'Batman', email: 'batman@example.com' },
          
        ]);
      
        const handleDeleteUser = (userId) => {
          
          setUsers(users.filter(user => user.id !== userId));
        };
  return (
    <div>
      <div className='admindetails'>
      <h2>Admin User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                {}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}
}
