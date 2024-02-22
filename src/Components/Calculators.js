import React from 'react'
import Header from './Header';
import './Calculators.css';
import { useNavigate } from 'react-router-dom';
import BMIimg from './BMIimg.jpg';
import bmrimg from './bmrimg.png';
import Fatimg from './Fatimg.png';
import ibwimg from './ibwimg.jpg';

export default function Calculators() {
  const nav = useNavigate();
  return (
    <>
    <Header/>
      <div className="App">
      <div className="button-container">
        <div className='bmicontainer'><img src={BMIimg} alt='BMI' className='bmiimage'></img>
        <h2 className='bmiformula'>BMI</h2>
        <p className='bmipara'>Body mass index (BMI) is a simple index of weight-for-height 
          that is commonly used to classify overweight and obesity in adults. BMI is a useful measure of overweight and obesity.</p>
        <button className="button-1" onClick={()=>nav('/BmiCalculator')}>Calculate</button></div>
        <div className='BMRcontainer'><img src={bmrimg} alt='BMR' className='bmrimg'></img>
        <h2 className='bmrformula'>BMR</h2>
        <p className='bmrpara'>BMR (Basal Metabolic Rate) Your Basal Metabolic Rate (BMR) is the number of calories you burn as your body performs basic (basal) life-sustaining function.</p>
        <button className="button-2" onClick={()=>nav('/BmrCalculator')}>Calculate</button></div>
        <div className='Fatcontainer'><img src={Fatimg} alt='Fat' className='fatimg'></img>
        <h2 className='fatformula'>FAT</h2>
        <p className='fatpara'>The Body Fat Calculator can be used to estimate your total body fat based on specific measurements.Use the "Metric Units" tab if you are more comfortable with the International System of Units.</p>
        <button className="button-3">Calculate</button></div>
        <div className='ibwcontainer'><img src={ibwimg} className='ibwimg'></img>
        <h2 className='ibwformula'>IBW</h2>
        <p className='ibwpara'>The Ideal Weight Calculator computes ideal body weight (IBW) ranges based on height, gender, and age. The idea of finding the IBW using a formula has been sought after by many experts for a long time.</p>
        <button className="button-4">Calculate</button></div>
      </div>
    </div>
    </>
  )
}
