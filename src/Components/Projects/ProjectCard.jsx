import React from 'react'

    const ProjectCard = ({ title, main, imgSrc, demoLink, githubLink }) => {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#111635] shadow-xl shadow-slate-900 rounded-2xl'>
      <img src={imgSrc} alt={title} className='p-4 rounded-xl' />
      
      <h3 className='px-4 text-xl md:text-2xl font-bold leading-normal'>
        {title}
      </h3>
      
      <p className='px-4 text-sm text-gray-300 md:text-md leading-tight py-2'>
        {main}
      </p>
      
      <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4 '>
        <a 
          href={demoLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className='text-white py-2.5 px-4 text-sm hover:opacity-85 duration-300 hover:scale-105 font-bold rounded-full bg-[#465697]'
          //  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-full text-sm px-4 py-2.5 text-center me-2 mb-2"
        >
          Live demo
        </a>
        
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
         className='text-white py-2.5 px-4 text-sm hover:opacity-85 duration-300 hover:scale-105 font-bold rounded-full bg-[#465697]'
          //  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-full text-sm px-4 py-2.5 text-center me-2 mb-2"
        >
          Github Link
        </a>
      </div>
    </div>
  )
}



export default ProjectCard
