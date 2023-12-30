export default function Contact() {
    return (
        <div className={"flex flex-col h-full mb-24 items-start md:items-center justify-center max-w-[1000px] w-full"}>
            <span className={"accent font-monospace mb-4 text-lg"}>04. What's Next?</span>
            <h3 className={"slate font-[600] mb-12 text-5xl max-sm:text-4xl md:text-6xl text-center max-sm:text-left "}>Let's talk  about a
            project, collaboration or
            an idea you may have</h3>

            <a href={"mailto:noahnemhed@hotmail.com"} className={"w-full md:w-fit accent hover-btn accent-border border p-4 px-8 text-md font-monospace rounded "}>
                Get in touch
            </a>
        </div>
    )
}
