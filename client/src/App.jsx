import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/login'
import ProtectedRoutes from './components/protectedRoutes'
import ProtectedLayout from './components/protectedlayout'
import Dashboard from './pages/dashboard'
import Sessions from './pages/Sessions'
import Pricing from './pages/pricing'
import MeetingRoom from './pages/meetingroom'

const App = () => {
  return (
   <>
   <Toaster />
   <Routes>
    {/*public Routes*/}
    <Route path='/login' element={<Login mode="login" />} />
    <Route path='/register' element={<Login mode="register" />} />

    {/*private Routes*/}
    <Route element={<ProtectedRoutes />}>
      <Route element={<ProtectedLayout />}>
         <Route path='/dashboard' element={<Dashboard />} />
         <Route path='/sessions' element={<Sessions />} />
         <Route path='/pricing' element={<Pricing />} />
      </Route>

      <Route path='/meeting/:meetingId' element={<MeetingRoom/>}/>
    </Route>

    {/* other routes */}
    <Route path='*' element={<Navigate to='/dashboard' replace/>} />
   </Routes>
   </>
  )
}

export default App
