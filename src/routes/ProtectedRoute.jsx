import React, { useContext } from 'react'
import { MyStore } from '../context/MyContext'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {
    const { currentUser} = useContext(MyStore)
    if (!currentUser) {
      return  <Navigate to="/login" replace />
        
    }
  return <Outlet/>
}

export default ProtectedRoute