/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firbase.init";
const Login = () => {
    const [user, setUser] = useState({});
    const auth = getAuth(app);
    // console.log(app)
    const googleProvide = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvide)
        .then((result) => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            setUser(loggedInUser)
        })
        .catch((error) => {
            console.log('error', error.message)
        })
    }

    const handleSignOut = () => {
        signOut(auth)
        .then(result =>{
            console.log(result);
            setUser(null);
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
        .then( result => {
          const loggedUser = result.user;
          console.log(loggedUser);
          setUser(loggedUser)
        })
        .catch(error => {
          console.log(error)
        })
    }



  return (
    
    <div className="flex flex-col justify-center items-center text-center">

    {/* user?logout:sign in */}


      {
        user?
        <button onClick={handleSignOut} className="btn btn-primary">Sign Out</button>
        :
        <div>
          <button onClick={handleGoogleSignIn} className="btn btn-secondary">Google login</button>
          <button onClick={handleGithubSignIn} className="btn btn-warning">Github Login</button>
        </div>
      }
      {
        user && <div>
        <h3>User: {user?.displayName}</h3>
        <p>Email: {user.email}</p>
        <img className="mx-auto" src={user.photoURL} alt="" />
      </div>
      }
    </div>

  )
}

export default Login
