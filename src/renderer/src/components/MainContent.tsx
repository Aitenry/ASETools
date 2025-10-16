import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import Notes from '../views/Notes'
import Knowledge from '../views/Knowledge'
import Planner from '../views/Planner'
import Tools from '../views/Tools'
import Weather from '../views/Weather'
import Music from '../views/Music'

const MainContent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/knowledge" element={<Knowledge />} />
      <Route path="/planner" element={<Planner />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/music" element={<Music />} />
    </Routes>
  )
}

export default MainContent
