import React, { useContext } from 'react';
import { AuthProvider } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

function AuthReq({children}) {
    const {user} = useContext(AuthProvider)
    const location = useLocation()

  return (
    user ? children : <Navigate to='/loginpage'  state={{from:location}}/>
  );
}

export default AuthReq;
