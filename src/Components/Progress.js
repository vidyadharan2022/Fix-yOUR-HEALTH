import React from 'react'
import Header from './Header';
import './Progress.css'
import { useNavigate } from 'react-router-dom';

export default function Progress() {
  const nav = useNavigate();
  const date = new Date();
    const customers=[
    {exname:"Bench press",sets:"3",reps:"10",weight:"30"},
    {exname:"Thumbles",sets:"5",reps:"12",weight:"10"}
    ]
  return (
    <>
    <Header/>
    <div>
      <div className='Progressbox'>
        <h1 className='Progressnam'>Progress</h1><hr className='Progressboxline'/>
        <div className='progresinputs'>
        <div className='progexerselect'>
          <label>Exercise</label>
          <select className='Progressinput'><option>Select</option><option>Exercse list</option><option>sdfsfs</option></select>
        </div>
        <div className='progexerset'>
          <label className='setlabel'>No of sets</label>
          <input type='number' placeholder='Enter' className='Progresssets'></input>
        </div>
        <div className='repsclass'>
          <label>No of reps/set</label>
          <input type='number' placeholder='Enter' className='Progresssets'></input>
        </div>
        <div className='weigthsclass'>
          <label>Weight</label>
          <input type='number' placeholder='Enter' className='Progresssets'></input>
        </div>
        </div>
          <p className='dateopt'>Date - {date.getDate()+"."+date.getMonth()+1+"."+date.getFullYear()}</p>
          <button className='progressaddbutt'>Add</button>
        </div>
        <div className='tablein'>
          <table>
            <thead>
            <tr>
             <th className='pictureth'>Exercise</th>
             <th className='nameth'>No of sets</th>
             <th className='descth'>No of reps/set</th>
             <th className='desct'>Weight</th>
            </tr>
          </thead>
            <tbody>
            {customers.map((c,i)=>(
              <tr>
                <td><p>{c.exname}</p></td>
                <td><p>{c.sets}</p></td>
                <td><p>{c.reps}</p></td>
                <td><p>{c.weight}</p></td>
              </tr>))}
            </tbody>
         </table>
        </div>
    </div>
    </>
  )
}
