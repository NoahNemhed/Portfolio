export default function About() {
    return (
        <>
            <div className={"flex flex-col text-md text-left items-center max-w-[1000px] pt-16 pb-32 w-full"}>
                <div className={"flex items-center w-full header-line pb-16"}>
                    <span className={"accent mr-4 text-xl font-monospace"}>01.</span><span className={"text-2xl whitespace-nowrap slate font-Poppins font-[600]"}>About me</span>
                </div>
                <p className={"dark-slate w-full mb-4 leading-7"}>
                Hello! I'm Noah, a passionate Webdeveloper based in Malmö, Sweden. In 2021, a friend introduced me to the world of programming, and since then, I've been captivated by the endless possibilities and creative freedom it offers.
                
                </p>
                <p className={"dark-slate w-full mb-4 leading-7"}>
                Starting with creating simple Powershell and VBA scripts, I've progressed rapidly, expanding my skill set to include JavaScript, TypeScript, React, Node.js, and numerous other tools. Currently, I am actively engaged in learning new frameworks and staying updated on emerging technologies.
                </p>
                <p className={"dark-slate w-full mb-4 leading-7"}>
                Thank you for visiting my portfolio page! If you have any questions or if there's something specific you'd like to know more about, feel free to reach out. I'm excited to share more of my creations and experiences with you. Thanks for being here!
                </p>
                <p className={"dark-slate w-full mb-4 leading-7"}>
                    Here are a few technologies I’ve been learning & working with recently:
                </p>
                <ul className={"dark-slate font-monospace text-[14px] grid grid-cols-2 gap-2 bullet-list w-full "}>
                    <li className="hover-accent">JavaScript</li>
                    <li className="hover-accent">TypeScript</li>
                    <li className="hover-accent">React</li>
                    <li className="hover-accent">Node.js</li>
                    <li className="hover-accent">Redux RTK</li>
                    <li className="hover-accent">MongoDB</li>
                </ul>
            </div>
        </>
    )
}
