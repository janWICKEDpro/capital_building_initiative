
import cover from '../../assets/cover.jpg';
import { init } from "ityped";
import { useEffect, useRef } from "react";
import './introSection.scss';

export default function IntroSection() {
    const textRef = useRef();
  
    useEffect(() => {
      init(textRef.current, {
        showCursor: true,
        backDelay: 1500,
        backSpeed:60,
        strings: ["Valuable ", "Accessible", "knowledgable", "connected"],
      });
    }, []);
  
  return (
    <div className='intro' id='intro'>
      <img className='cover' src ={cover} alt = 'cover'/>
      <div className='welcome'>
          <br/>
          <h1 className='comp'>Capital Building Initiative</h1>
          <hr/>
          <h2> We are <span ref={textRef}></span></h2>
      </div>
    </div>
  )
}
