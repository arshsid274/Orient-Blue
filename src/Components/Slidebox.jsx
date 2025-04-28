function SlideBox({ title, subtitle, description }) {
  return (
    <div className=" flex absolute inset-0 items-center justify-center bg-opacity-20">
      <div className="text-white max-w-xs sm:max-w-sm md:max-w-md text-center px-4 py-4 bg-[#d3d3d3]   text-sm sm:text-base">
        {title && (
          <h2 className="text-base sm:text-xl md:text-xl lg:text-3xl font-bold text-[white] mb-2">
            {title}
          </h2>
        )}
        {subtitle && (
          <h3 className="text-sm sm:text-base md:text-2xl lg:text-2xl font-medium text-[#000080] mb-4">
            {subtitle}
          </h3>
        )}
        <p className="hidden md:block text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed sm:line-clamp-3 md:line-clamp-none">
          {description}
        </p>
      </div>
    </div>
  );
}

export default SlideBox;
