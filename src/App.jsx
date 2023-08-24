import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"
import Creations from "./routes/Creations"
import "./styles/index.css"

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about-me" element={<About/>}/>
        <Route path="/my-creations" element={<Creations/>}/>
      </Routes> */}
      <Home/>
    </div>       
  )
}

export default App
