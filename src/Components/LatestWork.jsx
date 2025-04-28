import LatestInterior from '../assets/Latest_Interior.jpg';
import LatestCommercial from '../assets/Latest_Commercial.jpg';
import LatestHospitality from '../assets/Latest_Hospitality.jpg';
import LatestVilla from '../assets/Latest_villa2.jpg';
import LatestLandscaping from '../assets/Latest_Landscaping.jpg';
import LatestResidencial from '../assets/Latest_Residential.jpg';
function LatestWork() {
    return (
      <>
      <div>
      <h2 className="uppercase text-white text-xl md:text-3xl text-center py-12 ">See Our <span className="text-[#000080]">Latest Work </span></h2>

      <div className="grid grid-cols-3 md:grid-cols-4 text-white">
      <div className="grid grid-rows-2 ">
        <div style={{ backgroundImage: `url(${LatestInterior})` }} className="bg-cover bg-center h-64 flex items-end  ">
        <p className='font-bold text-lg backdrop-brightness-50 w-[100%] px-2'>Interior Design</p></div>
        <div style={{ backgroundImage: `url(${LatestCommercial})` }} className="bg-cover bg-center h-64 flex items-end "> <p className='font-bold text-lg backdrop-brightness-50 w-[100%] px-2'>Commercial Building Design</p></div>
       
      </div>
      <div style={{ backgroundImage: `url(${LatestHospitality})` }} className="bg-cover bg-center   flex items-end " > <p className='font-bold text-lg backdrop-brightness-50 w-[100%] px-2'>Hospitality Design</p></div>
     
      <div className="grid grid-rows-2">
        <div style={{ backgroundImage: `url(${LatestVilla})` }} className="bg-cover bg-center h-64 flex items-end " > <p className='font-bold text-lg backdrop-brightness-50 w-[100%] px-2'>Luxurious Villa</p></div>
       
        <div style={{ backgroundImage: `url(${LatestLandscaping})` }} className="bg-cover bg-center h-64 flex items-end " > <p className='font-bold text-lg backdrop-brightness-50 w-[100%] px-2'>Landscaping Projects</p></div>
       
      </div>
      <div style={{ backgroundImage: `url(${LatestResidencial})` }} className="hidden  bg-cover bg-center  md:flex items-end " > <p className='font-bold text-lg backdrop-brightness-50 w-[100%] px-2'>Residential  Project</p></div>
     
      </div>
      </div>
      </>
     
    );
  }
  
  export default LatestWork;
  