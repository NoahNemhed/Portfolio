import Study from '../images/projects/study.png';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Experience() {
    const ExperienceRef1 = useRef(null);
    const ExperienceRef2 = useRef(null);
    const ExperienceRef3 = useRef(null);
    const ExperienceRef4 = useRef(null);
    const ExperienceRef5 = useRef(null);
    const ExperienceRef6 = useRef(null);


    useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
  
      gsap.fromTo(
        ExperienceRef1.current,
        { opacity: 0, scale: 1,  },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 2,
          scrollTrigger: {
            trigger: ExperienceRef1.current,
            toggleActions: 'play none none none'
          }
        }
      );
      gsap.fromTo(
        ExperienceRef2.current,
        { opacity: 0, scale: 1,  },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 2.2,
          scrollTrigger: {
            trigger: ExperienceRef2.current,
            toggleActions: 'play none none none'
          }
        }
      );
      gsap.fromTo(
        ExperienceRef3.current,
        { opacity: 0, scale: 1,  },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 2.4,
          scrollTrigger: {
            trigger: ExperienceRef3.current,
            toggleActions: 'play none none none'
          }
        }
      );
      gsap.fromTo(
        ExperienceRef4.current,
        { opacity: 0, scale: 1,  },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 2.6,
          scrollTrigger: {
            trigger: ExperienceRef4.current,
            toggleActions: 'play none none none'
          }
        }
      );
      gsap.fromTo(
        ExperienceRef5.current,
        { opacity: 0, scale: 1,  },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 2.6,
          scrollTrigger: {
            trigger: ExperienceRef5.current,
            toggleActions: 'play none none none'
          }
        }
      );
      gsap.fromTo(
        ExperienceRef6.current,
        { opacity: 0, scale: 1,  },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 2.6,
          scrollTrigger: {
            trigger: ExperienceRef6.current,
            toggleActions: 'play none none none'
          }
        }
      );

    }, []);
    const work = [
        {
            title: "Doldadress",
            url: "https://www.doldadress.se/",
            position: "Frontend Developer",
            duration: "2023 November - 2024 Present",
            content: [
                "Code collaboration and version control using development tools such as Git, GitHub and GitHub Flow.",
                "Implementation and maintenance of user-friendly interface with Next.js, Typescript and Tailwind",
                "Implementation of payment functionality through the Stripe API for smooth and secure transactions"
            ]
        },
        {
            title: "Imvilabs",
            url: "",
            position: "Internship Junior frontend-developer",
            duration: "2023 January - 2023 August",
            content: [
                "Developed a reading speed test using JavaScript and ReactJS.",
                "Implemented login and registration functionality with Firebase",
            ]
        }
    ];

    const certifications = [
        {
            title: "The Complete Web Developer",
            url: "https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/learn/lecture/8846788?start=1#content",
            provider: "Zero To Mastery",
            font: "google",
        }
    ];

    const educations = [
        {
            title: "Javautvecklare",
            url: "https://gritacademy.se/javautvecklare/",
            provider: "Grit Academy",
            font: "google"
        }
    ];

    return (
        <>
            <div  id="experience-section" className="flex flex-col text-left items-center w-full sm:max-xl:max-w-[768px] max-sm:w-full max-sm:px-[15px] sm:max-xl:px-[30px] xl:max-w-[1000px]  mb-[200px] mx-auto">
                <div className='w-full'>
                    <div ref={ExperienceRef1}  className="flex items-center w-full header-line pb-16">
                        <span className="accent mr-4 text-xl font-monospace">02.</span><span className="text-[22px] whitespace-nowrap slate font-Poppins font-[600]">Experience</span>
                    </div>

                    <div ref={ExperienceRef2} className={"flex items-center  w-full  pb-8"}>
                        <h3 className={"text-2xl slate font-[600] "}>Employment </h3>
                    </div>
                    <div  className="w-full mx-auto flex flex-col gap-y-8">
                        {work.map((item, i) => {
                            return (
                                <div ref={ExperienceRef3} className="mb-6 " key={i}>
                                    <div className="font-Poppins text-xl mb-1 font-[500]">
                                        <span className="slate mr-2">{item.position}</span>
                                        <div className="accent">@ {item.title}</div>
                                    </div>
                                    <span className="slate text-sm font-monospace">{item.duration}</span>
                                    <ul className="flex flex-col bullet-list mt-4 slate-alt leading-6 text-sm ">
                                        {item.content.map((v, index) => (
                                            <li className="mb-2 text-justify" key={index}>{v}</li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div  className='w-full' >
                    <div ref={ExperienceRef4} className={"flex items-center  w-full pt-12  pb-8"}>
                        <h3 className={"text-2xl slate font-[600]"}>Education & Certifications</h3>
                    </div>
                    <ul className="flex w-full flex-col  text-md slate font-monospace cert-list">
                        {educations.map((education, i) => (
                            <li ref={ExperienceRef5} key={i} className="p-3  cursor-pointer">
                                <a href={education.url} target="_blank" rel="noreferrer">
                                    <img src={Study} alt="Study Icon" className="mr-4 w-[20px] text-center accent" />
                                    <span className='slate'>{education.title}</span>
                                    <span className="hidden md:block text-sm slate-alt">- {education.provider}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex w-full flex-col text-md slate mx-auto font-monospace cert-list">
                        {certifications.map((certification, i) => (
                            <li ref={ExperienceRef6} key={i} className="p-3  cursor-pointer">
                                <a href={certification.url} target="_blank" rel="noreferrer">
                                    <img src={Study} alt="Study Icon" className="mr-4 w-[20px] text-center accent" />
                                    <span className='slate'>{certification.title}</span>
                                    <span className="hidden md:block text-sm slate-alt">- {certification.provider}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </>
    );
}
