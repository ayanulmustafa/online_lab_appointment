import {React} from 'react';
import {
  BrowserRouter,
  Routes,
  Route} from "react-router-dom";

import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import About from './components/About';
import Book from './components/Book';
import { NoteState } from './Context/Context';
import MyTest from './components/MyTest';
import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';



function App() {
  
  return (
    <>
<NoteState>
    <BrowserRouter>
    <Navbar/>
  
      <Routes>
        <Route exact path="/" element={ <Home />} />
        <Route exact path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route exact path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
        <Route exact path="/about" element={<About />} />
        <Route exact path='/book' element={<ProtectedRoute><Book/></ProtectedRoute>}/>
        <Route exact path='/mytest' element={<ProtectedRoute><MyTest/></ProtectedRoute>}/>

      </Routes>
      
    </BrowserRouter>
    </NoteState>
    </>
  )
};

export default App;