import React from 'react'
import AdminHeader from './AdminHeader';
import './Adminexercise.css';

export default function Adminexercise() {
  return (
    <div>
      <AdminHeader/>
      <div className='exernametop'>
        <h2>Exercise List</h2>
        <div className='addbuttons'>
            <button className='bu1'>add New</button>
        </div>
        <table className='tablexer'>
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* {users.map(user => ( */}
            <tr >
              <td>Chest</td>
              <td>BarbellBenchPress</td>
              <td>lorem ipsum dolor sit ame</td>
              <td>
                <button 
                // onClick={() => handleDeleteUser(user.id)}
                >Delete</button>
                <button>Edit</button>
                {}
              </td>
            </tr>
            <tr >
              <td>Chest</td>
              <td>thumbles</td>
              <td>ipsam eos cupiditate libero fuga </td>
              <td>
                <button 
                // onClick={() => handleDeleteUser(user.id)}
                >Delete</button>
                <button>Edit</button>
                {}
              </td>
            </tr>
            <tr >
              <td>Chest</td>
              <td>cross benchpress</td>
              <td>magnam praesentium natus impedit</td>
              <td>
                <button 
                // onClick={() => handleDeleteUser(user.id)}
                >Delete</button>
                <button>Edit</button>
                {}
              </td>
            </tr>
            <tr >
              <td>Chest</td>
              <td>BarbelMachinepress</td>
              <td>consectetur adipisicing elit sed</td>
              <td>
                <button 
                // onClick={() => handleDeleteUser(user.id)}
                >Delete</button>
                <button>Edit</button>
                {}
              </td>
            </tr>
            <tr >
              <td>Shoulder</td>
              <td>Rope Pulling</td>
              <td>do eiusmod tempor incididunt</td>
              <td>
                <button 
                // onClick={() => handleDeleteUser(user.id)}
                >Delete</button>
                <button>Edit</button>
                {}
              </td>
            </tr>
            <tr >
              <td>weightlifting</td>
              <td>maaja</td>
              <td>ut labore et dolore magna</td>
              <td>
                <button 
                // onClick={() => handleDeleteUser(user.id)}
                >Delete</button>
                <button>Edit</button>
                {}
              </td>
            </tr>
            <tr >
              <td>Legs</td>
              <td>Squats</td>
              <td>aliqua obcaecati ipsa assumenda </td>
              <td>
                <button 
                // onClick={() => handleDeleteUser(user.id)}
                >Delete</button>
                <button>Edit</button>
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
