import {useState, useEffect, useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FeaturedProject({image, title, description, tags, links, orientation=1}) {
    const sectionRef = useRef(null);

    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, scale: 0.8, y: 75 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            toggleActions: 'play none none none'
          }
        }
      );
    }, []);
    return (
<div ref={sectionRef} className={"flex items-center w-full relative min-h-[436px] mb-[100px] border border-slate-700 md:border-0 drop-shadow md:drop-shadow-none"}>
    <div className={`md:max-w-[60%] absolute ${orientation ? "left-0" : "right-0"} h-full md:h-auto md:w-full`}>
        <div className={"w-full h-full absolute top-0 bg-blue-700 opacity-40 brightness-50  z-10"} />
        <a href={Object.values(links)[0]} target={"_blank"} rel="noreferrer">
            <img src={image} className={`blur-sm brightness-50 h-full md:brightness-100 md:blur-0 object-cover md:object-contain drop-shadow-2xl `}  />
        </a>
    </div>
    <div className={`flex flex-col p-8 md:p-0 z-10 ${orientation ? "ml-auto md:items-end" : "md:items-start"} w-full md:w-fit`}>
        <span className={"font-monospace text-sm cursor-default accent mb-2"}>Featured Project</span>
        <a href={Object.values(links)[0]} target={"_blank"} rel="noreferrer"><h3 className={"cursor-pointer slate text-2xl font-[600] transition-colors duration-300 hover:text-accent"}>{title}</h3></a>
        <p className={`cursor-default md:bg-[#112240] rounded py-6 md:px-6 max-w-[500px] leading-7 dark-slate text-[15px] my-4 drop-shadow-xl`}>
            {description}
        </p>
        <ul className={"flex flex-wrap cursor-default max-w-[500px] items-center text-sm my-1 dark-slate font-monospace whitespace-nowrap"}>
            {tags.map((t, i) => {
                return <li key={i} className={`mr-5 md:mr-0 ${orientation ? 'md:ml-5' : `md:mr-5`}`}>{t}</li>
            })}
        </ul>
        <div className={"flex flex-wrap items-center text-lg mt-4 dark-slate"}>
            {Object.keys(links).map((l, i) => {
                return <a key={i} target={"_blank"} rel="noreferrer" href={links[l]} className={`hover-accent mr-6 ${l} ${i === (!orientation ? 0 : Object.keys(links).length - 1) ? "md:mr-0" : "md:mx-6"}`}/>
            })}
        </div>
    </div>
</div>

    )
  }
  