import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react'

const TechStack = () => {
    return (
        <ul>
        <div id="TechStack" className='text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
            <div>
                <h2 className='text-3xl md:text-5xl font-bold flex flex-col items-center mb-8 text-[#ff8c00]'>Tech Stack</h2>
                <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-8 gap-5">


                        <div data-aos="fade-up-right" data-aos-duration="1000" className="aos-init aos-animate">
                            <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                                    <img alt="HTML icon" className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300" src="html.svg" />
                                </div>
                                <span className="text-gray-200 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300 text-nowrap">HTML</span>
                                <div className="w-full">
                                    <div className="bg-gray-200 rounded-full h-2 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                                        <div className="bg-green-600 h-2 rounded-full w-[90%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div data-aos="fade-up" data-aos-duration="1200" className="aos-init aos-animate">
                            <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                                    <img alt="CSS icon" className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300" src="css.svg" />
                                </div>
                                <span className="text-gray-200 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300 text-nowrap">CSS</span>
                                <div className="w-full">
                                    <div className="bg-gray-200 rounded-full h-2 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                                        <div className="bg-green-600 h-2 rounded-full w-[75%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div data-aos="fade-up-right" data-aos-duration="1000" className="aos-init aos-animate">
                            <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                                    <img alt="JavaScript icon" className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300" src="javascript.svg" />
                                </div>
                                <span className="text-gray-200 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300 text-nowrap">JavaScript</span>
                                <div className="w-full">
                                    <div className="bg-gray-200 rounded-full h-2 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                                        <div className="bg-green-600 h-2 rounded-full w-[82%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div data-aos="fade-up" data-aos-duration="1000" className="aos-init aos-animate">
                            <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                                    <img alt="Bootstrap icon" className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300" src="bootstrap.svg" />
                                </div>
                                <span className="text-gray-200 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300 text-nowrap">Bootstrap</span>
                                <div className="w-full">
                                    <div className="bg-gray-200 rounded-full h-2 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                                        <div className="bg-green-600 h-2 rounded-full w-[70%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div data-aos="fade-up-right" data-aos-duration="1200" className="aos-init aos-animate">
                            <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                                    <img alt="TailwindCSS icon" className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300" src="tailwind.svg" />
                                </div>
                                <span className="text-gray-200 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300 text-nowrap">TailwindCSS</span>
                                <div className="w-full">
                                    <div className="bg-gray-200 rounded-full h-2 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                                        <div className="bg-green-600 h-2 rounded-full w-[77%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up-right" data-aos-duration="1200" className="aos-init aos-animate">
                            <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                                    <img alt="TailwindCSS icon" className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300" src="reactjs.svg" />
                                </div>
                                <span className="text-gray-200 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300 text-nowrap">React Js</span>
                                <div className="w-full">
                                    <div className="bg-gray-200 rounded-full h-2 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                                        <div className="bg-green-600 h-2 rounded-full w-[77%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up-right" data-aos-duration="1200" className="aos-init aos-animate">
                            <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                                    <img alt="TailwindCSS icon" className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300" src="nextjs.svg" />
                                </div>
                                <span className="text-gray-200 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300 text-nowrap">Next Js</span>
                                <div className="w-full">
                                    <div className="bg-gray-200 rounded-full h-2 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                                        <div className="bg-green-600 h-2 rounded-full w-[77%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up-right" data-aos-duration="1200" className="aos-init aos-animate">
                            <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                                    <img alt="TailwindCSS icon" className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300" src="nodejs.svg" />
                                </div>
                                <span className="text-gray-200 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300 text-nowrap">Node Js</span>
                                <div className="w-full">
                                    <div className="bg-gray-200 rounded-full h-2 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                                        <div className="bg-green-600 h-2 rounded-full w-[77%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up-right" data-aos-duration="1200" className="aos-init aos-animate">
                            <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                                    <img alt="TailwindCSS icon" className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300" src="expressjs.svg" />
                                </div>
                                <span className="text-gray-200 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300 text-nowrap">Express Js</span>
                                <div className="w-full">
                                    <div className="bg-gray-200 rounded-full h-2 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                                        <div className="bg-green-600 h-2 rounded-full w-[77%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up-right" data-aos-duration="1200" className="aos-init aos-animate">
                            <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
                                    <img alt="TailwindCSS icon" className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300" src="mongodb.svg" />
                                </div>
                                <span className="text-gray-200 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300 text-nowrap">MongoDB</span>
                                <div className="w-full">
                                    <div className="bg-gray-200 rounded-full h-2 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                                        <div className="bg-green-600 h-2 rounded-full w-[77%]"></div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
        </ul>
    )
}

export default TechStack
