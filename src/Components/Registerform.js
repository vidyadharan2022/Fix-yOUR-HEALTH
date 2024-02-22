import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Registerform.css';

export default function Registerform() {
    const nav = useNavigate();
  return (
    <>
    <div className='Fronthead'>
        <h1 className='website-name'>Fix yOUR HEALTH</h1>
    </div>
    <div className='Registerform'>
    <div className='Registrationcontents'>
      <h1 className='Registerid'>Register</h1>
      <form className='Registercontents'>
        <label className='Registername'>Name :<input type="text" name="name" className='RegNameinput'/> </label> <br />
        <label className='Registerphno'> Phone Number : <input type="tel" name="phoneNumber" className='Regphnoinput'/></label><br />
        <label className='Registermailid'> Email ID : <input type="email" name="email"className='Regemailinput'/></label><br />
        <label className='RegisterDOB'>Date of Birth : <input type="date" name="dob"className='RegDOBinput'/></label><br />
        <label className='Registerpassword'>Password : <input type="password" name="password" className='Regpassinput'/></label><br />
        <label className='Registerconfirm'> Confirm Password :<input type="password" name="confirmPassword"className='RegConfirminput'/></label><br />
        <button type="submit"className='RegisterButton' onClick={()=>nav('/Login')}>Register</button>
      </form>
      </div>
    </div>
    </>
  )
}
