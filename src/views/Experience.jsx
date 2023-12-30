import {useState} from "react";
import Study from '../images/projects/study.png'
export default function Experience() {



    const [certifications, setCertifications] = useState({
        "The Complete Web Developer": {
          url: "https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/learn/lecture/8846788?start=1#content",
          provider: "Zero To Mastery",
          font: "google"
        }
      });
      
      const [educations, setEducations] = useState({
        "Javautvecklare": {
          url: "https://gritacademy.se/javautvecklare/",
          provider: "Grit Academy",
          font: "google"
        }
      });



    return (
        <>
            <div className={"flex flex-col text-left items-center max-w-[1000px] pt-16 pb-32 w-full"}>
                <div className={"flex items-center w-full header-line pb-16"}>
                    <span className={"accent mr-4 text-xl font-monospace"}>02.</span><span
                    className={"text-[22px] whitespace-nowrap slate font-Poppins font-[600]"}>Experience</span>
                </div>
                <p className={"dark-slate w-full mb-2 leading-7"}>
                    As in 2024, I have about 3 years of experience in development.
                    MERN being my initial stack, i've further have learn't TypeScript & Redux Toolkit.
                </p>
                <p className={"dark-slate w-full mb-4 leading-7"}>
                    I've gained experience of fullstack by building web applications with variety of frameworks like React and Express in.<a/>
                    
                </p>
                <div className={"flex items-center justify-center w-full pt-28 pb-8"}>
                    <h3 className={"text-2xl slate font-[600]"}>Education & Certifications</h3>
                </div>
                <ul className="flex w-full flex-col text-md slate font-monospace cert-list">
                {Object.keys(educations).map((education, i) => (
                <li key={i} className="p-3 px-6 cursor-pointer">
                    <a href={educations[education].url} target="_blank" rel="noreferrer">
                    <img src={Study} alt="Study Icon" className="mr-4 w-[20px] text-center accent" />
                    <span>{education}</span>
                    <span className="ml-2 hidden md:block text-sm slate-alt">- {educations[education].provider}</span>
                    </a>
                </li>
                ))}
            </ul>
            <ul className="flex w-full flex-col text-md slate font-monospace cert-list">
                {Object.keys(certifications).map((certification, i) => (
                <li key={i} className="p-3 px-6 cursor-pointer">
                    <a href={certifications[certification].url} target="_blank" rel="noreferrer">
                    <img src={Study} alt="Study Icon" className="mr-4 w-[20px] text-center accent" />
                    <span>{certification}</span>
                    <span className="ml-2 hidden md:block text-sm slate-alt">- {certifications[certification].provider}</span>
                    </a>
                </li>
                ))}
            </ul>

            </div>
        </>
    )
}
