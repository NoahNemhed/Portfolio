import { useState } from "react";
import HeroIcon from '.././images/projects/HeroIconLetter2.png';

export default function Navigation() {
    const [sideMenuVisible, setSideMenuVisible] = useState(false);

    // Function to toggle the side menu visibility
    const toggleSideMenu = () => {
        setSideMenuVisible(!sideMenuVisible);
    };

    return (
        <nav id={"navigation"} className={"flex w-full h-[100px] px-8 md:px-14 items-center justify-between fixed z-50"}>
            <a href="/"><img className="" src={HeroIcon} alt="HeroIcon" /></a>
            <a href={"/CVENG.pdf"} className={"md:hidden max-sm:hidden w-fit hover-btn cursor-pointer text-[14px] hover-accent font-monospace p-4 px-6 ml-auto mr-2"}>
                Resume
            </a>
            <div className={`${sideMenuVisible ? "flex" : "hidden md:flex"} flex-col p-8 md:p-0 w-full h-full md:w-auto md:h-auto fixed md:relative top-0 left-0 backdrop-blur-sm bg-[rgba(0,0,0,0.8)] md:bg-transparent justify-center md:flex-row items-start md:items-center z-[100]`}>
                <ul className={"flex flex-col md:flex-row slate font-monospace text-2xl md:text-[13px] mr-4 tracking-wide"}>
                    <li className={"py-3 md:px-4 md:py-0"}><a onClick={toggleSideMenu} className={"hover-accent"} href={"#about-section"}><span className={"mr-2 accent"}>01.</span><span>About</span></a></li>
                    <li className={"py-3 md:px-4 md:py-0"}><a onClick={toggleSideMenu} className={"hover-accent"} href={"#experience-section"}><span className={"mr-2 accent"}>02.</span><span>Experience</span></a></li>
                    <li className={"py-3 md:px-4 md:py-0"}><a onClick={toggleSideMenu} className={"hover-accent"} href={"#work-section"}><span className={"mr-2 accent"}>03.</span><span>Work</span></a></li>
                    <li className={"py-3 md:px-4 md:py-0"}><a onClick={toggleSideMenu} className={"hover-accent"} href={"#contact-section"}><span className={"mr-2 accent"}>04.</span><span>Contact</span></a></li>
                </ul>
                <a href={"/CVENG.pdf"} target={"_blank"} className={"mt-10 w-full md:w-fit max-w-md md:mt-0 p-2 px-4 rounded cursor-pointer hover-btn accent accent-border text-sm border font-monospace"} rel="noreferrer">Resume</a>
            </div>
            <i onClick={toggleSideMenu} className={`cursor-pointer fas fa-${sideMenuVisible ? "close" : "bars-staggered"} z-[100] w-[20px] text-center text-xl md:hidden`} />
        </nav>
    );
}
