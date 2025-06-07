import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import EmailVerificationSuccess from './components/EmailVerification/EmailVerificationSuccess'
import SignInUp from './components/SignInSignUp/SignInUp'

const All = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/verificationSuccess' element={<EmailVerificationSuccess />} />
        <Route path='/signin-signup' element={<SignInUp />} />
      </Routes>
    </div>
  )
}

export default All
