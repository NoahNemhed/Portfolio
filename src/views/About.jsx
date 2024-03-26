import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AboutSection = () => {
  const aboutRef1 = useRef(null);
  const aboutRef2 = useRef(null);
  const aboutRef3 = useRef(null);
  const aboutRef4 = useRef(null);
  const aboutRef5 = useRef(null);
  const aboutRef6 = useRef(null);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      aboutRef1.current,
      { opacity: 0, scale: 1,},
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.8,
        scrollTrigger: {
          trigger: aboutRef1.current,
          start: 'top 80%',
          end: 'bottom 0%',
          toggleActions: 'play none none none'
        }
      }
    );
    gsap.fromTo(
      aboutRef2.current,
      { opacity: 0, scale: 1, },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: aboutRef2.current,
          start: 'top 80%',
          end: 'bottom 0%',
          toggleActions: 'play none none none'
        }
      }
    );
    gsap.fromTo(
      aboutRef3.current,
      { opacity: 0, scale: 1, },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 2.2,
        scrollTrigger: {
          trigger: aboutRef3.current,
          start: 'top 80%',
          end: 'bottom 0%',
          toggleActions: 'play none none none'
        }
      }
    );
    gsap.fromTo(
      aboutRef4.current,
      { opacity: 0, scale: 1, },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 2.4,
        scrollTrigger: {
          trigger: aboutRef4.current,
          start: 'top 80%',
          end: 'bottom 0%',
          toggleActions: 'play none none none'
        }
      }
    );
    gsap.fromTo(
      aboutRef5.current,
      { opacity: 0, scale: 1, },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 2.6,
        scrollTrigger: {
          trigger: aboutRef5.current,
          start: 'top 80%',
          end: 'bottom 0%',
          toggleActions: 'play none none none'
        }
      }
    );
    gsap.fromTo(
      aboutRef6.current,
      { opacity: 0, scale: 1,},
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 2.8,
        scrollTrigger: {
          trigger: aboutRef6.current,
          start: 'top 80%',
          end: 'bottom 0%',
          toggleActions: 'play none none none'
        }
      }
    );
  }, []);

  return (
    <div  id='about-section' className="about-section flex flex-col text-md text-left items-center sm:max-xl:max-w-[768px] max-sm:w-full max-sm:px-[15px] sm:max-xl:px-[30px] xl:max-w-[1000px]   mx-auto mb-[200px] w-full">
      <div ref={aboutRef1} className="flex items-center w-full header-line pb-16">
        <span className="accent mr-4 text-xl font-monospace">01.</span>
        <span className="text-2xl whitespace-nowrap slate font-Poppins font-[600]">About me</span>
      </div>
      <div className="flex flex-col items-start justify-start w-full">
        <p ref={aboutRef2} className="dark-slate w-full mb-4 leading-7 max-w-[69ch]">
          Hello! I'm Noah, a passionate Webdeveloper based in Malmö, Sweden. In 2021, a friend introduced me to the world of programming, and since then, I've been captivated by the endless possibilities and creative freedom it offers.
        </p>
        <p ref={aboutRef3} className="dark-slate w-full mb-4 leading-7 max-w-[69ch]">
          Starting with creating simple Powershell and VBA scripts, I've progressed rapidly, expanding my skill set to include JavaScript, TypeScript, React, Node.js, and numerous other tools. Currently, I am actively engaged in learning new frameworks and staying updated on emerging technologies.
        </p>
        <p ref={aboutRef4} className="dark-slate w-full mb-4 leading-7 max-w-[69ch]">
          Thank you for visiting my portfolio page! If you have any questions or if there's something specific you'd like to know more about, feel free to reach out. I'm excited to share more of my creations and experiences with you. Thanks for being here!
        </p>
        <p ref={aboutRef5} className="dark-slate w-full mb-4 leading-7 max-w-[69ch]">
          Here are a few technologies I’ve been learning & working with recently:
        </p>
      </div>
      <ul ref={aboutRef6} className="dark-slate font-monospace text-[14px] grid grid-cols-2 gap-2 bullet-list w-full">
        <li className="hover-accent">JavaScript</li>
        <li className="hover-accent">Next.js</li>
        <li className="hover-accent">React</li>
        <li className="hover-accent">Node.js</li>
        <li className="hover-accent">Redux RTK</li>
        <li className="hover-accent">MongoDB</li>
      </ul>
    </div>
  );
};

export default AboutSection;
