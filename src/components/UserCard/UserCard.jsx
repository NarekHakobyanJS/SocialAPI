import React from 'react'
import userImg from '../../assets/user.png'
import './userCard.css'
import { NavLink } from 'react-router-dom'

const UserCard = ({user}) => {

  return (
    <div>
      <NavLink to={`/profile/${user.id}`} className='userCard'>
        <h3>{user.name}</h3>
        <b>{user.id}</b>
        <img src={user.photos.large === null ?  userImg : user.photos.large} />
        <button>follow</button>
      </NavLink>
    </div>
  )
}

export default UserCard