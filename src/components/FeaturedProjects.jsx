export default function FeaturedProject({image, title, description, tags, links}) {
    return (
<div className="flex flex-col   ">

  <div className="max-sm:hidden">
  <div className={`flex flex-col md:h-[330px] max-sm:h-[230px] items-center  p-8 z-10 bg-[#112240] w-full `}>
    <span className="font-monospace text-sm cursor-default accent mb-2 ">Featured Project</span>
    <a href={Object.values(links)[0]}><h3 className="cursor-pointer slate hover-accent text-2xl font-[600] max-sm:text-center">{title}</h3></a>
    <p className={`cursor-default  rounded py-6 px-0 max-w-[500px] dark-slate text-[15px] text-justify my-4 drop-shadow-xl `}>
      {description}
    </p>
    <ul className="flex md:flex-wrap max-sm:grid md:gap-x-4 max-sm:grid-cols-1 max-sm:items-center cursor-default max-w-[500px] items-center text-sm my-1 dark-slate font-monospace whitespace-nowrap ">
      {tags.map((t, i) => (
        <li key={i} >{t}</li>
      ))}
    </ul>

  </div>
  <img src={image} fetchpriority="high" decoding="async" className={`w-full  h-[300px] md:h-[400px] brightness-75 md:blur-0 drop-shadow-2xl `} alt="Project Image" />
  </div>



   <div className="sm:hidden">
    <div className="relative flex flex-col  h-[335px] items-center rounded-3xl w-full ">
      <img
        src={image}
        fetchpriority="high"
        decoding="async"
        className="absolute inset-0 h-full object-cover   drop-shadow-2xl"
        alt="Project Image"
      />
      <div className="relative flex flex-col items-center pt-32  z-20 bg-[rgba(17,34,64,0.65)] inset-0  w-full h-full  ">
        <span className="font-monospace text-sm cursor-default accent mb-2 ">
          Featured Project
        </span>
        <a href={Object.values(links)[0]}>
          <h3 className="cursor-pointer slate hover-accent text-2xl font-[600] max-sm:text-center">
            {title}
          </h3>
        </a>
        <p className="cursor-default rounded py-6 px-0 text-[15px] text-justify my-4 drop-shadow-xl max-sm:hidden">
          {description}
        </p>
        <ul className="flex md:flex-wrap max-sm:grid md:gap-x-4 max-sm:grid-cols-2 max-sm:gap-x-2 max-sm:items-center cursor-default max-w-[500px] items-center text-sm my-1 text-slate-300 font-monospace whitespace-nowrap">
          {tags.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
        </div>



  

</div>


    )
}
