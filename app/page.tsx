"use client";

import Image from "next/image";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin, ScrollTrigger } from "gsap/all";
import Grow from "./components/grow";
import Members from "./components/members";
import { HeroHighlight } from "./components/head";
import { SparklesCore } from "./components/ui/sparkles";
import { NavbarHome } from "./components/navbar-menu";

export default function Home() {
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const mainRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin, ScrollTrigger);

    gsap.to(textRef.current, {
      duration: 2,
      text: "Komerce Tech",
    });

    gsap.fromTo(
      imgRef.current,
      { x: 0 },
      {
        x: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 10%",
          end: "bottom 90%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      imgRef.current,
      { scale: 1, x: 0 },
      {
        scale: 10,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "bottom 70%",
          end: "bottom 40%",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { x: 0, opacity: 1, scale: 0 },
      {
        x: 0,
        opacity: 1,
        scale: 5,
        duration: 2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 10%",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap.to(mainRef.current, {
      background: "black",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom 50%",
        end: "bottom 30%",
        scrub: true,
      },
    });
  }, []);

  return (
    <main
      className="flex min-h-[1200px] flex-col items-center justify-center overflow-hidden"
      ref={mainRef}
    >
      <NavbarHome />
      <div
        className="w-full p-0 flex flex-col items-center justify-center"
        ref={containerRef}
      >
        <HeroHighlight>
          <div className="flex align-middle items-center justify-center">
            <span className="title-page" ref={textRef}>
              KBVGFRuJSnAR
            </span>
          </div>
          <div className="w-[100rem] h-500 relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full mt-5"
              particleColor="#FFFFFF"
            />
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(800px_200px_at_top,transparent_0%,white)]"></div>
          </div>
        </HeroHighlight>
      </div>
      <div className="space h-[200px]"></div>
      <Grow />
      <Members />
    </main>
  );
}
