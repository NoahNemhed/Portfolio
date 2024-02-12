import {useState} from "react";
import Study from '../images/projects/study.png'
export default function Experience() {

    const [work, setWork] = useState({
        "KONTRAST STUDIOS AB": {
          url: "",
          position: "Frontend Development",
          duration: "2024 January - Present",
          content: [
            "Building Tunder AB's website",
            "This is an independent consultant job hired by KONTRAST STUDIOS AB.",
          ]
        },
      });



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

      const [activeTab, setActiveTab] = useState(0);




    return (
        <>
            <div className={"flex flex-col text-left items-center max-w-[1000px] pt-16 pb-32 w-full"}>
                <div className={"flex items-center w-full header-line pb-16"}>
                    <span className={"accent mr-4 text-xl font-monospace"}>02.</span><span
                    className={"text-[22px] whitespace-nowrap slate font-Poppins font-[600]"}>Experience</span>
                </div>
                <div className={"flex items-center justify-center w-full  pb-8"}>
                    <h3 className={"text-2xl slate font-[600]"}>Work</h3>
                </div>

                <div className={"p-2"}>
                        {
                            Object.keys(work).map((k, i) => {
                                return <div className={`${activeTab === i ? "" : "hidden"}`}>
                                    <div className={`font-Poppins text-xl mb-1 font-[500]`}>
                                        <span className={"slate mr-2"}>{work[k].position}</span><div className={"accent"}>
                                                                                                   @ {k}</div>
                                    </div>
                                    <span className={"slate text-sm font-monospace"}>{work[k].duration}</span>
                                    <ul className={"flex flex-col bullet-list mt-4 slate-alt leading-6 text-sm "}>
                                        {
                                            Object.values(work[k].content).map((v) => <li className={"mb-2 text-justify"}>{v}</li>)
                                        }
                                    </ul>
                                </div>
                            })
                        }
                    </div>
                
                
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
