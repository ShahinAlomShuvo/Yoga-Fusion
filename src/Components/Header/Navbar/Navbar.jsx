import { Link, NavLink } from "react-router-dom";
import avatar from "../../../assets/Images/avatar.png";
// import logo from "../../../assets/Images/yogaLogo.jpg";

const Navbar = () => {
  const user = null;

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
      <li>
        <NavLink to={"/store"}>Store</NavLink>
      </li>
      <li>
        <NavLink to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/register"}>Register</NavLink>
      </li>
    </>
  );
  return (
    <div className='bg-base-200'>
      <nav className='navbar container mx-auto '>
        <div className='navbar-start'>
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              {navLinks}
            </ul>
          </div>
          <h2 className='text-[#45445A] text-2xl font-bold'>
            Yoga <span className='text-[#CEDB1F]'>Fusion</span>
          </h2>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1'>{navLinks}</ul>
        </div>
        <div className='navbar-end space-x-4'>
          <div className='avatar'>
            <div className='w-11 rounded-full ring ring-black ring-offset-base-100 ring-offset-2'>
              <img
                src={user && user.photoURL ? user.photoURL : avatar}
                alt='User Avatar'
              />
            </div>
          </div>
          {/* {user ? (
            <button
              
              className='btn font-semibold text-xl capitalize'
            >
              Log Out
            </button>
          ) : (
            <Link
              to={"/login"}
              className='btn font-semibold text-xl capitalize'
            >
              Login
            </Link>
          )} */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
