import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import projects from "../assets/data/projects";

export default function FeaturedProject() {
    return (

        <section className="bg-[#0a192f] text-gray-300 px-6 py-12 font-sans flex justify-center">
            <div className="max-w-6xl w-full">
                {/* Título da Seção */}
                <div className="mb-12">
                    <h3 className="text-teal-400 text-sm"></h3>
                    <h2 className="text-2xl font-bold text-gray-100 border-b border-gray-700 pb-2">
                        <span className="text-teal-400 font-mono">03. </span>Some Things I’ve Built
                    </h2>
                </div>

                {/* Projeto Destacado */}

                {projects.map((project) => (
                    <>
                        <div className=" flex flex-col mb-48 md:flex-row items-center md:items-start gap-8">
                            <div className="border-solid border-white flex-1 relative group overflow-hidden rounded-xl shadow-lg">
                                <a href="" target="_blank">
                                    {/* Imagem */}
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-auto transition-opacity duration-500 group-hover:opacity-100"
                                    />
                                    {/* Overlay verde */}
                                    <div className="absolute inset-0 bg-[#17ff8a] opacity-60 group-hover:opacity-0 transition-opacity duration-500 mix-blend-overlay pointer-events-none"></div>
                                </a>
                            </div>

                            <div className="flex-1 justify font-mono relative z-10">
                                <p className=" flex justify-end text-teal-400 text-sm mb-1">Featured Project</p>
                                <h3 className="flex justify-end  text-2xl text-gray-300 relative right-0 text-gray-100 font-semibold mb-4">
                                    {project.title}
                                </h3>

                                <div className="bg-[#112240] font-mono p-5 rounded text-md shadow-md mb-4 leading-relaxed">
                                    {project.description}
                                    {/* {" "}
                                    <a href="#" className="text-teal-400 underline">
                                        Visual Studio Marketplace
                                    </a>
                                    ,{" "}
                                    <a href="#" className="text-teal-400 underline">
                                        Package Control
                                    </a>
                                    ,{" "}
                                    <a href="#" className="text-teal-400 underline">
                                        Atom Package Manager
                                    </a>
                                    , and{" "}
                                    <a href="#" className="text-teal-400 underline">
                                        npm
                                    </a>
                                    . */}
                                </div>
                                <ul className="flex font-mono flex-wrap text-s gap-x-4 text-gray-400 mb-3">
                                    {project.technologies.map((tech, index) => (
                                        <li key={index} >{tech}</li>
                                    ))}
                                </ul>

                                <div className="inline-flex gap-4 mt-2 text-gray-300 text-xl">
                                    <a href="#" className="hover:text-teal-400">
                                        <BsGithub />
                                    </a>
                                    <a href="#" className="hover:text-teal-400">
                                        <FiExternalLink />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </>
                ))}
            {/* Conteúdo */}
            </div>
        </section>
    );
}