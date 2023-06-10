import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleNavLinkClick = () => {
    setIsClicked(false);
    window.scrollTo(0, 0);
  };

  const handleNav = () => {
    setIsClicked(!isClicked);
  };
  const BarClicked = () => {
    return (
      <div className='absolute pr-4 right-0 flex-row-reverse text-slate-200 text-xl  w-52 bg-[#242526]'>
        <ul >
          <li className='w-[20%] mx-auto p-2'>
            <NavLink
              to="/home"
              onClick={() => handleNavLinkClick()}
              className={({ isActive }) => (isActive ? 'activeNav md:hidden mx-auto' : 'nonactiveNavHover md:hidden mx-auto')}
            >
              Home
            </NavLink>
          </li>
          <li className='w-[20%] mx-auto p-2'>
            <NavLink
              to="/services"
              onClick={() => handleNavLinkClick()}
              className={({ isActive }) => (isActive ? 'activeNav md:hidden mx-auto' : 'nonactiveNavHover md:hidden mx-auto')}
            >
              Services
            </NavLink>
          </li>
          <li className='w-[20%] mx-auto p-2'>
            <NavLink
              to="/about"
              onClick={() => handleNavLinkClick()}
              className={({ isActive }) => (isActive ? 'activeNav md:hidden mx-auto' : 'nonactiveNavHover md:hidden mx-auto')}
            >
              About
            </NavLink>
          </li>
          <li className='w-[20%] mx-auto p-2'>
            <NavLink
              to="/works"
              onClick={() => handleNavLinkClick()}
              className={({ isActive }) => (isActive ? 'activeNav md:hidden mx-auto' : 'nonactiveNavHover md:hidden mx-auto')}
            >
              Works
            </NavLink>
          </li>
          <li className='w-[20%] mx-auto p-2'>
            <NavLink
              to="/contact"
              onClick={() => handleNavLinkClick()}
              className={({ isActive }) => (isActive ? 'activeNav md:hidden mx-auto' : 'nonactiveNavHover md:hidden mx-auto')}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    );
  };


  return (
    <nav className="fixed w-full z-10 bg-[#242526]">
      <div className="flex  justify-between px-2  sm:px-16 py-4">
        <NavLink to="/" className="flex" onClick={() => handleNavLinkClick()}>
          <img src={process.env.PUBLIC_URL + '/wayslogo.jpeg'} className="flex rounded-full h-12 w-12" alt="Nothing" />
          <span className=" hover:text-blue-500  text-end pt-2 text-3xl font-semibold italic text-blue-400">
            Ways
          </span>
        </NavLink>
        <ul className="flex items-center text-2xl text-slate-200 space-x-6">
          <li>
            <NavLink
              to="/home"
              onClick={() => handleNavLinkClick()}
              className={({ isActive }) => (isActive ? 'activeNav md:block hiddeno' : 'nonactiveNavHover md:block hidden')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={() => handleNavLinkClick()}
              className={({ isActive }) => (isActive ? 'activeNav md:block hiddeno' : 'nonactiveNavHover md:block hidden')}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => handleNavLinkClick()}
              className={({ isActive }) => (isActive ? 'activeNav md:block hiddeno' : 'nonactiveNavHover md:block hidden')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/works"
              onClick={() => handleNavLinkClick()}
              className={({ isActive }) => (isActive ? 'activeNav md:block hiddeno' : 'nonactiveNavHover md:block hidden')}
            >
              Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => handleNavLinkClick()}
              className={({ isActive }) => (isActive ? 'activeNav md:block hiddeno' : 'nonactiveNavHover md:block hidden')}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <button onClick={handleNav} className={'h-14 w-14 text-white md:hidden block'}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </li>
        </ul>
      </div>
      {isClicked && <BarClicked />}
    </nav>
  );
};

export default Navbar;

