import React from 'react'
import ProjectCard from './ProjectCard'

const projects = () => {
    return (
        <div id="Projects" className='p-10 md:p-24 text-green-500'>
            <h1 className='text-2xl md:text-4xl text-[#ff8c00] hover:text-[#ffdd57] font-bold'>Projects</h1>
            <div className='py-12 px-8 flex flex-wrap gap-5'>
                <ProjectCard
                    title="Blog_app"
                    main="A Full Stack blog website developed in Nextjs and mongodb where admin posts the blogs on fifferent topics of LifeStyle, Tech and Startup topics."
                    imgSrc="blogpic.png"
                    demoLink="https://blogger-by-ali.vercel.app/"
                    githubLink="https://github.com/AliAmir729/Blogger" />
                    
                <ProjectCard
                    title="Password Manager"
                    main="A full stack password manager app with secure storage and CRUD functionality using MongoDB and Next.js."
                    imgSrc="PassOpPic.png"
                    demoLink="https://passmanager-mongodb.vercel.app/"
                    githubLink="https://github.com/AliAmir729/passmanager-mongodb" />
                <ProjectCard
                    title="ToDo App"
                    main="A simple todo list app with add, delete and complete features developed using React and tailwindcss.Data is  saving in local storage for now." 
                    imgSrc="TodoPic.png"
                    demoLink="https://todo-app-in-react-alpha.vercel.app/"
                    githubLink="https://github.com/AliAmir729/Todo-App-in-React"  />
                    
                <ProjectCard
                    title="Twitter Frontend clone"
                    main="A simple Twitter frontend clone built with Tailwind CSS (UI only, no functionality)." 
                    imgSrc="TwittterPic.png"
                    demoLink="https://twitter-clone-eta-gray.vercel.app/"
                    githubLink="https://github.com/AliAmir729/Twitter-clone" />

                <ProjectCard
                    title="Quiz App"
                    main="An interactive quiz app with multiple choice questions, scoring, and instant feedback using HTML,CSS and Javascript.Admin can add more questions after putting password."
                    imgSrc="QuizPic.png"
                    demoLink="https://quiz-app-nu-ten-91.vercel.app/"
                    githubLink="https://github.com/AliAmir729/Quiz-App" />


            </div>
        </div>
    )
}

export default projects
