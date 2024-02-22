import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Frontpage from './Components/Frontpage';
import Loginform from './Components/Loginform';
import Registerform from './Components/Registerform';
import Progress from './Components/Progress';
import Calculators from './Components/Calculators';
import Profile from './Components/Profile';
import BMIcalculator from './Components/BMIcalculator';
import BMRcalculator from './Components/BMRcalculator';
import Exercise from './Components/Exercise';
import Chest from './Components/Chest';
import BarbellBenchPress from './Components/BarbellBenchPress';
import Nutritips from './Components/Nutritips';
import Examplr from './Components/Adminuserinfo';
import Adminuserinfo from './Components/Adminuserinfo';
import Adminexercise from './Components/Adminexercise';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Frontpage/>}></Route>
      <Route path='/Login' element={<Loginform/>}></Route>
      <Route path='/Register' element={<Registerform/>}></Route>
      <Route path='/BmiCalculator' element={<BMIcalculator/>}></Route>
      <Route path='/Progress' element={<Progress/>}></Route>
      <Route path='/Calculators' element={<Calculators/>}></Route>
      <Route path='/Profile' element={<Profile/>}></Route>
      <Route path='/BmrCalculator' element={<BMRcalculator/>}></Route>
      <Route path='/Exercise' element={<Exercise/>}></Route>
      <Route path='/Nutritips' element={<Nutritips/>}></Route>
      <Route path='/Chest' element={<Chest/>}></Route>
      <Route path='/Chest/BarbellBenchPress' element={<BarbellBenchPress/>}></Route>
      <Route path='/Admininfo' element={<Adminuserinfo/>}></Route>
      <Route path='/AdminExercised' element={<Adminexercise/>}></Route>
    </Routes>
    </>
  );
}

export default App;
