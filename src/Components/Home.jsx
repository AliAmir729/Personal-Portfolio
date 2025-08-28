import React from 'react'
import TextChange from './TextChange'

const Home = () => {
  return (
    <div 
      id='Home' 
      className='text-white flex flex-col-reverse md:flex-row w-full justify-between items-center p-6 md:p-20'
    >
      {/* Text Section */}
      <div className="md:w-2/4 md:pt-10 text-center md:text-left">
        <h1 className='text-3xl md:text-6xl font-bold leading-normal tracking-tighter'>
          <TextChange />
        </h1>
        <p className='text-sm md:text-xl tracking-tight mt-8 mb-8 text-gray-300'>
         "Hello! I’m Ali Amir, a passionate MERN Stack Developer with hands-on experience in building web applications and solving complex programming problems. I started my journey in game development, which sharpened my problem-solving and logical thinking skills, and later transitioned into full-stack web development. I have worked on projects ranging from frontend clones to full-stack applications, and I’m continuously learning new technologies to grow as a developer."
        </p>
        <a href="#Contact" className='mt-5 md:mb-10 text-white py-2 px-4 text-sm md:text-lg hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'> Contact me</a>  
         
        
      </div>

      {/* Image Section */}
      {/* <div className="flex justify-center md:justify-end md:w-2/4">
        <img 
          className='rounded-full w-60 h-60 md:w-80 md:h-80 object-cover' 
          src="personal_pic.jpeg" 
          alt="pic" 
        />
      </div> */}

      <div className="flex justify-center md:justify-end md:w-2/4">
  <div className="relative group w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)] transform transition-all duration-700">
    
    {/* Border animation */}
    <div className="absolute inset-0 border-4 border-white/20 rounded-full z-20 transition-all duration-700 group-hover:border-white/40 group-hover:scale-105"></div>

    {/* Gradient overlay - top/bottom */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden sm:block"></div>

    {/* Actual Image */}
    <img 
      src="personal_pic.jpeg" 
      alt="pic" 
      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2" 
      loading="lazy"
    />

    {/* Shine & pulse effects */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden sm:block">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100"></div>
      <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse"></div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Home
