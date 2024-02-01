import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from "react-router-dom";

const HeroRegister = () => {
  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('')
  const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e =>{
        e.preventDefault()
        // console.log('form submited');
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.terms.checked;
        console.log(name, email, password, accepted);

        // reset error and success
        setRegisterError('');
        setSuccess('');

        if(password.length < 6){
          setRegisterError('Password should be at least 6 characters or longer');
          return;
        }
        else if(!/[A-Z]/.test(password)){
          setRegisterError('Your password should have at least one uppercase characters');
          return;
        }
        else if(!accepted){
          setRegisterError('Please accept our terma and condition');
          return;
        }


        // create user
       createUserWithEmailAndPassword(auth, email, password)
       .then(result =>{
        console.log(result.user);
        setSuccess('user Created Successfully')

        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg"
        })
        .then( () => console.log('profile upbated'))
        .catch()


        // send verification email:
        sendEmailVerification(result.user)
        .then(() => {
          alert('Please check your email and verify your account')
        })
       })
       .catch(error => {
        console.log(error);
        setRegisterError(error.message)
       })
    }

    


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <form onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Id</span>
          </label>
          <input 
          type="text" 
          placeholder="Your Name" 
          name="name" 
          required 
          className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input 
          type="email" 
          placeholder="email" 
          name="email" 
          required 
          className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
            <input 
          type={ showPassword ? "text" : "password"} 
          placeholder="password" 
          name="password" 
          required 
          className="input input-bordered" />
          <span className="absolute top-4 left-48" onClick={() => setShowPassword(!showPassword)}> 
            {
              showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }
             </span>
          </div>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
          
        </div>
        <div className="form-control mt-6">
        <div className="mb-2">
        <input type="checkbox" name="terms" id="terms" />
          <label className="ml-2 mb-4" htmlFor="terms">Accept our <a href="">Terms and Conditions</a></label>
        </div>
          <button className="btn btn-primary">Login</button>
        </div>
        </form>
        {
          registerError && <p className="text-red-700">{registerError}</p>
        }
        {
          success && <p className="text-green-600">{success}</p>
        }
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default HeroRegister
