import React, { useState } from 'react'
import Header from './Header'
import './BMRcalculator.css';
import bmrcalculatorimg from './bmrcalculatorimg.png'

export default function BMRcalculator() {
    const [gender, setGender] = useState('male');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmr, setBmr] = useState(null);

  const calculateBmr = () => {
    let bmrValue;

    if (gender === 'male') {
      bmrValue = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      bmrValue = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
    }

    setBmr(bmrValue.toFixed(2));
  };

  const handleCalculate = () => {
    if (age && weight && height) {
      calculateBmr();
    } 
    // else {
    //   alert('Please enter valid values for age, weight, and height.');
    // }
  };
  return (
    <>
    <Header/>
    <div className='bmrbox'>
      <h2 className='bmrheadname'>BMR Calculator</h2><hr className='bmrline' />
      <p className='bmrdefinition'>The Basal Metabolic Rate (BMR) Calculator estimates your basal metabolic rate—the amount of energy expended while at rest in a neutrally temperate environment, and in a post-absorptive state (meaning that the digestive system is inactive, which requires about 12 hours of fasting).</p>
      <img src={bmrcalculatorimg} className='bmrcalcimg'></img>
      <div className='calculatebox'>
      <div className='bmrgender'>
        <label>
          Gender&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select className='selectgender' value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
      </div>
      <div className='bmrage'>
        <label>
          Age&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
      </div>
      <div className='bmrweight'>
        <label>
          Weight (kg):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
      </div>
      <div className='bmrheight'>
        <label>
          Height (cm):&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
        </label>
      </div>
      <div className='bmrresult'>
        <button onClick={handleCalculate}>Calculate BMR</button>
      </div>
      {bmr !== null && (
        <div className='bmrans'>
          <h3>Your BMR is: {bmr} calories/day</h3>
        </div>
      )}
    </div>
    <div>
      <h2 className='bmrintrohead'>BMR Introduction</h2>
    </div>
    <p className='bmrintropara'>
    The basal metabolic rate (BMR) is the amount of energy needed while resting in a temperate environment
     when the digestive system is inactive. It is the equivalent of figuring out how much gas an idle car
      consumes while parked. In such a state, energy will be used only to maintain vital organs, which 
      include the heart, brain, kidneys, nervous system, intestines, liver, lungs, sex organs, muscles,
       and skin. For most people, upwards of ~70% of total energy (calories) burned each day is due to 
       upkeep. Physical activity makes up ~20% of expenditure and ~10% is used for the digestion of food, 
       also known as thermogenesis.The BMR is measured under very restrictive circumstances while awake. An 
       accurate BMR measurement requires that a person's sympathetic nervous system is inactive, which means 
       the person must be completely rested. Basal metabolism is usually the largest component of a person's 
       total caloric needs. The daily caloric need is the BMR value multiplied by a factor with a value 
       between 1.2 and 1.9, depending on activity level.
    </p>
    </div>
    </>
  )
}
