import React, { useEffect, useRef } from 'react'
import { Formik, Form, Field } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import {Navigate} from 'react-router-dom';
import './pages.css'
import { loginThunk } from '../store/authReducer'

const HomePage = () => {
  const dispatch = useDispatch()
  const { userId, errorMessage, userSession } = useSelector((state) => state.auth)
  
  useEffect(() => {
    if(userId){
      localStorage.setItem('userId', userId)
    }
  }, [userId])

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef?.current?.focus()
  }, [])


  const authorization = ({ email, password }) => {
    dispatch(loginThunk(email, password))
  }

  if(localStorage.getItem('userId')){
    return <Navigate to={`/profile/${localStorage.getItem('userId')}`}/>
  }


  return (
    <div className='login-page'>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={(value) => authorization(value)}
      >
        <Form className='form'>
          <Field className='login-input' name='email' placeholder='email' ref={inputRef} />
          {errorMessage && <p>{errorMessage[0].error}</p>}
          <Field className='login-input' name='password' placeholder='password' />
          {errorMessage && <p>{errorMessage[1].error}</p>}
          <button className='login-button' type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  )
}

export default HomePage