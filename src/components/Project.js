import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Arrow from '../assets/Images/ArrowSmall.svg'
import Vector from '../assets/Images/VectorProjectPage.svg'
import TunderImg from '../assets/Images/TunderImg1.png'
import TunderImg2 from '../assets/Images/TunderImg2.png'
import FaceDetectionImg from '../assets/Images/FaceDetectionImg1.png'
import FaceDetectionImg2 from '../assets/Images/FaceDetectionImg2.png'
import Arrow2 from '../assets/Images/ArrowProjectPage2.svg'
import VectorProjectPage2 from '../assets/Images/VectorProjectPage2.png'
import Linkedin from '../assets/Images/Linkedin.svg'
import Git from '../assets/Images/Github.svg'
import AOS from 'aos';
import Arrow3 from '../assets/Images/ArrowProjectPage3.svg'
import 'aos/dist/aos.css';

const projectData = {
    tunder: {
      title: "Tunder",
      description: "I developed the website for Tunder AB, The website is supported by TinaCMS and Cloudinary, its built with NextJS and TailwindCSS, embodying a modern and user-friendly approach. This ongoing project not only involves developing Tunder AB's website but also contributes significantly to shaping them as a promising and innovative entity in the ever-evolving web agency landscape, providing me with valuable insights and experience in the process.",
      year: "2023 Ongoing",
      service: "Web Development",
      image: TunderImg,
      image2: TunderImg2,
      description2: "Ultra OOH provides individually designed brand experience campaigns and guerrilla marketing as well as classic promotional campaigns.",
      website: "https://tunder.netlify.app",
      techs: ['Next.js','TinaCMS', 'Tailwindcss'],
    },
    facerecognition: {
      title: "Face detection",
      description: "Developed a face detection application utilizing the Clarifai API. The project encompasses comprehensive expertise in web development, backend development, and database management. The technology stack employed includes React, TailwindCSS, and PostgreSQL. The frontend is hosted on Netlify, while the backend and database are seamlessly hosted on Render.",
      year: "2023",
      service: "Web Development",
      image: FaceDetectionImg,
      image2: FaceDetectionImg2,
      description2: "User-friendly login and registration system, powered by the dynamic combination of Node.js and PostgreSQL. ",
      website: "https://main--face-detectorapp.netlify.app/",
      techs: ['Next.js','TinaCMS', 'Tailwindcss'],
    },
    // ... add more projects here
  };



const Project = () => {

        useEffect(() => {
          window.scrollTo(0, 0);
          AOS.init({
      
          });
        }, []);

    const { projectId } = useParams();
    const navigate = useNavigate();
    const project = projectData[projectId];
    const projectIds = Object.keys(projectData);
    const currentProjectIndex = projectIds.indexOf(projectId);
    const nextProjectIndex = (currentProjectIndex + 1) % projectIds.length;
    return (
        <div>
          {project ? (
            <>
            <div className=' w-full bg-[#070707]'>
                <section className='xl:h-[1000px] max-lg:h-[1000px] max-xl:h-[800px] max-sm:h-[850px]  container mx-auto'>
                    <div className='flex justify-between py-10'>
                        <button className='text-xl text-[#777] font-[PowerLight]' onClick={() => navigate(`/`)}>Back Home</button>
                        <button className='text-xl text-[#777] font-[PowerLight] flex gap-4' onClick={() => navigate(`/project/${projectIds[nextProjectIndex]}`)}>Next Project <img src={Arrow3} alt="" className='py-1 '/></button>

                    </div>

                    <div>

                        <div>
                            <h1 className='text-9xl text-[#fff] font-[PowerRegular] xl:pt-40 max-lg:w-[350px] max-lg:text-8xl  max-xl:text-center max-sm:text-5xl max-sm:w-[400px] max-sm:pt-14' data-aos="fade-down" data-aos-delay="300" data-aos-once="true">{project.title}</h1>
                        </div>

                        <div className='flex max-xl:flex-col xl:gap-x-16 max-xl:gap-8 max-xl:gap-y-2 max-xl:items-center'>
                            <h1 className='text-2xl text-[#d6d6d6] font-[PowerUltraLight] max-w-[600px] xl:w-[38rem] pt-16 max-lg:text-base max-sm:text-center max-sm:w-[350px] ' data-aos="fade-up" data-aos-delay="400" data-aos-once="true">  {project.description}</h1>
                            <div className='flex-col md:gap-y-28 xl:py-16 max-lg:pt-20 xl:w-[36rem] max-sm:items-center max-sm:pt-12'>
                                <div className='flex-col'>
                                    <div className='flex xl:pt-12 max-sm:flex-col xl:gap-x-64 max-lg:gap-x-24 max-xl:gap-x-24 max-xl:justify-center max-xl:text-left max-sm:text-center'>
                                    <h1 className='text-[#fff] text-2xl font-[PowerRegular]' data-aos="fade-left" data-aos-delay="500" data-aos-once="true">Year</h1>
                                    <h1 className='text-[#fff] text-2xl font-[PowerRegular]' data-aos="fade-left" data-aos-delay="600" data-aos-once="true">{project.year}</h1>
                                    </div>
                                    <img src={Vector} alt="" className='py-8' />
                                </div>
                                <div className='flex-col'>
                                    <div className='flex max-sm:flex-col xl:gap-x-48 max-lg:gap-x-36 max-xl:gap-x-24 max-xl:justify-center max-xl:text-left max-sm:text-center' >
                                    <h1 className='text-[#fff] text-2xl font-[PowerRegular]' data-aos="fade-left" data-aos-delay="700" data-aos-once="true">Service</h1>
                                    <h1 className='text-[#fff] text-2xl font-[PowerRegular]' data-aos="fade-left" data-aos-delay="800" data-aos-once="true">{project.service}</h1>
                                    </div>
                                    <img src={Vector} alt="" className='pt-8' />
                                </div>

                            </div>
                        </div>


                    </div>
                </section>

                <section className=' w-full  max-sm:hidden'>
                    <img src={project.image} alt="" className=' w-full'/>


                </section>

                <section className='md:pt-12 max-xl:pl-4' >
                    <div className='flex justify-evenly '>
                        <h1 className='text-[#d6d6d6] text-4xl font-[PowerUltraLight] max-w-[920px] max-sm:hidden' data-aos="fade-left" data-aos-delay="100" data-aos-once="true">{project.description2}</h1>
                        <div className='md:py-4 max-sm:mb-28'>
                        <a href={project.website} className='flex gap-x-4 items-center w-[209px] pl-6 bg-white rounded-full p-2 h-[50px] text-[#070707]' data-aos="fade-left" data-aos-delay="300" data-aos-once="true">Visit Website <img src={Arrow2} alt="" /></a>
                        </div>
                        
                    </div>
                </section>

                <section className=' w-full pt-32 max-sm:hidden'>
                    <img src={project.image2} alt="" className=' w-full'/>
                </section>

                <section className='h-[690px] max-lg:h-[500px] w-full xl:pt-44 max-xl:pt-44 max-lg:pt-32 container mx-auto max-sm:hidden'>
                    <div className='flex-col'>
                        <div className='flex max-lg:flex-col '>
                            <h1 className='text-[5.625rem] leading-none text-[#fff] font-[PowerRegular] max-w-[1021px] max-lg:text-4xl max-xl:text-6xl'>Let’s talk about a project, collaboration or an idea you may have</h1>

                            <a href="mailto:noahnemhed@hotmail.com" className='button-container flex gap-x-4 items-center min-w-[214px] h-[50px] pl-6 bg-[#2A00FF] rounded-full p-2 self-end'> <h1 className='text-lg text-[#FFF] font-[PowerLight] max-xl:text-base '>Get in touch</h1> <img src={Arrow} alt=""  className='arrow pl-6 h-[23px] text-[#fff]' /></a>      
                            

                        </div>
                        <img src={VectorProjectPage2} alt="" className='py-12' />
                        <div className='flex justify-between'>
                        <h1 className='text-[#fff] text-xl font-[PowerLight]'><span className='text-[#8d8d8d] font-[PowerRegular] pr-1'>©</span>2023 Noah Nemhed, All Rights Reserved.</h1>

                        <div className='flex gap-x-4'>
                        <a href="https://github.com/NoahNemhed"><img src={Git} alt="" /></a>
                        <a href="https://se.linkedin.com/"><img src={Linkedin} alt="" /></a>
                        </div>
                    </div>
                    </div>

                </section>


            </div>              
            </>
          ) : (
            <p>Project not found</p>
          )}
        </div>
      );
    }
    
    export default Project;
