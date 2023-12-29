import Tunder from "../images/projects/TunderImg1.png"
import FaceDetection from "../images/projects/FaceDetectionImg1.png"
import Tba from "../images/projects/TBAImg.jpg"
import FeaturedProject from "../components/FeaturedProjects";
import {useState} from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
export default function Work() {

    const [projects, setProjects] = useState([
        {
            name: "Tunder",
            description: "Developed the website for Tunder AB, The website is supported by TinaCMS and Cloudinary, And its built with NextJS and TailwindCSS, embodying a modern and user-friendly approach.",
            tags: ["Next.js", "TinaCMS", "Cloudinary", "Tailwind"],
            links: {"fas fa-external-link": "https://tunder.netlify.app/"},
            image: Tunder
        },
        {
            name: "Face Detection",
            description: "Developed a face detection as a part of webdevelopment course, application utilizing the Clarifai API. The project encompasses web development, backend development, and database management. The frontend is hosted on Netlify, while the backend and database are hosted on Render.",
            tags: ["React", "Node.js", "Tailwind", "PostgreSQL"],
            links: {"fas fa-external-link": "https://main--face-detectorapp.netlify.app/"},
            image: FaceDetection
        },
        {
            name: "TBA",
            description: "TBA",
            tags: ["TBA", "TBA", "TBA", "TBA"],
            links: {"fab fa-github": "https://github.com/NoahNemhed"},
            image: Tba
        }
    ])

    return (
        <>
        <div className="  items-center max-w-[1000px] pt-16 pb-32 w-full">
        <div className="flex items-center w-full header-line pb-16">
            <span className="accent mr-4 text-xl font-monospace">03.</span>
            <h3 className="text-2xl whitespace-nowrap slate font-[600]">My Work</h3>
        </div>
        <Splide 
          options={ {
            mediaQuery: 'min',
            type : 'loop',
            perMove: 1,
            arrows: false,
          } }
          >
            {projects.map((p, i) => (
            <SplideSlide key={i} >
                <FeaturedProject
                image={p.image}
                title={p.name}
                description={p.description}
                tags={p.tags}
                links={p.links}
                />
            </SplideSlide>
            ))}
            
        </Splide>
        </div>

        </>

    )
}
