import Tunder from "../images/projects/TunderImg1.png"
import FaceDetection from "../images/projects/FaceDetectionImg1.png"
import W2C from "../images/projects/W2C.png"
import FeaturedProject from "../components/FeaturedProjects";
import Doldadress from '../images/projects/Doldadress.png'
import {useState} from "react";
export default function Work() {


    const [projects, setProjects] = useState([
        {
            name: "Doldadress",
            description: `Assisted with the development of doldadress.se, mainly focusing on frontend which is built with Next.js & Typescript`,
            tags: ["Next.js", "TinaCMS", "Typescript"],
            links: {"fas fa-external-link": "https://www.doldadress.se/"},
            image: Doldadress
        },
        {
            name: "W2CPANDAREPS",
            description: "I observed a TikTok trend wherein individuals shared Excel spreadsheets showcasing products from Pandabuy. Recognizing a potential opportunity, I developed a script to gather and save product links and titles, substituting the links with my affiliate URLs. Moreover, I extracted data from Pandabuy to enrich the product listings with additional details such as sales figures, weight, and dimensions. The website reach's approximately 250 daily visitors, A portion of the backend code is accessible on my GitHub repository.",
            tags: ["React", "Redux", "Node", "Express"],
            links: {"fas fa-external-link": "https://w2cpandareps.com/"},
            image: W2C
        },
        {
            name: "Tunder",
            description: "Developed a fictive website called Tunder, The website is supported by TinaCMS and Cloudinary, And its built with NextJS and TailwindCSS, embodying a modern and user-friendly approach.",
            tags: ["Next.js", "TinaCMS", "Cloudinary", "Tailwind"],
            links: {"fas fa-external-link": "https://tunder.netlify.app/"},
            image: Tunder
        },
        {
            name: "Face Detection",
            description: `This project encompasses web development, backend development, and database management. Sadly its not in production anymore, But the backend code is available on my github`,
            tags: ["React", "Node.js", "Express", "PostgreSQL"],
            links: {"fab fa-github": "https://github.com/NoahNemhed/FaceDetectionApi"},
            image: FaceDetection
        },
    ])

    return (
        <>
        <div  id="work-section" className=" sm:max-xl:max-w-[768px] max-sm:w-full max-sm:px-[15px] sm:max-xl:px-[30px] xl:max-w-[1000px]  items-center  w-full mx-auto">
        <div className="flex items-center w-full header-line pb-8">
            <span className="accent mr-4 text-xl font-monospace">03.</span>
            <h3 className="text-2xl whitespace-nowrap slate font-[600]">My Work</h3>
        </div>
            {projects.map((p, i) => (
                <FeaturedProject
                image={p.image}
                title={p.name}
                description={p.description}
                tags={p.tags}
                links={p.links}
                orientation={i % 2 === 0 ? 1 : 0}
                />
            ))}

        </div>

        </>

    )
}
