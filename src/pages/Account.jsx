import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Account = () => {
  const { user } = UserAuth()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (user != null) {
      navigate('/account')
    }
    else {
      navigate('/')
    }
  }, [user])
  return (
    <div>
      <h1>Account</h1>
    </div>
  )
}

export default Account