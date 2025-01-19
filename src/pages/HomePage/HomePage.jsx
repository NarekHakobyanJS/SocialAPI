import React, { useEffect, useRef } from 'react'
import {useSelector } from 'react-redux'
import {Navigate} from 'react-router-dom';
import './HomePage.css'
// import { loginThunk } from '../../store/authReducer'

const HomePage = () => {
  
  const { userId } = useSelector((state) => state.auth)
  
  useEffect(() => {
    if(userId){
      localStorage.setItem('userId', userId)
    }
  }, [userId])

  if(localStorage.getItem('userId')){
    return <Navigate to={`/profile/${localStorage.getItem('userId')}`}/>
  }


  return (
    <>
      <Navigate to='/login'/>
    </>
  )
}

export default HomePage