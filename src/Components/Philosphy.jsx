import PhilosphyImg from "../assets/Slider3.jpg";

function Philosphy() {
  return (
    <div className="relative bg-[#8f8e8e] text-white lg:px-12 xl:px-[120px] py-16 grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden">
      
      {/* Text Section */}
      <div className="z-10 font-medium px-5">
        <h1 className="text-2xl font-bold mb-6">Our Philosophy</h1>
        <p className="text-sm leading-relaxed max-w-xl">
          We believe that great architecture emerges from a deep understanding
          of our clients' aspirations, coupled with a respect for the
          environment and community. Our designs are characterized by their
          innovative use of space, natural light, and sustainable materials,
          creating environments that are both beautiful and functional.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-end items-center md:pr-14 ">
        {/* White box above the image */}
        <div className="hidden lg:block absolute -top-14 -right-2 lg:w-[62%] xl:w-[64%] 2xl:w-[42%]  h-64 bg-[#252525] z-10 " />

        {/* Image */}
        <img
          src={PhilosphyImg}
          alt="Interior"
          className="w-[400px] h-auto object-cover relative z-20 py-8 lg:py-0 "
        />
      </div>
    </div>
  );
}

export default Philosphy;
