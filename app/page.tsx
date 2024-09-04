"use client";

import Image from "next/image";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin, ScrollTrigger } from "gsap/all";
import Grow from './components/grow'
import Members from './components/members'

export default function Home() {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const mainRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin, ScrollTrigger)

    gsap.to(textRef.current, {
      duration: 2,
      text: "Komerce Tech",
    });

    gsap.fromTo(
      imgRef.current,
      { x: 0 },
      {
        x: 200,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 10%',
          end: 'bottom 90%',
          scrub: true,
        },
      }
    )

    gsap.fromTo(
      imgRef.current,
      { scale: 1 },
      {
        scale: 10,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'bottom 70%',
          end: 'bottom 20%',
          scrub: true,
        },
      }
    )

    gsap.fromTo(
      textRef.current,
      { x: 0, opacity: 1 },
      {
        x: 700,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 10%',
          end: 'bottom center',
          scrub: true,
        },
      }
    )
    
    gsap.to(
      mainRef.current,
      {
        background: 'blue',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'bottom 50%',
          end: 'bottom 30%',
          scrub: true
        },
      }
    )
  }, []);

  return (
    <main className="flex min-h-[1200px] flex-col items-center justify-center px-24 pt-12  overflow-hidden" ref={mainRef}>
      <div className="relative z-[-1] w-screen min-h-screen flex place-items-center" ref={containerRef}>
        <div className="items-center top-[150px] fixed w-screen pl-[0] pr-[200px]">
          <div className="flex justify-center items-center overflow-hidden">
            <Image ref={imgRef} alt="Code" width={300} height={300} src='https://storage.googleapis.com/komerce/assets/icons/icon-dev-white.svg'></Image>
            <span className="title-page" ref={textRef}>
              KBVGFRuJ SnAR
            </span>
          </div>
        </div>
      </div>
      <div className="space h-[200px]"></div>
      <Grow />
      <Members />
    </main>
  );
}
