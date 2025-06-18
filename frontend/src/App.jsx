import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
import OnBoardingPage from './pages/OnBoardingPage.jsx'
import NotificationsPage from './pages/NotificationsPage.jsx'
import CallPage from './pages/CallPage.jsx'
import ChatPage from './pages/ChatPage.jsx'
import { Toaster } from 'react-hot-toast'
import { useQuery } from '@tanstack/react-query' // applying useQuery instead of useEffect
import axios from 'axios'
import { axiosInstance } from './lib/axios.js'

const App = () => {
  // axios and react-query or tanstack-query
  const { data: authData, isLoading, error } = useQuery({
    queryKey: ['authUser'],
    queryFn: async () => {
     try{

       const res = await axiosInstance.get('/auth/me')
       return res.data
      } catch(error){
        if (error.response?.status === 401) {
          return { user: null };
        }
        throw error; // Re-throw other errors
      }
    },
    retry: false, // auth check
    refetchOnWindowFocus: false,
  })

  const authUser = authData?.user

  return (
    <div className='h-screen' data-theme="night">

      <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path="/notifications"
         element={authUser ? <NotificationsPage /> : <Navigate to="/login" />} />
        <Route path="/call" element={authUser ? <CallPage /> : <Navigate to="/login" />} />
        <Route path="/chat" element={authUser ? <ChatPage /> : <Navigate to="/login" />} />
        <Route path="/onboarding" element={authUser ? <OnBoardingPage /> : <Navigate to="/login" />} />
      </Routes>

      <Toaster />
    </div>
  )
}

export default App