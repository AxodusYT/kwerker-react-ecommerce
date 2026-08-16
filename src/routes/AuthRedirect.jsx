import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'
import { Navigate, Outlet } from 'react-router'

const AuthRedirect = () => {
    const{currentUser} = useContext(MyStore)

    if(currentUser){
        return <Navigate to="/" replace />
    }
  return <Outlet/>}

export default AuthRedirect