import { useState } from 'react';
import Logo from "../assets/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMagnifyingGlass, faEnvelope, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className='bg-[#d3d3d3] w-full overflow-hidden'>

        {/* Top Nav Section */}
        <div className='flex relative items-center max-w-full overflow-hidden py-2 pt-8 pb-6'>
          {/* Mobile Menu Toggle Button */}
          <div className='md:hidden z-50 px-4'>
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} className="text-white text-2xl" />
            </button>
          </div>

          {/* Logo + Brand */}
          <div className="flex justify-center items-center w-full px-4 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <img src={Logo} alt="" className='h-full w-[80px] max-w-full' />
            <h1 className='text-[#000080] text-sm sm:text-base md:text-xl lg:text-4xl  pl-2 font-medium uppercase' id='brand-title'>
              Design Orient Architects
            </h1>
          </div>
        </div>

        {/* Desktop Icons + Links */}
        <div className="flex justify-between items-center  md:py-4 px-3  ">
  {/* Social Icons - only visible on md and up */}
  <div className="hidden md:flex items-center gap-4">
    <FontAwesomeIcon icon={faFacebook} className="text-white text-xl" />
    <FontAwesomeIcon icon={faInstagram} className="text-white text-xl" />
    <FontAwesomeIcon icon={faTwitter} className="text-white text-xl" />
    <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" />
  </div>

  {/* Navigation Menu - only visible on md and up */}
  <div className="hidden md:flex items-center ">
    <ul className="flex gap-6 font-normal uppercase pr-12">
      {['/', '/about', '/project', '/services',  '/contact'].map((path, idx) => {
        const names = ['Home', 'About Us', 'Projects', 'Services', 'Contact Us'];
        return (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "text-[#000080] font-semibold" : "text-white"
              }
            >
              {names[idx]}
            </NavLink>
          </li>
        );
      })}
    </ul>
  </div>

  {/* Right-side Icons - only visible on md and up */}
  <div className="hidden md:flex items-center gap-4">
   
    <a href="mailto:Designerorients@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" /></a>
  </div>
</div>


        {/* Mobile Sidebar Menu */}
        <div className={`fixed top-0 left-0 h-full w-64 bg-[#1a1a1a] z-40 p-6 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
          <ul className='flex flex-col gap-4 pt-14 text-white uppercase'>
            {['/', '/about', '/project', '/services', '/contact'].map((path, idx) => {
              const names = ['Home', 'About Us', 'Projects', 'Services', 'Contact Us'];
              return (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive ? 'text-[#000080] font-semibold' : 'text-white'
                    }
                    onClick={() => setMenuOpen(false)}
                  >
                    {names[idx]}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className='flex justify-start gap-4 pt-6'>
            <FontAwesomeIcon icon={faFacebook} className="text-white text-xl" />
            <FontAwesomeIcon icon={faInstagram} className="text-white text-xl" />
            <FontAwesomeIcon icon={faTwitter} className="text-white text-xl" />
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" />
            
           <a href="mailto:Designerorients@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" /></a>
          </div>
        </div>

      </div>
    </>
  );
}

export default Navbar;
