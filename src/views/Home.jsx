export default function Home() {
    return (
        <div className={"flex flex-col h-full mb-24 justify-center max-w-[1000px] w-full"}>
            <span className={"accent text-[14px] font-monospace mb-4"}>Hi, my name is</span>
            <h1 className={"text-6xl lg:text-7xl font-[600] slate mb-2"}>Noah Nemhed.</h1>
            <h2 className={"text-4xl md:text-5xl lg:text-7xl font-[600] opacity-60 slate tracking-tight"}>Junior Frontend Developer</h2>
            <p className={"py-8 slate text-md leading-7 opacity-60 max-w-[600px]"}>
            I assist businesses in creating a powerful visual presence with
            impeccable Web Design. By doing so, they can enhance brand
            recognition and drive greater sales.
            </p>
            <a href={"/work"} className={"accent md:w-fit w-full hover-btn cursor-pointer text-[14px] hover-accent accent-border border rounded font-monospace p-4 px-6 mt-4"}>
                Check out my work!
            </a>
        </div>
    )
}
