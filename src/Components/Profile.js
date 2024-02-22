import React from 'react'
import Header from './Header'
import './Profile.css'
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const nav = useNavigate();
  return (
    <>
    <Header/>
    <div className='Profilebox'>
      <div className='Profilecontents'>
        <h2 className='profilename'>Profile</h2><hr className='pline'></hr>
        <div className='pdownprofile'>
        <p className='pname'>Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: Maharaja.M</p>
        <p className='pname'>Ph No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 9944189471</p>
        <p className='pname'>DOB&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: 26/05/2003</p>
        <p className='pname'>Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: maharaja.bat@gmail.com</p>
        <label className='passchange'> Change Password&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;<input type="password" name="changePassword"className='profilechangepassinput'/></label><br/>
        <button className='savebutt' onClick={()=>nav(-1)}>Save</button>
        </div>
      </div>
    </div>
    </>
  )
}


// import React from 'react';
// import  { useState } from 'react';

// const ProfilePage = ({ userProfile, onChangePasswordClick }) => {
//     const ChangePasswordModal = ({ onChangePassword, onCancel }) => {
//         const [currentPassword, setCurrentPassword] = useState('');
//         const [newPassword, setNewPassword] = useState('');
      
//         const handleSave = () => {
//           onChangePassword(currentPassword, newPassword);
//         };
//     }

// export default function Profile(){
//   return (
//     <>
//     <div>
//       <h1>Profile Page</h1>
//       <p>Name: {userProfile.name}</p>
//       <p>Email: {userProfile.email}</p>
//       <p>Phone Number: {userProfile.phoneNumber}</p>
//       <p>DOB: {userProfile.dob}</p>
//       <button onClick={onChangePasswordClick}>Change Password</button>
//       <div>
//       <h1>Change Password</h1>
//       <label>Current Password:</label>
//       <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
//       <label>New Password:</label>
//       <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
//       <button onClick={handleSave}>Save Changes</button>
//       <button onClick={onCancel}>Cancel</button>
//     </div>
//     </div>
//     </>
//   );
//   }
// };
// }


// export default ProfilePage;

// import React, { useState } from 'react'
// import Header from './Header';
// import { useNavigate } from 'react-router-dom';


// export default function Profile() {
//     const nav = useNavigate();
//     const Profile = () => {
//         const [userData, setUserData] = useState({
//           email: 'default@email.com',
//           username: 'defaultUsername',
//           userid: 'defaultUserId',
//           postcounts: 0,
//           DOB:'12-12-2023',
//           Gender:'UserGender'
//         });
//   return (
//     <div>
//         <Header/>
//     <div className="boddy">
//     <div className="profilemain">
//     <div className='profile'>
//       <h1>Welcome to your Profile, {userData.username}!</h1>
//       <div className='profile-details'>
//         <p>Name: &nbsp;&nbsp;{userData.username}</p>
//         <p>UserID: &nbsp;&nbsp;{userData.userid}</p>
//         <p>Date Of Birth: &nbsp;&nbsp;{userData.DOB}</p>
//         <p>Number Of Posts: &nbsp;&nbsp;{userData.postcounts}</p>
//         <p>Email: &nbsp;&nbsp;{userData.email}</p>
//         <p>Gender: &nbsp;&nbsp;{userData.Gender}</p>
//       </div>
//         <button className="return">Return</button>
//         <button className="editprofile">Edit Profile</button>
//       </div>
//       </div>
//     </div>
//     </div>
//   )
// }
//}
