import React from 'react'
import Header from './Header';
import './BarbellBenchPress.css';
import bbpgif from './bbpgif.gif';

export default function BarbellBenchPress() {
  return (
    <>
      <Header/>
      <div className='bbpdef'>
      <h2 className='Headerexer'>Barbell Bench Press Overview</h2>
      
      <div className='imgandoverview'><img src={bbpgif}></img>
      <p className='exeroverview'> The barbell bench press is a classic exercise popular among all weight lifting circles. From bodybuilders to powerlifters, the bench press is a staple chest exercise in nearly every workout program.
          For powerlifters, Increasing the number of sets of each exercise, even while only performing 10 reps, can build muscle because you will be pushing your muscles to fatigue because they are under tension longer. Don't stop at 3 sets but complete 4 or 6 or 8. The extra sets are what build strength and muscle growth.</p>
      </div>
      </div>
    </>
  )
}
