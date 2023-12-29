export default function SideLinks() {
    return (
        <>
            <ul className={"hidden xl:flex flex-col fixed bottom-0 left-0 items-center px-14 slate after-line text-xl"}>

                <li className={"py-2"}><a href={"https://github.com/NoahNemhed"} target={"_blank"} className={"hover-accent hover-displace fab fa-github"} rel="noreferrer" /></li>

                <li className={"py-2"}><a href={"https://www.linkedin.com/in/noah-nemhed-uppgren-31077b17a/"} target={"_blank"} className={"hover-accent hover-displace fab fa-linkedin"} rel="noreferrer" /></li>
            </ul>
            <div className={"slate hidden xl:flex flex-col fixed bottom-0 right-0 items-center px-14 after-line w-fit"}>
                <a href={"mailto:noahnemhed@hotmail.com"} className={"flex flex-col items-center hover-accent pb-4 hover-displace cursor-pointer font-monospace font-medium tracking-widest"}>
                    <span className={"pb-2 text-xl"}>@</span>
                    <span className={"vertical-text opacity-60 text-sm"}>noahnemhed@hotmail.com</span>
                </a>
            </div>
        </>
    )
}
