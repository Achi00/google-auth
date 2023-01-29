import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
  const { user, logOut, googleSignIn } = UserAuth()
  const navigate = useNavigate()

  const handleSignOut = async() => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  const handleGoogleSignin = async () => {
    try {
      await googleSignIn()
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div>  
      <Link to="/">Home</Link> 
      {user ? <Link to="/account">Account</Link> : null}
 
      {user ? <button onClick={handleSignOut}>Sign Out</button> : <GoogleButton onClick={handleGoogleSignin}/>}
      {user ? <p>{user.displayName}</p> : null}
      {user ? <img style={{borderRadius: '50%'}} src={user.photoURL} alt='icon'/> : null}
    </div>
  )
}

export default Navbar