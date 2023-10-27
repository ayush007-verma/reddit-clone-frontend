// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Header from './components/Header'
import Main from './components/Main'
import Register from './Auth/Register'
import Login from './Auth/Login'
import Home from './components/Home/Home'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<><Header showHeaderOptions={false}/><Login/></>}/>
          <Route path="/register" element={<><Header showHeaderOptions={false}/><Register/></>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
