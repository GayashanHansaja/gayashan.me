import { FaArrowDown } from "react-icons/fa6";

const ScrollArrow = ()=>{

    const scrollToNext = () => {
        const nextSection = document.getElementById("next-section");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
    
}
   

    return (
        <button 
            onClick={scrollToNext}
            className="absolute bottom-15 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-yellow-400 w-15 h-15 flex justify-center items-center square shadow-lg hover:bg-white transition">
            <FaArrowDown className=' text-black'/>
        </button>
    );
};
export default ScrollArrow;