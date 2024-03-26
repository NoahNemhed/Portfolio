import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Contact() {
    const contactRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        gsap.fromTo(
            contactRef.current,
          { opacity: 0, scale: 1, },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 2,
            scrollTrigger: {
              trigger: contactRef.current,
              toggleActions: 'play none none none'
            }
          }
        );
      }, []);
    return (
        <div ref={contactRef} id='contact-section' className={"flex flex-col  sm:max-xl:max-w-[768px] max-sm:w-full max-sm:px-[15px] sm:max-xl:px-[30px] xl:max-w-[1000px]  mb-48 lg:mb-[150px] mx-auto"}>
            <span className={"accent font-monospace mb-4 text-lg"}>04. What's Next?</span>
            <h3 className={"slate font-[600] mb-12 text-5xl max-sm:text-4xl md:text-6xl "}>Let's talk  about a
            project, collaboration or
            an idea you may have</h3>

            <a href={"mailto:noahnemhed@hotmail.com"} className={"w-full md:w-fit accent hover-btn accent-border border p-4 px-8 text-md font-monospace rounded "}>
                Get in touch
            </a>
        </div>
    )
}
