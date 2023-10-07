import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GrGithub, GrGoogle } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser, googleSignIn, githubSignIn } = useAuth();

  const navigate = useNavigate();

  // toggle password
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const loginHandler = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("Login Successful");
      })
      .catch((error) => {
        return toast.error(error.message);
      });
  };

  const socialSignIn = (socialPlatform) => {
    socialPlatform()
      .then((res) => {
        toast.success("Registration Successful");
      })
      .catch((err) => {
        console.log(err.message);
        return toast.error(err.code);
      });
  };
  return (
    <div className='flex justify-center items-center py-20 bg-gray-800'>
      <div className='w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
        <form className='space-y-6' onSubmit={loginHandler}>
          <h5 className='text-xl font-medium text-gray-900 dark:text-white'>
            Sign in to our platform
          </h5>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Your email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
              placeholder='name@company.com'
              required
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Your password
            </label>
            <div className='relative'>
              <input
                type={showPassword ? "text" : "password"}
                name='password'
                id='password'
                placeholder='••••••••'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                required
              />
              <button
                type='button'
                className='absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none'
                onClick={togglePassword}
              >
                {showPassword ? (
                  <FaEyeSlash className='text-gray-400' />
                ) : (
                  <FaEye className='text-gray-400' />
                )}
              </button>
            </div>
          </div>
          <div className='flex items-start'>
            <div className='flex items-start'>
              <div className='flex items-center h-5'>
                <input
                  id='remember'
                  type='checkbox'
                  value=''
                  className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800'
                  required
                />
              </div>
              <label
                htmlFor='remember'
                className='ml-2 text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Remember me
              </label>
            </div>
            <a
              href='#'
              className='ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500'
            >
              Lost Password?
            </a>
          </div>
          <button
            type='submit'
            className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Login to your account
          </button>
          <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
            Not registered?{" "}
            <Link
              to={"/register"}
              className='text-blue-700 hover:underline dark:text-blue-500'
            >
              Create account
            </Link>
          </div>
        </form>
        {/* Sign in with Google */}
        <div className='mt-4'>
          <button
            onClick={() => socialSignIn(googleSignIn)}
            type='button'
            className='w-full flex items-center justify-center text-white px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-gray-600 dark:focus:ring-blue-800'
          >
            <GrGoogle className='mr-2' />
            Sign in with Google
          </button>
        </div>

        {/* Sign in with GitHub */}
        <div className='mt-2'>
          <button
            onClick={() => socialSignIn(githubSignIn)}
            type='button'
            className='w-full text-white flex items-center justify-center px-5 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-gray-600 dark:focus:ring-blue-800'
          >
            <GrGithub className='mr-2' />
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
