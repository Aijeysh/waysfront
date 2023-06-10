import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'


const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevLoginData) => ({
      ...prevLoginData,
      [name]: value
    }));
  };





  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('https://ways-service.onrender.com/api/users/auth', loginData);
      // Handle success or perform any other actions
      navigate('/adminedit');
      console.log("logged In");
      
    } catch (error) {
      // Handle error or perform any other actions
      console.error('Error Logging In:', error);
    }
  }



  return (
    <div>
      <div className="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0">
        <NavLink to="/" className="flex items-center mb-6 text-2xl font-semibold text-white">
          <img className="w-8 h-8 mr-2" src={process.env.PUBLIC_URL + '/wayslogo.jpeg'} alt="logo" />
          Ways Private
        </NavLink>
        <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white w-fit mx-auto">
              Sign in Aashant
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                <input
                  name='email'
                  id='email'
                  type='email'
                  onChange={handleChange}
                  value={loginData.email}
                  className={`sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 `}
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                <input
                  name='password'
                  id='password'
                  type='password'
                  onChange={handleChange}
                  value={loginData.password}
                  className={`border sm:text-sm rounded-lg block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500`}
                  placeholder="••••••••"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full rounded-lg px-5 py-2.5 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 text-slate-50"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
