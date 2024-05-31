import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './layout/Navbar'
import Home from './pages/Home';
import AverageAgeByDiscipline from './pages/AverageAgeByDiscipline';
import GenderPerformanceByCountry from './pages/GenderPerformanceByCountry';
import HostPerformance from './pages/HostPerformance';
import MedalByCoutries from './pages/MedalByCountries';
import MedalByCountriesByYear from './pages/MedalByCountriesByYear';
import MedalByDisciplineByCountry from './pages/MedalByDisciplineByCountry';
import Top10Athletes from './pages/Top10Athletes';
import Prediction from './pages/Prediction';
function App() {


  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Prediction" element={<Prediction />} />
        <Route path="/AverageAgeByDiscipline" element={<AverageAgeByDiscipline/>} />
        <Route path="/GenderPerformanceByCountry" element={<GenderPerformanceByCountry/>} />
        <Route path="/HostPerformance" element={<HostPerformance/>} />
        <Route path="/MedalByCoutries" element={<MedalByCoutries/>} />
        <Route path="/MedalByCountriesByYear" element={<MedalByCountriesByYear/>} />
        <Route path="/MedalByDisciplineByCountry" element={<MedalByDisciplineByCountry/>} />
        <Route path="/Top10Athletes" element={<Top10Athletes/>} />
      </Routes>
    </div>
  )
}

export default App
