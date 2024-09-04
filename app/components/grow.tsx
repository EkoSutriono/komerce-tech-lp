"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin, ScrollTrigger } from "gsap/all";

export default function Grow() {
  const refParagraph = useRef(null)
  const refContainerGrow = useRef(null)
  const refWrapper = useRef(null)
  const refTitle = useRef(null)

  const newParagraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequuntur quae dolorem soluta quo! Modi perferendis odio saepe porro delectus quo qui libero! Temporibus laboriosam voluptate dignissimos aliquid magni deleniti quod nisi voluptates repellendus, perferendis, quae, harum nulla quas facilis nihil doloribus natus autem enim reprehenderit. Neque ea facilis magni ab ullam perspiciatis placeat! Ipsam quod maxime repellendus natus, excepturi voluptas a nam nesciunt recusandae alias, nemo, eos amet ratione voluptatem. Vero, rem ut maxime non tempora itaque molestiae temporibus accusantium minus vel voluptate dolore laborum voluptates quisquam, ipsa tenetur harum iste laudantium modi! Architecto sint quos iusto beatae id. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consequuntur quae dolorem soluta quo! Modi perferendis odio saepe porro delectus quo qui libero! Temporibus laboriosam voluptate dignissimos aliquid magni deleniti quod nisi voluptates repellendus, perferendis, quae, harum nulla quas facilis nihil doloribus natus autem enim reprehenderit. Neque ea facilis magni ab ullam perspiciatis placeat! Ipsam quod maxime repellendus natus, excepturi voluptas a nam nesciunt recusandae alias, nemo, eos amet ratione voluptatem. Vero, rem ut maxime non tempora itaque molestiae temporibus accusantium minus vel voluptate dolore laborum voluptates quisquam, ipsa tenetur harum iste laudantium modi! Architecto sint quos iusto beatae id. '

  useEffect(() => {
    gsap.registerPlugin(TextPlugin, ScrollTrigger)
    gsap.fromTo(
      refParagraph.current,
      { text: '', opacity: 1},
      {
        text: newParagraph,
        y: 0,
        scrollTrigger: {
          trigger: refContainerGrow.current,
          start: 'top 70%',
          end: 'bottom center',
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      refTitle.current,
      { text: '', opacity: 1},
      {
        text: 'Grow With Tech',
        y: 0,
        scrollTrigger: {
          trigger: refContainerGrow.current,
          start: 'top 70%',
          end: 'top 0%',
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      refWrapper.current,
      { position: 'fixed', top: '10%'},
      {
        position: 'fixed',
        top: '10%',
        scrollTrigger: {
          trigger: refContainerGrow.current,
          start: 'top 10%',
          end: 'bottom 50%',
          scrub: true
        },
      }
    );
  }, [])
  
  return (
    <div ref={refContainerGrow} className="relative text-white h-[1000px] w-screen px-[200px]">
      <div ref={refWrapper} className="flex flex-col absolute pr-[200px]">
        <h3 ref={refTitle} className="text-5xl font-semibold mb-5">Grow With Tech</h3>
        <p className="min-h-[240px]" ref={refParagraph}></p>
      </div>
    </div>
  )
}