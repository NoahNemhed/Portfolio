import React, { useEffect, useState } from 'react'
import Arrow from '../assets/Images/arrow.svg'
import Arrow2 from '../assets/Images/Arrow2.svg'
import Arrow3 from '../assets/Images/Arrow3.svg'
import Linkedin from '../assets/Images/Linkedin.svg'
import Git from '../assets/Images/Github.svg'
import Vector from '../assets/Images/VectorPage2.svg'
import Vector2 from '../assets/Images/VectorProject.svg'
import btnpurple from '../assets/Images/btnpurple.svg'
import Line2 from '../assets/Images/Line2.svg'
import Plus from '../assets/Images/Plus.svg'
import { useNavigate } from 'react-router-dom';
import CV from '../assets/Images/CVENG.pdf'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

  const [showText, setShowText] = useState([false, false, false, false]);
  const navigate = useNavigate();
  const handleClick = (index) => {
    const newShowText = [...showText];
    newShowText[index] = !newShowText[index];
    setShowText(newShowText);
  };

  useEffect(() => {
    AOS.init({
      
    });
  }, []);

  return (
    <div>
      <section className='sm:h-[400px] max-sm:h-[770px] md:h-[1000px] lg:h-[1000px] w-full bg-[#070707] '>

        <section className='flex sm:py-8 max-sm:pt-4 sm:justify-between max-sm:gap-x-36 max-sm:px-4  container mx-auto max-xl:pl-12'>

          <div className='max-sm:pt-1' data-aos="fade-down" data-aos-delay="50"> 
              <h1  className='text-[#FFF] text-xl font-[PowerMedium]'>Noah Nemhed</h1>
          </div>
            
          <a  data-aos="fade-down" data-aos-delay="400" href={CV}  className=' flex md:gap-x-0  items-center lg:w-[250px] max-sm:w-[100px] max-sm:border-none max-sm:bg-[#070707] md:w-[200px] lg:pl-6   rounded-full sm:p-0.5 p-1 '>
          <img  className="md:pl-4" src={Arrow} alt="" /> 
          <h1  className='text-xl text-[#FFF] font-[PowerLight] md:pl-3 max-sm:pl-2 max-sm:pb-1 '>Resume</h1>
        </a>
            

        </section>

        <section className='container mx-auto text-end lg:pr-2 md:pr-6 max-sm:hidden ' data-aos="fade-down" data-aos-delay="600">
          <div className='flex flex-col xl:pr-24'>
              <h1 className='text-sm text-[#a4a4a4] font-extralight [PowerUltraLight]'>Web Design, UX / UI</h1>
              <h1 className='text-sm text-[#a4a4a4] font-extralight [PowerUltraLight]'>Webflow</h1>
              <h1 className='text-sm text-[#a4a4a4] font-extralight [PowerUltraLight]'>Front End Development</h1>
          </div>
        </section>

        <section className='container mx-auto sm:py-32 max-sm:pt-16 max-sm:h-[845px]'>

          <div className='max-xl:pl-8' data-aos="fade-up" data-aos-delay="700">
            <h1 className='text-[#FFF]  md:text-8xl lg:text-[7.2rem] leading-[1] max-sm:text-5xl max-sm:text-left max-sm:pl-8 font-normal max-sm:w-[354px]'>Hi, I'm <span  className='text-[#2A00FF] md:text-8xl lg:text-9xl font-[PowerRegular]'>Noah.</span> <br></br>Junior developer.</h1>
            <section className='md:hidden max-sm:pl-10 pt-7' data-aos="fade-down" data-aos-delay="600">
            <div className='flex flex-col'>
                <h1 className='text-sm text-[#a4a4a4] font-extralight [PowerUltraLight]'>Web Design, UX / UI</h1>
                <h1 className='text-sm text-[#a4a4a4] font-extralight [PowerUltraLight]'>Webflow</h1>
                <h1 className='text-sm text-[#a4a4a4] font-extralight [PowerUltraLight]'>Front End Development</h1>
            </div>
          </section>
            <h2 className='text-[#d5d5d5] md:text-2xl lg:text-3xl font-extralight sm:py-6 max-sm:py-8 pl-2 font-[PowerUltraLight] max-sm:w-[290px] max-sm:pl-10 max-sm:text-left max-sm:text-base'>I assist businesses in creating a powerful visual presence with <br></br> impeccable Web Design. By doing so, they can enhance brand <br></br>recognition and drive greater sales.</h2>
            
          </div>

          <div className='flex items-center justify-between' data-aos="fade-up" data-aos-delay="800">
          <a href="mailto:noahnemhed@hotmail.com" className='hero-button w-[265px] max-sm:w-[215px] max-sm:text-sm max-sm:text-center pr-4 items-center bg-white border-solid border max-sm:pl-8 max-sm:ml-16  flex flex-row-reverse sm:py-3 max-sm:py-2 md:my-4 md:gap-x-4 rounded-full font-[PowerRegular]'><img className='hero-btn-arrow max-sm:w-4 max-sm:mr-2' src={Arrow2} alt="" /> <h1 className='text-[#070707] text-lg max-sm:text-[14px] sm:pr-6 max-sm:pr-6'>Let's have a chat</h1></a>

          <div className='flex flex-col md:pr-4 max-sm:hidden' data-aos="fade-up" data-aos-delay="900" >
            <h1 className='text-[#777777] text-xl font-[PowerLight]'>Connect with me</h1>

            <div className='flex justify-end gap-x-4 py-5 '>
            <a href="https://github.com/NoahNemhed"><img className='hover:' src={Git} alt="" /></a>
            <a href="https://se.linkedin.com/"><img src={Linkedin} className="text-purple fill-purple stroke-purple "alt="" /></a>
            </div>
          </div>
          
          </div>
          

        </section>


      </section>

      <section className='h-[780px] max-sm:h-[1050px] w-full bg-[#070707] max-sm:pl-10'>

        <section className='container mx-auto max-xl:pl-8'>
           <h1 className='text-[#fff] text-6xl font-[PowerRegular] max-sm:text-[32px] ' >What I do</h1>
        </section>

        <section className='container mx-auto flex max-sm:flex-col justify-between max-sm:pt-12'>
              <div className='sm:flex max-sm:flex-col md:py-28 '>
                <img  className="max-sm:hidden"src={Vector} alt='' />
              <div className='flex flex-col sm:pl-12'>
                  <h1 className='text-[#5B5B5B] text-6xl md:pb-4 lg:pb-10 font-[PowerRegular] max-sm:text-[36px]'>01</h1>
                  <h1 className='text-[#fff] md:text-2xl lg:text-3xl py-16 pb-4 font-[PowerRegular] max-sm:text-xl'>Design</h1>
                  <h1 className='text-[#b6b6b6] text-lg lg:text-lg font-[PowerUltraLight] font-extralight max-sm:text-[15px] max-sm:w-[290px]'>I make web designs that engage  your <br></br> audience and create the user experience <br></br> you want.</h1>
                  
              </div>

                <img className="sm:hidden py-8"src={Vector2} alt='' />
              </div>

              <div className='sm:flex max-sm:flex-col md:py-28 '>
                <img  className="max-sm:hidden"src={Vector} alt='' />
              <div className='flex flex-col sm:pl-12'>
                  <h1 className='text-[#5B5B5B] text-6xl md:pb-4 lg:pb-10 font-[PowerRegular] max-sm:text-[36px]'>02</h1>
                  <h1 className='text-[#fff] md:text-2xl lg:text-3xl py-16 pb-4 font-[PowerRegular] max-sm:text-xl'>Development</h1>
                  <h1 className='text-[#b6b6b6] text-lg lg:text-lg font-[PowerUltraLight] font-extralight max-sm:text-[15px] max-sm:w-[290px]'>Bringing visuals to life through developing <br></br> highly functional web solutions.</h1>
              </div>
              <img className="sm:hidden py-8"src={Vector2} alt='' />
              </div>

              <div className='sm:flex max-sm:flex-col md:py-28 ' >
                <img  className="max-sm:hidden"src={Vector} alt='' />
              <div className='flex flex-col sm:pl-12'>
                  <h1 className='text-[#5B5B5B] text-6xl md:pb-4 lg:pb-10 font-[PowerRegular] max-sm:text-[36px]'>03</h1>
                  <h1 className='text-[#fff] md:text-2xl lg:text-3xl py-16 pb-4 font-[PowerRegular] max-sm:text-xl'>The Full Package</h1>
                  <h1 className='text-[#b6b6b6] text-lg lg:text-lg font-[PowerUltraLight] font-extralight max-sm:text-[15px] max-sm:w-[290px]'>Get the best of both worlds for your <br></br> website, capture your brand identity and <br></br> get fully functional features.</h1>
              </div>
              <img className="sm:hidden py-8"src={Vector2} alt='' />
              </div>
        </section>
        



      </section>

      <section className='md:h-[800px] lg:h-[800px] max-sm:h-[780px] w-full bg-[#070707] max-xl:pl-8'>

        <section className='container mx-auto' >
          <div className='flex flex-col gap-12 max-sm:w-[350px] max-sm:pl-0'>
            <div className='flex flex-col' >
                    <div className='flex justify-between items-center'>
                    <h1 className='text-[#fff] text-6xl font-[PowerRegular]'>Selected projects</h1>
                    <div className='hidden md:lg:block'>
                      <a href="mailto:noahnemhed@hotmail.com" className='btnPurpleContainer flex items-center border border-white rounded-[70px] sm-w-[150px] md:lg:w-[296px] h-[60px] justify-center gap-x-24' ><h1 className='text-[#fff] text-xl pl-6'>Get in touch</h1> <img className='btnPurple pt-1 pr-2 hidden sm:hidden md:block lg:block' src={btnpurple} alt='' /></a>
                    </div>
                    
                    </div>
                    <img className='py-8' src={Vector2} alt='' />

              </div>

              <div className='flex flex-col'>
                    <div className='flex justify-between items-center'>
                      <div className='flex flex-col'>
                       <h1 className='text-[#fff] text-6xl max-sm:text-[40px] font-[PowerRegular]'>Tunder</h1>
                       <h1 className='text-[#b6b6b6] text-xl max-sm:text-base max-sm:pt-3 font-[PowerLight] py-1'>Webdevelopment, CMS</h1>
                      </div>
                    
                    <div className=''>
                      <button className='hover:-rotate-0 -rotate-45 max-sm:w-12 max-sm:pr-3' onClick={() => navigate('/project/tunder')}><img src={Arrow3} className='' alt='' /></button>
                    </div>
                    
                    </div>
                    <img className='py-8 max-sm:w-4' src={Vector2} alt='' />

              </div>

              <div className='flex flex-col'  >
                    <div className='flex justify-between items-center'>
                      <div className='flex flex-col'>
                       <h1 className='text-[#fff] text-6xl max-sm:text-[40px] font-[PowerRegular]'>Face recognition</h1>
                       <h1 className='text-[#b6b6b6] text-xl max-sm:text-base max-sm:pt-3 font-[PowerLight] py-1'>Webdevelopment, Backend development, Database management</h1>
                      </div>
                    
                    <div className=''>
                      <button className='hover:-rotate-0 -rotate-45 max-sm:w-12 max-sm:pr-3' onClick={() => navigate('/project/facerecognition')}><img src={Arrow3} className='' alt=''/></button>
                    </div>
                    
                    </div>
                    <img className='py-8' src={Vector2} alt='' />

              </div>

 
            <div className='flex flex-col max-sm:w-400px' >
              <h1 className='text-[#fff] text-3xl font-[PowerRegular] max-sm:text-xl'>Let me tell you all about them.</h1>
              <h1 className='text-[#b6b6b6] text-xl font-[PowerUltraLight] py-3 max-sm:flex max-sm:text-base max-sm:gap-x-4'>Reach out to me at <span className='text-[#2A00FF]'>noahnemhed@hotmail.com</span> </h1>



              </div>
          </div>
           
        </section>



      </section>


      <section className='w-full md:min-h-[1000px] lg:min-h-[1200px] bg-[#070707] py-40 max-sm:w-[390px]'>

          <div className='lg:flex md:flex-col  justify-between container mx-auto max-sm:pl-0 '>

            <div className='flex flex-col md:text-left max-sm:max-w-[300px] max-xl:pl-8' >
              <h1 className='md:text-5xl max-sm:text-4xl max-sm:text lg:text-6xl text-[#fff] font-[PowerRegular] max-sm:w-[330px] '>My way of getting <br></br>things done</h1>
              <h1 className=' max-sm:hidden text-xl font-[PowerUltraLight] text-[#d7d7d7]  max-sm:text-left py-12'>Fast and transparent, the path to owning a website that will <br></br> represent your brand in the best of light is only 4 weeks away. <br></br> Standing by the Waterfall methodology, I assure a step by step <br></br>completion of the whole process.</h1>
              <h1 className='sm:hidden text-xl font-[PowerUltraLight] text-[#d7d7d7] max-sm:max-w-[352px] max-sm:text-left py-6'>Fast and transparent, the path to owning a website  that will represent your brand in the best of light is only 4 weeks away. Standing by the Waterfall methodology, I assure a step by step completion of the whole process.</h1>
            </div>

            <div className='flex flex-col gap-y-10 max-sm:w-[350px] max-sm:pt-8 max-xl:pl-8'>

              <div className='flex flex-col' >
                <div className='flex justify-between'>
                    <div>
                      <h1 className='text-3xl text-[#fff] font-[PowerLight] max-sm:text-[18px]'>01. UX/Wireframing</h1>
                    </div>
                    <img className="md:pr-4" src={Plus} onClick={() => handleClick(0)} alt=''/>
                </div>
                <img src={Line2} className='py-4' alt='' />
                {showText[0] && <div className='text-lg xl:text-xl text-[#d1d1d1] font-[PowerUltraLight] max-w-[545px] xl:max-w-[1000px]   py-2 font-extralight max-sm:text-[16px]'>In the initial phase of crafting your website, we embark on the UI/UX design journey. This pivotal step involves a collaborative process, where I work closely with you to understand your brand identity, target audience, and design preferences. Through thorough research and analysis, I create intuitive and visually engaging user interfaces that prioritize a seamless user experience. Regular feedback sessions ensure that the design aligns seamlessly with your vision, resulting in a tailored and aesthetically pleasing website that resonates with your audience.</div>}
              </div>

              <div className='flex flex-col' >
                <div className='flex justify-between'>
                    <div>
                      <h1 className='text-3xl text-[#fff] font-[PowerLight] max-sm:text-[18px]'>02. Web Design</h1>
                    </div>
                    <img className="md:pr-4" src={Plus} onClick={() => handleClick(1)} alt='' />
                </div>
                <img src={Line2} className='py-4' alt='' />
                {showText[1] && <div className='text-lg xl:text-xl text-[#d1d1d1] font-[PowerUltraLight] max-w-[545px] xl:max-w-[1000px]  py-2 font-extralight max-sm:text-[16px]'>Following the UI/UX design phase, we seamlessly transition into web design. With the insights gathered from our collaborative design process, I translate the approved visual elements into a fully functional and responsive website. Employing the latest web design principles, I focus on creating an interface that not only captivates visitors visually but also prioritizes accessibility and user-friendly navigation. This stage ensures that your website not only looks impressive but also performs optimally across various devices, delivering a cohesive and engaging online experience.</div>}
              </div>

              <div className='flex flex-col' >
                <div className='flex justify-between'>
                    <div>
                      <h1 className='text-3xl text-[#fff] font-[PowerLight] max-sm:text-[18px]'>03. Web Development</h1>
                    </div>
                    <img className="md:pr-4" src={Plus} onClick={() => handleClick(2)} alt='' />
                </div>
                <img src={Line2} className='py-4' alt='' />
                {showText[2] && <div className='text-lg xl:text-xl text-[#d1d1d1] font-[PowerUltraLight] max-w-[545px] xl:max-w-[1000px]  py-2 font-extralight max-sm:text-[16px]'>Upon finalizing the web design, we seamlessly progress to the web development phase. Using cutting-edge technologies and coding practices, I bring the envisioned design to life, creating a robust and functional website. This stage involves meticulous coding, database integration, and implementation of any desired functionalities. Throughout the web development process, I prioritize clean code, performance optimization, and responsiveness, ensuring that your website functions seamlessly across different platforms. Regular updates and collaboration guarantee that the development aligns with your expectations and business objectives.</div>}
              </div>

              <div className='flex flex-col'>
                <div className='flex justify-between'>
                    <div>
                      <h1 className='text-3xl text-[#fff] font-[PowerLight] max-sm:text-[18px]'>04. Analytics Setup / Support</h1>
                    </div>
                    <img className="md:pr-4" src={Plus} onClick={() => handleClick(3)} alt='' />
                </div>
                <img  src={Line2} className='py-4 ' alt='' />
                {showText[3] && <div className='text-lg xl:text-xl text-[#d1d1d1] font-[PowerUltraLight] max-w-[545px] xl:max-w-[1000px]  py-2 font-extralight max-sm:text-[16px]'>After completing the web development phase, we shift our focus to analytics and support. This critical step involves the implementation of analytics tools to track user engagement, monitor website performance, and gather valuable insights. By leveraging data-driven metrics, we can refine and optimize the website for continuous improvement. Furthermore, my commitment extends beyond the launch. I provide ongoing support to address any issues, implement updates, and ensure the website remains secure and up-to-date. This comprehensive approach aims to empower your online presence by combining proactive analysis with responsive support, ensuring the long-term success of your digital platform.</div>}
              </div>
              </div>
            
          </div>

      </section>


      <section className='w-full md:h-[500px] lg:h-[550px] bg-[#070707] max-xl:pl-8' >
        <div className='container mx-auto flex flex-col' >

          <div className='flex justify-between max-sm:flex-col max-sm:pl-0'>
            <h1 className='sm:max:text-2xl text-6xl text-[#fff] font-[PowerRegular] max-sm:text-3xl max-sm:pt-16' >Let's talk about a <br></br>project, collaboration or <br></br>an idea you may have</h1>
            <div className='flex items-end max-sm:pt-8'>
            <a href="mailto:noahnemhed@hotmail.com" className='button-container flex gap-x-4 items-center w-[214px] sm:h-[50px] pl-6 max-sm:pl-8 bg-[#2A00FF] rounded-full p-2 self-end'> <h1 className='text-lg text-[#FFF] font-[PowerLight] '>Get in touch</h1> <img src={Arrow3} alt=""  className='arrow sm:pl-6 max-sm:w-3 max-sm:pt-1 h-[23px] text-[#fff]' /></a>
            </div>
            

          </div>

          <img src={Line2} alt="" className='md:py-10 sm:py-20 max-sm:py-10'/>

          <div className='flex justify-between max-sm:pb-4'>
            <h1 className='text-[#fff] text-xl font-[PowerLight] max-sm:text-base'><span className='text-[#8d8d8d] font-[PowerRegular] pr-1' >©</span>2023 Noah Nemhed, All Rights Reserved.</h1>

            <div className='flex md:gap-x-6 max-sm:gap-x-4 md:pr-4 max-sm:pr-2' >
            <a href="https://github.com/NoahNemhed"><img src={Git} alt="" /></a>
            <a href="https://se.linkedin.com/"><img src={Linkedin} alt="" /></a>
            </div>
          </div>



        </div>

      </section>
      
    </div>
  )
}

export default Home
