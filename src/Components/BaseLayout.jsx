// Components/BaseLayout.jsx
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import RouterCarousel from './RouteCarousel'; 

const BaseLayout = () => {
  return (
    <>
    <div className='bg-[#d3d3d3] '>
    <div className='  '>
      <Navbar />
      <RouterCarousel /> {/* ⬅️ Carousel visible on every page */}
      <Outlet /> {/* This is where each page will load */}
    </div>
    </div>
    </>
  );
};

export default BaseLayout;
