import "./Styles/About.scss";
import { useContext, useRef } from "react";
import { ScrollContext } from "../utils/scroll-observer";

const opacityForBlock = (sectionProgress: number, blockno: number) => {
  const progress = sectionProgress - blockno;
  console.log(progress)
  if (progress >= 0 && progress < 1) { 
    return 1
  }else {
    return 0.2};
};

const About: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 4;
  let progress = 0;

  const { current: elcont } = refContainer;
  if (elcont) {
    const { clientHeight, offsetTop } = elcont;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY = Math.min( clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;

    
      progress = Math.min(numOfPages - 0.5 , Math.max(0.5 , percentY * numOfPages))
  }
  return (
    <>
      <div ref={refContainer}  className="w-full  bg-black">
        <div className="min-h-screen mx-auto max-w-5xl flex flex-col justify-center items-center  text-white px-4 pb-10 pt-16 sm:pt-16 text-[2.5rem] md:text-[4.7rem]  tracking-tight font-bold">
          <div  className="aboutdesc leading-[1.1] font-['Public_Sans'] ">
	<div style={{opacity:opacityForBlock(progress , 0)}} className="">We know our tools inside out</div>
            <span className="aboutdesc inline-block after:content-['_']" style={{opacity: opacityForBlock(progress , 1)}}>
              Our team has contributed <strong>123 </strong>
              commits to React Native, core powering thousands of apps worldwide
            </span>
            <span className="aboutdesc inline-block" style={{opacity: opacityForBlock(progress , 2)}}>
              We are maintaing some of the most popular open-source projects,
	      with over 1,234 downloads
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
