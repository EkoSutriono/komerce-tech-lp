"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin, ScrollTrigger } from "gsap/all";

export default function Grow() {
  const refParagraph = useRef(null)
  const refContainer = useRef(null)


  useEffect(() => {
    gsap.registerPlugin(TextPlugin, ScrollTrigger)
    gsap.set(refParagraph.current, { opacity: 0 });
    gsap.fromTo(
      refParagraph.current,
      { text: '', opacity: 1},
      {
        text: '',
        scrollTrigger: {
          trigger: refContainer.current,
          start: 'top center',
          end: 'bottom 80%',
          scrub: true,
        },
      }
    );
  }, [])
  
  return (
    <div className="text-black h-[600px]">
      <div className="flex flex-col">
        {/* <h3 className="text-5xl font-semibold mb-5">Grow With Tech</h3> */}
        <p className="min-h-[240px]"></p>
      </div>
    </div>
  )
}