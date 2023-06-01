import React, { useState } from 'react';
import logo from '../assets/wayslogo.jpeg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleNavLinkClick = (index) => {
    setActiveIndex(index);
    setIsClicked(false);
  };

  const handleNav = () => {
    setIsClicked(!isClicked);
  };
  const BarClicked = () => {
    return (
      <div className='absolute mt-28 mx-auto pr-4 mr-5  flex-row items-end text-end w-40 bg-[#535c56]'>
        <ul>
          <li>
            <NavLink
              to="/"
              onClick={() => handleNavLinkClick(0)}
              className={activeIndex === 0 ? 'activeNav md:hidden mx-auto' : 'nonactiveNavHover md:hidden mx-auto'}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={() => handleNavLinkClick(1)}
              className={activeIndex === 1 ? 'activeNav md:hidden' : 'nonactiveNavHover md:hidden'}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => handleNavLinkClick(2)}
              className={activeIndex === 2 ? 'activeNav md:hidden' : 'nonactiveNavHover md:hidden'}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/works"
              onClick={() => handleNavLinkClick(3)}
              className={activeIndex === 3 ? 'activeNav md:hidden' : 'nonactiveNavHover md:hidden'}
            >
              Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => handleNavLinkClick(4)}
              className={activeIndex === 4 ? 'activeNav md:hidden' : 'nonactiveNavHover md:hidden'}
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
      <div className="flex  justify-between px-6  sm:px-16 py-4">
        <NavLink to="/" className="flex">
          <img src={logo} className="flex rounded-full h-12 w-12" alt="Nothing" />
          <span className=" hover:text-blue-500  text-end pt-2 text-3xl font-semibold italic text-blue-400">
            Ways
          </span>
        </NavLink>
        <ul className="flex items-center text-2xl text-slate-200 space-x-6">
          <li>
            <NavLink
              to="/"
              onClick={() => handleNavLinkClick(0)}
              className={activeIndex === 0 ? 'activeNav md:block hidden' : 'nonactiveNavHover md:block hidden'}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={() => handleNavLinkClick(1)}
              className={activeIndex === 1 ? 'activeNav md:block hidden' : 'nonactiveNavHover md:block hidden'}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => handleNavLinkClick(2)}
              className={activeIndex === 2 ? 'activeNav md:block hidden' : 'nonactiveNavHover md:block hidden'}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/works"
              onClick={() => handleNavLinkClick(3)}
              className={activeIndex === 3 ? 'activeNav md:block hidden' : 'nonactiveNavHover md:block hidden'}
            >
              Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => handleNavLinkClick(4)}
              className={activeIndex === 4 ? 'activeNav md:block hidden' : 'nonactiveNavHover md:block hidden'}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <button onClick={handleNav} className={!isClicked?'h-14 w-14 text-white md:hidden block': "hidden"}>
              <i className="fa-solid fa-bars"></i>
            </button>
          </li>
          {isClicked && <BarClicked/>}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

