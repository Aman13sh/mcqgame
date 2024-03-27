import './App.css'
import { Question } from './components/Question'
import { FinalScore } from './components/FinalScore'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
export interface Qs{
  def:string,
  answer:string | number
  options:number[] | string[]
  }
function App() {

  const[score,setSCore]=useState(0);
  return (
    <>
    <BrowserRouter>
    <Routes >
    <Route path="/" element={<Question score={score} setScore={setSCore} />}/>
    <Route path="/finalscore" element={<FinalScore sc={score}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
