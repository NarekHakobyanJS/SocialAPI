import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector} from 'react-redux';
import { getAllUsersThunkCreator } from './store/usersReducer';
import { Routes, Route } from 'react-router-dom';
import Loyout from './components/Loyout/Loyout';
import {HomePage, LoginPage, ProfilePage, UserPage} from './pages'


function App() {

  const dispatch = useDispatch()
  const {page, count} = useSelector((state) => state.usersPage)

  useEffect(() => {
    dispatch(getAllUsersThunkCreator(page, count))
  }, [page])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loyout /> }>
          <Route index element={<HomePage /> }/>
          <Route path='/users' element={<UserPage /> }/>
          <Route path='/login' element={<LoginPage /> }/>
          <Route path='/profile/:id' element={<ProfilePage /> }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
