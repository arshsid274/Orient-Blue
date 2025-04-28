import Architect from "../assets/Architect.jpg"

function PrincipalArcitect() {
  return (

    <>

    <div className=" flex flex-col lg:flex-row gap-10 my-24 md:px-16 ">
        <div className="w-full max-w-[400px] aspect-square mx-auto"><img src={Architect} alt="Principal Arcitect" className=" w-full h-full object-cover rounded"/></div>
        <div className="flex flex-col lg:flex-row gap-4 lg:px-4">
        <div>
            <div className="bg-[#8f8e8e] border-t border-white  py-6 w-full sm:w-[80%] lg:w-[40%] px-4 mx-auto lg:mx-0 text-center lg:text-left"><h2 className="text-white ">Ar.Praveen</h2>
                <h3 className="text-[#000080]">Principal Architect</h3>
            
            </div>
            <div className="w-[400px] px-4 lg:px-0 py-5">
                <p className="text-white">Once again, the design concept explored columnless, horizontally extended structural forms and tectonic expressiveness. The two newly built exhibition halls adopt the columnless long-span cast-in-situ concrete structure. One is the arched curved beam, which is diffused from the adjacent two arches with the natural skylight. The other is the concrete multi-ribbed beam to convey the characteristics of the material itself.</p>
            </div>
            </div>
            <div  className="w-[400px] px-4 lg:py-29">
            <p className="text-white">The exhibition will be accessible in its entirety until June 2023, free of charge and in an unlimited way. By taking up the curatorial process put in place during the exhibition co-presented in Seoul in 2020 at the Hyundai Motorstudio with Ms. DooEun Choi, also guest curator of our 5th Biennale, we have demonstrated that it is possible to give the public access to high quality.</p>
            </div>

        </div>
       

    </div>
    
    </>
  );
}

export default PrincipalArcitect;