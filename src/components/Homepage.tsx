import { useRef , useContext , useState , useCallback } from "react"
import { ScrollContext } from "../utils/scroll-observer"
import "./Styles/Homepage.css"
import BgImage from "../Assests/bg-Image.jpg"

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
	 <section  style={{ transform: `translateY(-${progress * 25 }vh)`}} ref={refCont} className=" sticky top-0 -z-10 h-screen w-full flex flex-col sm:flex-row bg-black">
		 <div className="absolute top-10 bg-white opacity-60 h-[0.9px] w-full "></div>

		<div className="hidden sm:flex sm:h-full sm:w-1/2 bg-[#070707]">
		</div>
	<div className="absolute top-1/4 left-4 homeTitle">
	<h1 className="text-white text-5xl">ENVISION</h1>
	</div>	
		<div className="h-full w-full sm:w-1/2 flex ">
			{/* <div className="bg_image flex-grow-0 flex-shrink-0"></div> */}
			<img className="bg_image object-cover w-full h-auto" src={BgImage} alt="" />
		</div>
	 </section>
	 </>
  )
}

export default Homepage