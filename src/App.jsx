import { useState } from 'react'
import { SignUp } from './components/signup/signup'
import { Routes, Route } from 'react-router'
import { Home } from './components/home/Home'

function App() {

  return (
    <>
        <Routes>
          <Route path={'/'} element={<SignUp />}/>
          <Route path={'/home'} element={<Home />}/>
        </Routes>
    </>
  )
}

export default App
