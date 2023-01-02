import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const FirstPage = () => {

  let titleCSS = "text-9xl relative -bottom-32";
  const titleArray = { "title_1": "Hi,", "title_2": "I'm", "title_3": "Rex" }; 

  // Animation Control
  const app = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    gsap.context(() => {
      tl.current = gsap
        .timeline()
        .to(".title_1", {
          bottom: 0
        })
        .to(".title_2", {
          bottom: 0
        })
        .to(".title_3", {
          bottom: 0
        })
        .to(".profile_image", {
          scale: 1
        })
        .to(".profile_image", {
          scale: 0.85,
          ease: "bounce"
        })
    }, app);
  }, []);

  return (
    <div className=" h-screen w-full px-5 py-2" ref={ app }>
      { 
        Object.keys(titleArray).map(key=>{

          const titleCss = titleCSS + " " + key;

          return(
                  <div className=" overflow-hidden" key={ key }>
                    <h1 className={ titleCss }>{ titleArray[key] }</h1>
                  </div>
                )
        })
      }
      <div className="absolute bottom-8 right-10 h-48 w-48 rounded-full overflow-hidden shadow-2xl scale-0 profile_image">
        <img src="https://i.scdn.co/image/ab6761610000e5ebe1408498d7f528e3671616b1" alt="profile_image" />
      </div>
    </div>
  )
}

export default FirstPage