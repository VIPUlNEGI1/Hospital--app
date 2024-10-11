import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import { Home } from './pages/Home';
import {Dactors, Doctors} from './pages/Doctors'
import { Login } from './pages/Login';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { MyProfile } from './pages/MyProfile';
import MyAppomients from './pages/MyAppomients';
import Apointment from './Apointment';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
function App() {
  return (
    <div className=" mx-4 sm:mx-[10%]">
      
      <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Doctors' element={<Doctors/>}/>
    <Route path='/Doctors/:speciality' element={<Doctors/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/my-profile' element={<MyProfile/>}/>
    <Route path='/my-appointment' element={<MyAppomients/>}/>
    <Route path='/appointment/:docId' element={<Apointment/>}/>
  </Routes>
  <Footer/>
    </div>
  );
}

export default App;
