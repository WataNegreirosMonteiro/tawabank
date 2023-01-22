import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Img_sponsored from '../assets/image_sponsored.jpg'
import CardLayout from '../layouts/CardLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';

export default function IndexRoutes() {
  const auth = false

  return auth === false ? (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element = { <CardLayout Page={Login} Content={Img_sponsored}/> }/>
        <Route path='*' element = { <Navigate to='/login' /> } replace/>
      </Routes>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = { <Home /> }/>
        <Route path='*' element = { <Navigate to='/' /> } replace/>
      </Routes>
    </BrowserRouter>
  )
};
