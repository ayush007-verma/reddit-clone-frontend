// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Header from './components/Header'
import Main from './components/Main'
import Register from './Auth/Register'
import Login from './Auth/Login'
import Home from './components/Home/Home'
import CreatePost from './components/Post/CreatePost'
import PostId from './components/Post/PostId'
import CommentsPostId from './components/Post/CommentsPostId'
import Search from './components/Post/Search'


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<><Header showHeaderOptions={false}/><Login/></>}/>
          <Route path="/register" element={<><Header showHeaderOptions={false}/><Register/></>}/>
          <Route path="/submit" element={<><Header showHeaderOptions={false}/><CreatePost/></>}/>
          <Route path="/posts/:postId" element={<><Header showHeaderOptions={false}/><PostId/><CommentsPostId/></>}/>
          <Route path="/search" element={<><Header showHeaderOptions={false}/><Search/></>}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
