import React from 'react'
import './Header.css';
import { useNavigate } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { CgProfile } from "react-icons/cg";

export default function Header() {
  const nav = useNavigate();
  return (
    <>
      <header className='Heady'>
        <h1 className='Headname'>Fix yOUR HEALTH</h1>
        <nav>
          <a href=''  className='Progressname' onClick={()=>nav('/Admininfo')}>User Details</a>
          <a href=''  className='Progressexercise' onClick={()=>nav('/AdminExercised')}>Exercises</a>
          <a href=''  className='Progressnutritips' onClick={()=>nav('')}>Nutritips</a>
          <Popup trigger={<button className='Profilebutt'><CgProfile /></button>}>
          <div className='ProfileDivision'>
             <button className='Profilebutton' onClick={()=>nav('/Profile')}>Profile</button>
             <button className='LogoutButton' onClick={()=>nav('/')}>Log Out</button>
          </div>
          </Popup>
        </nav>
      </header>
    </>
  )
}
