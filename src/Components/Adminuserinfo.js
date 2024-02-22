import React, { useState } from 'react';
import AdminHeader from './AdminHeader';
import './Adminuserinfo.css';

export default function Adminuserinfo() {
  // const AdminUserList = () => {
  //   const [users, setUsers] = useState([
  //     { id: 1, name: 'Maharaja', email: 'maharaja@example.com' },
  //     { id: 2, name: 'Batman', email: 'batman@example.com' },
      
  //   ]);
  
  //   const handleDeleteUser = (userId) => {
      
  //     setUsers(users.filter(user => user.id !== userId));
  //   };
  return (
    <div>
      <AdminHeader/>
      <div className='Listname'>
      <h2>User List</h2>
      <table className='tableuser'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map(user => ( */}
            <tr >
              <td>1001</td>
              <td>maha</td>
              <td>maha.bat@gmail.com</td>
              <td>
                <button 
                // onClick={() => handleDeleteUser(user.id)}
                >Delete</button>
                {}
              </td>
            </tr>
            <tr >
              <td>1002</td>
              <td>raja</td>
              <td>raja.bat@gmail.com</td>
              <td>
                <button 
                // onClick={() => handleDeleteUser(user.id)}
                >Delete</button>
                {}
              </td>
            </tr>
            <tr >
              <td>1003</td>
              <td>mahara</td>
              <td>mahara.bat@gmail.com</td>
              <td>
                <button 
                // onClick={() => handleDeleteUser(user.id)}
                >Delete</button>
                {}
              </td>
            </tr>
            <tr >
              <td>1004</td>
              <td>maaja</td>
              <td>maaja.bat@gmail.com</td>
              <td>
                <button 
                // onClick={() => handleDeleteUser(user.id)}
                >Delete</button>
                {}
              </td>
            </tr>
            <tr >
              <td>1005</td>
              <td>haraja</td>
              <td>haraja.bat@gmail.com</td>
              <td>
                <button 
                // onClick={() => handleDeleteUser(user.id)}
                >Delete</button>
                {}
              </td>
            </tr>
            <tr >
              <td>1006</td>
              <td>mahaa</td>
              <td>mahaa.bat@gmail.com</td>
              <td>
                <button 
                // onClick={() => handleDeleteUser(user.id)}
                >Delete</button>
                {}
              </td>
            </tr>
            <tr >
              <td>1007</td>
              <td>maaja</td>
              <td>maaja.bat@gmail.com</td>
              <td>
                <button 
                // onClick={() => handleDeleteUser(user.id)}
                >Delete</button>
                {}
              </td>
            </tr>
            <tr >
              <td>1008</td>
              <td>aharaj</td>
              <td>aharaj.bat@gmail.com</td>
              <td>
                <button 
                // onClick={() => handleDeleteUser(user.id)}
                >Delete</button>
                {}
              </td>
            </tr>
            <tr >
              <td>1009</td>
              <td>maharaj</td>
              <td>maharaj.bat@gmail.com</td>
              <td>
                <button 
                // onClick={() => handleDeleteUser(user.id)}
                >Delete</button>
                {}
              </td>
            </tr>

          {/* ))} */}
        </tbody>
      </table>
    </div>
    </div>
  )
}

