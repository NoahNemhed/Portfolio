import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";



export default function Home() {
    const container = useRef();


    useEffect(() => {
        gsap.fromTo('.loading-page', { opacity: 1 }, { opacity: 0, duration: 1.5, delay: 2.5 });
        gsap.to('.logo-name', {
            y: 0,
            stagger: 0.15,
            delay: 0.2,
            duration: 0.1
        });

      }, []); 

      
    return (
        <div className={"flex flex-col h-full mb-24 justify-center max-w-[1000px] w-full relative"}>
            <span className={"accent text-[14px] font-monospace mb-4"}>Hi, my name is</span>
            <h1 className={"text-6xl lg:text-7xl font-[600] slate mb-2"}>Noah Nemhed.</h1>
            <h2 className={"text-4xl md:text-5xl lg:text-7xl font-[600] opacity-60 slate tracking-tight"}>Frontend Developer</h2>
            <p className={"py-8 slate text-md leading-7 opacity-60 max-w-[600px]"}>
            I assist businesses in creating a powerful visual presence with
            impeccable Web Design. By doing so, they can enhance brand
            recognition and drive greater sales.
            </p>
            <a href={"/work"} className={"accent md:w-fit w-full hover-btn cursor-pointer text-[14px] hover-accent accent-border border rounded font-monospace p-4 px-6 mt-4"}>
                Check out my work!
            </a>


            <div className="loading-page " id="loading-page" ref={container}>
            <svg xmlns="http://www.w3.org/2000/svg" className='neos' viewBox="0 0 512 512"><path fill="#ffa500" d="M415.4 512h-95.1L212.1 357.5v91.1L125.7 512H28V29.8L68.5 0h108.1l123.7 176.1V63.5L386.7 0h97.7v461.5zM38.8 35.3V496l72-52.9V194l215.5 307.6h84.8l52.4-38.2h-78.3L69 13zm82.5 466.6l80-58.8v-101l-79.8-114.4v220.9L49 501.9h72.3zM80.6 10.8l310.6 442.6h82.4V10.8h-79.8v317.6L170.9 10.8zM311 191.7l72 102.8V15.9l-72 53v122.7z"/></svg>
                


                <div className="name-container">
                    <div  id="logo-name" className="logo-name text-6xl lg:text-7xl font-[600]  mb-2 text-center pt-4 slate ">Noah Nemhed</div>
                </div>

            </div>
        </div>
    )
}
