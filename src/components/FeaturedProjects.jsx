export default function FeaturedProject({image, title, description, tags, links}) {
    return (
<div className="flex flex-col  ">
<div className={`flex flex-col md:h-[330px] max-sm:h-[230px] items-center  p-8 z-10 bg-[#112240] w-full`}>
    <span className="font-monospace text-sm cursor-default accent mb-2 ">Featured Project</span>
    <a href={Object.values(links)[0]}><h3 className="cursor-pointer slate hover-accent text-2xl font-[600] max-sm:text-center">{title}</h3></a>
    <p className={`cursor-default  rounded py-6 px-0 max-w-[500px] dark-slate text-[15px] text-justify my-4 drop-shadow-xl max-sm:hidden`}>
      {description}
    </p>
    <ul className="flex md:flex-wrap max-sm:grid md:gap-x-4 max-sm:grid-cols-1 max-sm:items-center cursor-default max-w-[500px] items-center text-sm my-1 dark-slate font-monospace whitespace-nowrap ">
      {tags.map((t, i) => (
        <li key={i} >{t}</li>
      ))}
    </ul>

  </div>
  <img src={image} fetchpriority="high" decoding="async" className={`  h-[300px] md:h-[400px] brightness-75 md:blur-0  drop-shadow-2xl`} alt="Project Image" />


</div>

    )
}
