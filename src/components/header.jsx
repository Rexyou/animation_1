import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';

const Header = () => {

  const [open, setOpen] = useState(true);

  const app = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
    tl.current && tl.current.progress(0).kill();
    tl.current = gsap.timeline()
      .to(app.current, {
        width: '100%'
      })
      .to('.menu_item', {
        x: 165
      })  
    }, app);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    tl.current.reversed(open);    
  }, [open]);

  const menuItem = "m-10 text-2xl overflow-hidden w-40";

  const openCloseAction = () => {
      setOpen(!open);
  }

  return (
    <div>
      <div className="fixed text-3xl bottom-5 left-5">
          <AiOutlineMenuUnfold onClick={ openCloseAction }/>
      </div>
      <header className={ `headermini fixed h-full max-h-full bg-black text-white overflow-hidden w-0 z-50` } ref={app}>
        <ul className='h-screen flex flex-col justify-center items-start'>
          <li className={ menuItem }>
            <button className="menu_item relative -left-full">Sample</button>
          </li>
          <li className={ menuItem }>
            <button className="menu_item relative -left-full">Sample</button>
          </li>
          <li className={ menuItem }>
            <button className="menu_item relative -left-full">Sample</button>
          </li>
        </ul>
        <div className="absolute text-3xl -right-14 -bottom-20 h-40 w-40 border-white border rounded-full">
          <span className="text-white absolute top-8 left-12">
            <AiOutlineClose onClick={ openCloseAction } />
          </span>
        </div>
      </header>
    </div>
  )
}

export default Header