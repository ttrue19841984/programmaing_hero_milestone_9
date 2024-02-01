import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div className="text-center flex flex-col">
      <Link to="/" className="text-4xl font-bold">Home</Link>
      <Link to="/login" className="mb-10 mt-5 border-2 w-12 mx-auto rounded-lg bg-green-500">Login</Link>
    </div>
  )
}

export default Header
