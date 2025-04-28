import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";


function Button() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services", { state: { scrollToId: "target" } });
  };

  return (
    <div className='py-8 flex justify-center'>
      <button
        onClick={handleClick}
        className="bg-[#000080] w-[30%] sm:w-[20%] md:w-[20%] xl:w-[25%] py-2 xl:py-4 text-white text-[11px] font-bold md:text-[10px] xl:text-[20px] uppercase cursor-pointer"
      >
        Read More Services <span><FontAwesomeIcon icon={faCaretRight} /></span>
      </button>
    </div>
  );
}

export default Button;
