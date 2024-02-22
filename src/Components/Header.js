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
          <a href=''  className='Progressname' onClick={()=>nav('/Progress')}>Progress</a>
          <a href=''  className='Progressexercise' onClick={()=>nav('/Exercise')}>Exercise</a>
          <a href=''  className='Progresscalculator' onClick={()=>nav('/Calculators')}>Calculator</a>
          <a href=''  className='Progressnutritips' onClick={()=>nav('/Nutritips')}>Nutritips</a>
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
