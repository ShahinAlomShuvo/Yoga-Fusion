import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GrGoogle, GrGithub } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, updateUserProfile, googleSignIn, githubSignIn } =
    useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // toggle show password
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const registrationHandler = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const imageUrl = form.get("imageUrl");
    const email = form.get("email");
    const password = form.get("password");

    // validation
    const passwordPattern =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).+$/;
    if (password.length < 6) {
      return toast.error("Password must have 6 character");
    } else if (!passwordPattern.test(password)) {
      return toast.error("You must have an uppercase & a special character");
    }

    createUser(email, password)
      .then((res) => {
        updateUserProfile(name, imageUrl);
        navigate("/");
        toast.success("Registration Successful");
        console.log(res.user);
      })
      .catch((err) => {
        console.log(err);
        return toast.error(err.message);
      });
  };

  const socialSignIn = (socialPlatform) => {
    socialPlatform()
      .then((res) => {
        toast.success("Registration Successful");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        return toast.error(err.code);
      });
  };

  return (
    <div>
      <div className='flex justify-center items-center py-20 bg-gray-800'>
        <div className='w-full max-w-sm md:max-w-xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
          <form className='space-y-6' onSubmit={registrationHandler}>
            <h5 className='text-xl font-medium text-gray-900 dark:text-white'>
              Register an account
            </h5>
            <div>
              <label
                htmlFor='name'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                placeholder='John Doe'
                required
              />
            </div>
            <div>
              <label
                htmlFor='imageUrl'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Image URL
              </label>
              <input
                type='text'
                name='imageUrl'
                id='imageUrl'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white'
                placeholder='https://example.com/avatar.jpg'
                required
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
              >
                Your Email
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
                Your Password
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
                  Agree with terms and condition?
                </label>
              </div>
            </div>
            <button
              type='submit'
              className='w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              Register your account
            </button>
            <div className='text-sm font-medium text-gray-500 dark:text-gray-300'>
              Already registered?{" "}
              <Link
                to={"/login"}
                className='text-blue-700 hover:underline dark:text-blue-500'
              >
                Sign in
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
    </div>
  );
};

export default Register;
