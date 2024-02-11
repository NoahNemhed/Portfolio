import Tunder from "../images/projects/TunderImg1.png"
import FaceDetection from "../images/projects/FaceDetectionImg1.png"
import W2C from "../images/projects/W2C.png"
import FeaturedProject from "../components/FeaturedProjects";
import {useState} from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
export default function Work() {

    const [projects, setProjects] = useState([
        {
            name: "W2CPANDAREPS",
            description: "I noticed a trend on TikTok where people were sharing Excel spreadsheets featuring products from Pandabuy. Seeing an opportunity,I created a script to collect and store product links and titles, changing the links to my affiliate URLs. Additionally, I fetched data from Pandabuy to enhance the product listings with details like sales, weight, and dimensions. The website attracts around 500 daily visitors. Part of the backend is available on my github.",
            tags: ["React", "Redux", "Node", "Express"],
            links: {"fab fa-github": "https://w2cpandareps.com/"},
            image: W2C
        },
        {
            name: "Tunder",
            description: "Developed the website for Tunder AB, The website is supported by TinaCMS and Cloudinary, And its built with NextJS and TailwindCSS, embodying a modern and user-friendly approach.",
            tags: ["Next.js", "TinaCMS", "Cloudinary", "Tailwind"],
            links: {"fas fa-external-link": "https://tunder.netlify.app/"},
            image: Tunder
        },
        {
            name: "Face Detection",
            description: `Developed a face detection as a part of webdevelopment course, application utilizing the Clarifai API. The project encompasses web development, backend development, and database management. !!!Not in production anymore!!! Backend code available on my github`,
            tags: ["React", "Node.js", "Express", "PostgreSQL"],
            links: {"fas fa-external-link": "https://github.com/NoahNemhed/FaceDetectionApi"},
            image: FaceDetection
        },
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
