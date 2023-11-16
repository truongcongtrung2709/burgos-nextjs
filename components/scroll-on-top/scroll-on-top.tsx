"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from 'react'


export default function ScrollOnTop(){
  const [visible, setVisible] = useState(false)
  const isBrowser = () => typeof window !== 'undefined'; 
  function toggleButton(){
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  }
  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    return window.addEventListener('scroll',toggleButton)
});

  return (
    <div
    onClick={scrollToTop}  className="to-the-top text-right flex-[0_0_100%] max-w-full relative w-full px-[15px]" style={{display: visible ? 'block' : 'none'}}>
      <div id="toTopBtn"  className="button-top font-black inline-block leading-[1] fixed z-[1000] bottom-6 right-6 pt-[13px] text-center opacity-[0.7] rounded-[500px] bg-hero-pattern hover:opacity-[1] cursor-pointer text-white w-12 h-12 text-xl transition-all duration-[0.3s] ease-[ease]" >
                <FontAwesomeIcon  icon={faChevronUp}/>
      </div>
    </div>
  )
}

