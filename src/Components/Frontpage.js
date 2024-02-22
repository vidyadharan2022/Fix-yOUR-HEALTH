import React from 'react'
import './Frontpage.css';
import Front1 from './Front1.jpg';
import { useNavigate } from 'react-router-dom';
import pngimg1 from './pngimg1.png'
import Fitness from './Fitness.png'

export default function Frontpage() {
    const nav = useNavigate();
  return (
    <>
    <div className='Fronthead'>
        <h1 className='website-name'>Fix yOUR HEALTH</h1>
        <nav className='frontpage-links'>
        <button className='frontsignin-button' onClick={()=>nav('/Login')}>Sign in</button>
        </nav>
    </div>
    <div className='content'> 
    <img src={pngimg1} alt='Healthy' className='pngimg1'></img>
    <div className='FrontContents'>
        <p className='Fintro'>Great! You've just taken a big step on your journey</p>
        <p className='Fbody'>Luckily we know all about managing potential pitfalls along the way because we've helped many people reach their goals. Let's get into the specifics
          so we can build your personalized plan</p>
    <ul className='Fpoint1' type='1'>
        <li>Push just a liiittle bit harder.</li>
        <li>Our growing softness, and our increasing lack of physical fitness, is a menace to our security.</li>
        <li>When diet is wrong, medicine is of no use. When diet is correct, medicine is of no need.</li>
        <li>The first wealth is health.</li>
    </ul>
        <p className='Fconclusion'>Therefore, building and managing a fit body is easy.You probably won't need to hire any trainer to maintain and manage your physique if you continuously perform the steps and keep updating it regularly.</p>
        <hr className='line'></hr>
        <img src={Fitness} alt='Healthy' className='Fitnessimg2'></img>
        <h2 className='Frontabout'>About</h2>
        <h3 className='FrontQuestion'>Why is Fitness so imporatant?</h3>
        <p className='aboutexercise1'>Whether you were once much more physically active or have never been one to exercise regularly, now is a great time to start an exercise and fitness regimen. Getting and staying in shape is just as important for seniors as it is for younger people.
            Why is exercise important for older people? Getting your heart rate up and challenging your muscles benefits virtually every system in your body and improves your physical and mental health in myriad ways. Physical activity helps maintain a healthy blood pressure, keeps harmful plaque from building up in your arteries, reduces inflammation, improves blood sugar levels, strengthens bones, and helps stave off depression. In addition, a regular exercise program can make your sex life better, lead to better quality sleep, reduce your risk of some cancers, and is linked to longer life.<br></br>
        </p>
        <p className='aboutexercise2'>
        Many older adults hesitate to get moving because they're unfamiliar with the types of exercise and fitness that are effective and safe, and aren't sure how much exercise they need to do. The good news is that any kind of movement is better than being sedentary, so there's nothing wrong with starting small and working your way up to longer workouts. Your goal should be no less than 150 minutes of moderate intensity activity per week, but if you can't start at that level, work up to it (and then past it). While there are many dedicated forms of exercise and fitness for adults, you also want to stay physically active throughout the day by taking the stairs, doing yard work, and playing with your grandkids.
        When it comes to exercise and fitness for seniors, most can begin without consulting a doctor—but there are exceptions. If you have a major health condition like diabetes, high blood pressure, heart or lung disease, osteoprosis or a neurological disease, definitely talk to your doctor first. People with mobility issues such as poor balance or arthritis should also get advice from their doctor.
        </p>
        <button className='getstartedbutton' onClick={()=>nav('/Login')}>Let's Get Started</button>
    </div>
    </div>
    </>
  )
}
