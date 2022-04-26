import { useRef , useContext , useState , useCallback } from "react"
import { ScrollContext } from "../utils/scroll-observer"
import "./Styles/Homepage.css"
import BgImage from "../Assests/BG,Image.jpg"
import DownArrow from "../Assests/downArrow.png"

const Homepage: React.FC = () => {
	const refCont =  useRef<HTMLDivElement>(null)
	const {scrollY} = useContext(ScrollContext)

	let progress = 0;

	const {current: elContainer} = refCont
	if(elContainer){
		progress = Math.min(0.5 , scrollY / elContainer.clientHeight)
	}
  return (
	  <>
	 <section  style={{ transform: `translateY(-${progress * 20 }vh)`}} ref={refCont} className=" sticky top-0 -z-10 h-screen w-full flex flex-col sm:flex-row bg-black">
		 <div className="absolute top-10 bg-white opacity-60 h-[0.9px] w-full "></div>

		<div className="hidden sm:flex sm:h-full sm:w-1/2 bg-[#070707]">
		</div>
	<div className="absolute top-1/4 left-4 sm:left-16 homeTitle">
	<h1 className="text-white text-5xl sm:text-[5rem] md:text-[7rem] drop-shadow-2xl">ENVISION</h1>
	<h2 className="text-[#E40031] sm:mt-6 text-4xl sm:text-[2.7rem] md:text-[4rem]"> ARTISTS </h2>
	</div>	
		<div className="h-full max-w-screen w-full sm:w-1/2 flex ">
			{/* <div className="bg_image flex-grow-0 flex-shrink-0"></div> */}
			<img className="bg_image object-cover w-full h-auto" src={BgImage} alt="" />
		</div>
		<div className="absolute bottom-2 left-[45%] sm:left-[47.8%]">
			<img src={DownArrow} className="rotate-[270deg]" width={130/ 3}  height={65/3} alt="" />
		</div>
	 </section>
	 </>
  )
}

export default Homepage