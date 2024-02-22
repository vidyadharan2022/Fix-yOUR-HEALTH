import React, { useState } from 'react'
import Header from './Header';
import './BMIcalculator.css';
import BMIgraphimg from './BMIgraphimg.jpg'

export default function BMIcalculator() {
  const [gender, setGender] = useState('male');
    const [weight, setWeight] = useState('');
     const [height, setHeight] = useState('');
     const [bmiResult, setBmiResult] = useState(null);
     const calculateBMI = () => { if (weight && height) {
        const weightInKg = parseFloat(weight);
        const heightInM = parseFloat(height) / 100;
        const bmi = weightInKg / (heightInM * heightInM);
        setBmiResult(bmi.toFixed(2)); } };
  return (
    <>
      <Header/>
      <div className='BmiContainer'>
      <h1 className='bmicalculatorname'>BMI Calculator</h1><hr className='BMIline'></hr>
      <p className='bmiintro'>The Body Mass Index (BMI) Calculator can be used to calculate BMI value and corresponding weight status while taking age into consideration. Note that the calculator also computes the Ponderal Index in addition to BMI, both of which are discussed below in detail.</p>
      <img src={BMIgraphimg} className='Bmigraphimg'></img>
      <div className='bmicalc'>
        <label className='Agelabel'> Age (18-70):&nbsp; <input type='number' className='ageinput'/></label><br />
        <label className='genderlabel'>
          Gender&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <select className='genderselection' value={gender} onChange={(e) => setGender(e.target.value)}>
            <option className='genderoptions' value="male">Male</option>
            <option className='genderoptions' value="female">Female</option>
          </select>
        </label>
      <label className='weightlabel'>Weight (kg):&nbsp;&nbsp;
      <input className='weightinput' type="number" value={weight} onChange={(e) => setWeight(e.target.value)} /></label><br />
      <label className='Heightlabel'>Height (cm):&nbsp;&nbsp;
      <input className='Heightinput' type="number" value={height} onChange={(e) => setHeight(e.target.value)} /></label><br />
      <button className='BMIbutt' onClick={calculateBMI}>Calculate BMI</button><br />
      {bmiResult && (
        <div className='Bmiresult'>
            <h2>Your BMI&nbsp;: &nbsp;&nbsp;{bmiResult}</h2>
            <p></p>
        </div>
        )}</div>
        <div>
            <h2 className='bmiintropara'>BMI Introduction</h2>
        </div>
        <p className='Bmiintpara'>
        BMI is a measurement of a person's leanness or corpulence based on their height and weight, and is intended to quantify tissue mass. It is widely used as a general indicator of whether a person has a healthy body weight for their height. Specifically, the value obtained from the calculation of BMI is used to categorize whether a person is underweight, normal weight, overweight, or obese depending on what range the value falls between. These ranges of BMI vary based on factors such as region and age, and are sometimes further divided into subcategories such as severely underweight or very severely obese. Being overweight or underweight can have significant health effects, so while BMI is an imperfect measure of healthy body weight, it is a useful indicator of whether any additional testing or action is required. Refer to the table below to see the different categories based on BMI that are used by the calculator.
        </p>
        <p className='tablepara'>This is the World Health Organization's (WHO) recommended body weight based on BMI values for adults. It is used for both men and women, age 18 or older.</p>
        <table className='table'>
            <thead className='tabbleheader'><tr><th>Classification</th><th>BMI-range</th></tr></thead>
            <tbody>
                <tr><td>Severe Thinness</td><td>{"< 16"}</td></tr>
                <tr><td>Moderate Thinness</td><td>16 - 17</td></tr>
                <tr><td>Mild Thinness</td><td>17 - 18.5</td></tr>
                <tr><td>Normal</td><td>18.5 - 25</td></tr>
                <tr><td>Overweight</td><td>25 - 30</td></tr>
                <tr><td>Obese Class I</td><td>30 - 35</td></tr>
                <tr><td>Obese Class II</td><td>35 - 40</td></tr>
                <tr><td>Obese Class III</td><td>{"> 40"}</td></tr>
            </tbody>
        </table>
        <h2 className='limitationhead'>Limitations of BMI</h2>
        <p className='Lastpara'>Although BMI is a widely used and useful indicator of healthy body weight,
         it does have its limitations. BMI is only an estimate that cannot take body composition into account.
          Due to a wide variety of body types as well as distribution of muscle, bone mass, and fat, BMI
           should be considered along with other measurements rather than being used as the sole method 
           for determining a person's healthy body weight.
<br/><br/><br/>
<b>In adults:</b><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BMI cannot be fully 
      accurate because it is a measure of excess body weight, rather than excess body fat. BMI is further influenced 
      by factors such as age, sex, ethnicity, muscle mass, body fat, and activity level, among others. For example, an 
      older person who is considered a healthy weight, but is completely inactive in their daily life may have significant 
      amounts of excess body fat even though they are not heavy. This would be considered unhealthy, while a younger 
      person with higher muscle composition of the same BMI would be considered healthy. In athletes, particularly 
      bodybuilders who would be considered overweight due to muscle being heavier than fat, it is entirely possible 
      that they are actually at a healthy weight for their body composition. Generally, according to the CDC:

      Older adults tend to have more body fat than younger adults with the same BMI.
      Women tend to have more body fat than men for an equivalent BMI.
      Muscular individuals and highly trained athletes may have higher BMIs due to large muscle mass.<br/><br/>
      <b>In children and adolescents:</b><br/>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The same factors that limit 
      the efficacy of BMI for adults can also apply to children and adolescents. Additionally, height and level of sexual 
      maturation can influence BMI and body fat among children. BMI is a better indicator of excess body fat for obese children 
      than it is for overweight children, whose BMI could be a result of increased levels of either fat or fat-free mass (all body
      components except for fat, which includes water, organs, muscle, etc.). In thin children, the difference in BMI can also be 
      due to fat-free mass.
      That being said, BMI is fairly indicative of body fat for 90-95% of the population, and can effectively
       be used along with other measures to help determine an individual's healthy body weight.</p>
        
      </div>
    </>
  )
}



























// import React, { useState } from 'react';

// const BmiCalculator = () => { const [weight, setWeight] = useState('');
// const [height, setHeight] = useState('');
//  const [bmiResult, setBmiResult] = useState(null);
//   const calculateBMI = () => { if (weight && height) {
//      const weightInKg = parseFloat(weight);
//       const heightInM = parseFloat(height) / 100;
//        // converting height to meters 
//        const bmi = weightInKg / (heightInM * heightInM);
//         setBmiResult(bmi.toFixed(2)); } };
//          return (
//              <div>
//               <h1>BMI Calculator</h1>
//                <label>Weight (kg):</label>
//                 <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
//                  <label>Height (cm):</label>
//                   <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
//                    <button onClick={calculateBMI}>Calculate BMI</button>
//                     {bmiResult && (
//         <div>
//           <h2>Your BMI:</h2>
//           <p>{bmiResult}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BMICalculator;