import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './Header';
import './Loginform.css';

export default function Loginform() {
    const nav = useNavigate();
    return (
        <>
        <div className='Fronthead'>
          <h1 className='website-name'>Fix yOUR HEALTH</h1>
        </div>
          <div className='loginforum'>
              <form >
              <div className='forum'>
                <div className='Signincontent'>
                <h2 className='signinname'>Sign In</h2>
                <div className='emailid'>
                  <label for='email' className='emaily'>Email Id : </label>
                  <input type='email' className='emailinput' ></input>
                </div><br></br>
                <div className='password'>
                  <label for='password' className='emaily'>Password : </label>
                  <input type='password' className= 'passwordinput' ></input>
                </div>
                <button className='signinbutton' onClick={()=>nav('/Progress')}>Sign In</button><br></br>
                <button href=''className='adminlogin' onClick={()=>nav('/Admininfo')}>Admin</button>
                <div className='Registerer'>
                <label for='Register'>Dont't have an Account? </label>
                <button type='submit' className='Registerbutton' onClick={()=>nav('/Register')}>Register</button>
                </div>
                </div>
                </div>
              </form>
            </div>
          
        </>
      )
    }
    