import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import UserCard from '../components/UserCard/UserCard';
import './pages.css'
import { changePageAC } from '../store/usersReducer';
import Loading from '../components/Loading/Loading';

const UsersPage = () => {
  const dispatch = useDispatch()
  const { users, totalCount, page, count, isFetching } = useSelector((state) => state.usersPage)

  const pagesCount = Math.ceil(totalCount / count)

  const pages = []

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  const changePage = (p) => {
    dispatch(changePageAC(p))
  }
  return (
    <div className='usersPage'>
      <div className='pagination-block'>
        {
          pages.map((p) => {
            return <button
              onClick={() => changePage(p)}
              key={p}>{p}</button>
          })
        }
      </div>
      <div className='usersCard'>
        {
          isFetching
            ?
            <Loading />
            :
            users.map((user) => {
              return <UserCard user={user} key={user.id} />
            })
        }
      </div>
    </div>
  )
}

export default UsersPage