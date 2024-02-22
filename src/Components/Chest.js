import React from 'react'
import './Exercise.css'
import './Chest.css'
import { IoIosSearch } from "react-icons/io";
import Header from './Header'
import { useNavigate } from 'react-router-dom';
import Barbellinclinebenchpressimg from './Barbellinclinebenchpressimg.jpg'
import Besnchpressimg from './Benchpressimg.png'

export default function Chest() {
    const nav = useNavigate();
    const customers=[
    {image:Barbellinclinebenchpressimg,name:"Barbell Bench Press",description:" Targets the upper part of the pectoral muscles.",Link:"./BarbellBenchPress"},
    {image:Barbellinclinebenchpressimg,name:"Bench Press",description:" Targets chest muscles (pectorals), shoulder muscles, and those in your arms.",Link:"./BarbellBenchPress"},
    {image:Besnchpressimg,name:"Bench Press Machine",description:" Targets chest muscles (pectorals), shoulder muscles, and those in your arms.",Link:"./BarbellBenchPress"},
    {image:Barbellinclinebenchpressimg,name:"Bench Press With Bands",description:" Targets chest muscles (pectorals), shoulder muscles, and those in your arms.",Link:"./BarbellBenchPress"},
    {image:Barbellinclinebenchpressimg,name:"BOSU Ball Push-Ups",description:" Targets chest muscles (pectorals), shoulder muscles, and those in your arms.",Link:"./BarbellBenchPress"},
    {image:Barbellinclinebenchpressimg,name:"Butterfly Machine",description:" Targets chest muscles (pectorals), shoulder muscles, and those in your arms.",Link:"./BarbellBenchPress"},
    {image:Barbellinclinebenchpressimg,name:"Cable Crossover",description:" Targets chest muscles (pectorals), shoulder muscles, and those in your arms.",Link:"./BarbellBenchPress"},
    {image:Barbellinclinebenchpressimg,name:"Chest Dips",description:" Targets chest muscles (pectorals), shoulder muscles, and those in your arms.",Link:"./BarbellBenchPress"},
    {image:Barbellinclinebenchpressimg,name:"Bench Press",description:" Targets chest muscles (pectorals), shoulder muscles, and those in your arms.",Link:"./BarbellBenchPress"},
    {image:Barbellinclinebenchpressimg,name:"Bench Press",description:" Targets chest muscles (pectorals), shoulder muscles, and those in your arms.",Link:"./BarbellBenchPress"},
    {image:Barbellinclinebenchpressimg,name:"Bench Press",description:" Targets chest muscles (pectorals), shoulder muscles, and those in your arms.",Link:"./BarbellBenchPress"},
    {image:Barbellinclinebenchpressimg,name:"Bench Press",description:" Targets chest muscles (pectorals), shoulder muscles, and those in your arms.",Link:"./BarbellBenchPress"},
    {image:Barbellinclinebenchpressimg,name:"Bench Press",description:" Targets chest muscles (pectorals), shoulder muscles, and those in your arms.",Link:"./BarbellBenchPress"},
    {image:Barbellinclinebenchpressimg,name:"Bench Press",description:" Targets chest muscles (pectorals), shoulder muscles, and those in your arms.",Link:"./BarbellBenchPress"},
    {image:Barbellinclinebenchpressimg,name:"Bench Press",description:" Targets chest muscles (pectorals), shoulder muscles, and those in your arms.",Link:"./BarbellBenchPress"},
    {image:Barbellinclinebenchpressimg,name:"Bench Press",description:" Targets chest muscles (pectorals), shoulder muscles, and those in your arms.",Link:"./BarbellBenchPress"},
    {image:Barbellinclinebenchpressimg,name:"Bench Press",description:" Targets chest muscles (pectorals), shoulder muscles, and those in your arms.",Link:"./BarbellBenchPress"},
    {image:Barbellinclinebenchpressimg,name:"Bench Press",description:" Targets chest muscles (pectorals), shoulder muscles, and those in your arms.",Link:"./BarbellBenchPress"},
    {image:Barbellinclinebenchpressimg,name:"Bench Press",description:" Targets chest muscles (pectorals), shoulder muscles, and those in your arms.",Link:"./BarbellBenchPress"},
    {image:Barbellinclinebenchpressimg,name:"Bench Press",description:" Targets chest muscles (pectorals), shoulder muscles, and those in your arms.",Link:"./BarbellBenchPress"},
    ]
  return (
    <>
      <Header/>
      <nav className='Exercisenav'>
        <h2 className='exername'>Exercise List / Chest</h2>
        <div className='searches'>
        <input type="text" placeholder=" &nbsp;&nbsp;Search exercises..." className='Searchinput'></input>
        <button className='Searchbutt'><IoIosSearch /></button>
        </div>
      </nav>
    <div className='Exerciselist'>
       <div className='listofcustomers'>
         <table>
          <thead>
            <tr>
             <th className='pictureth'></th>
             <th className='nameth'></th>
              <th className='descth'></th>
            </tr>
          </thead>
            <tbody>
            {customers.map((c,i)=>(
              <tr>
                <td><img src={c.image}></img></td>
                <td><a onClick={()=>nav(c.Link)}>{c.name}</a></td>
                <td>{c.description}</td>
              </tr>))}
            </tbody>
         </table>       
       </div>
    </div>
    </>
  )
}