import React from 'react'
import Header from './Header'
import './Exercise.css'
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

export default function Exercise() {
  const nav = useNavigate();
  return (
    <>
    <Header/>
      <nav className='Exercisenav'>
        <h2 className='exername'>Exercise List&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h2>
        <div className='searches'>
        <input type="text" placeholder=" &nbsp;&nbsp;Search exercises..." className='Searchinput'></input>
        <button className='Searchbutt'><IoIosSearch /></button>
        </div>
      </nav>
      <div className='ExerButtons'>
        <button className='chestbutt'onClick={()=>nav('/Chest')}>Chest</button>
        <button className='bicepsbutt'>Biceps</button>
        <button className='tricepsbutt'>Triceps</button>
        <button className='backbutt'>Back</button>
        <button className='shoulderbutt'>Shoulder</button>
        <button className='legsbutt'>Legs</button>
        <button className='abdominalbutt'>Abdomin</button>
        <button className='combinedbutt'>Combine</button>
        <button className='cardiobutt'>Cardio</button>
      </div>
    </>
  )
}
