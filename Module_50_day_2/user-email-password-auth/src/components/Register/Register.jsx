import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";


const Register = () => {

    const handleRegister = e =>{
        e.preventDefault();
        console.log('form submitted')
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // create user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error =>{
          console.log(error)
        })
    }

  return (
    <div>  
      <div className="mx-auto md:w-1/2">
      <h2 className="text-3xl mb-8">Please Register</h2>
        <form onSubmit={handleRegister}>
            <input className="mb-4 w-full py-2 px-4 bg-gray-100 rounded-lg" type="email" name="email" id="" placeholder="Email Address" />
            <br/>
            <input className="mb-4 w-full py-2 px-4 bg-gray-100 rounded-lg" type="password" name="password" id="" placeholder="Password" />
            <br/>
            <input className="mb-4 w-full btn btn-secondary" type="submit" value="Submit" />
        </form>
      </div>

    </div>
  )
}

export default Register
