import React, { useEffect, useRef } from 'react'
import {useSelector } from 'react-redux'
import {Navigate} from 'react-router-dom';
import { useAuth } from '../../hooks';

import './HomePage.css'

const HomePage = () => {
  
  const { userId } = useSelector((state) => state.auth)
  

  let bool = useAuth(userId)
  
  if(bool){
    return <Navigate to={`/profile/${localStorage.getItem('userId')}`}/>
}

  return (
    <>
      <Navigate to='/login'/>
    </>
  )
}

export default HomePage