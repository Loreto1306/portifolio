import { BsFolder2Open } from "react-icons/bs"
import { BsGithub } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";

export default function Projects(){
    return(
        <>
            <p className="text-xl flex justify-center font-mono">Meus Projetos</p>
            <div className="w-full min-h-screen flex items-center font-mono justify-center">
                <div className="grid min-h-32 grid-cols-1 justify-center min-h-32 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1000px] w-full p-4">
                    {/* Card 1 */}
                    <div className="bg-gray-800 sm:h-0 min-h-92 text-white rounded-lg p-6 shadow-md flex flex-col  h-full">
                        <div className="flex justify-between items-start">
                            <BsFolder2Open className="w-8 h-8 text-[#36cb80]" />
                            <div className="flex gap-5">
                                <a href="https://github.com/Loreto1306/blood-reader-web-react" target="_blank">
                                    <BsGithub className="w-6 h-6 opacity-50 text-white cursor-pointer hover:opacity-75 transition-colors" />
                                </a>
                                <a href="https://blood-reader-n15hyd5yl-loreto1306s-projects.vercel.app/" target="_blank">
                                    <FiExternalLink className="w-6 h-6 opacity-50  cursor-pointer hover:opacity-75 transition-colors" />
                                </a>
                            </div>
                        </div>
                        <p className="mt-8 font-bold">Nova Tech</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-800 sm:h-0 min-h-92 text-white rounded-lg p-6 shadow-md flex flex-col  h-full">
                        <div className="flex justify-between items-start">
                            <BsFolder2Open className="w-8 h-8 text-[#36cb80]" />
                            <div className="flex gap-5">
                                <a href="https://github.com/Loreto1306/blood-reader-web-react" target="_blank">
                                    <BsGithub className="w-6 h-6 opacity-50 text-white cursor-pointer hover:opacity-75 transition-colors" />
                                </a>
                                <a href="" target="_blank">
                                    <FiExternalLink className="w-6 h-6 opacity-50  cursor-pointer hover:opacity-75 transition-colors" />
                                </a>
                            </div>
                        </div>
                        <p className="mt-8 font-bold">Cadastro e Histórico de Pacientes</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-800 sm:h-0 min-h-92 text-white rounded-lg p-6 shadow-md flex flex-col  h-full">
                        <div className="flex justify-between items-start ">
                            <BsFolder2Open className="w-8 h-8 text-[#36cb80]" />
                            <div className="flex gap-5">
                            <a href="https://github.com/Loreto1306/blood-reader-web-react" target="_blank">
                                <BsGithub className="w-6 h-6 opacity-50 text-white cursor-pointer hover:opacity-75 transition-colors" />
                            </a>
                                <a href="https://blood-reader-n15hyd5yl-loreto1306s-projects.vercel.app/" target="_blank">
                                    <FiExternalLink className="w-6 h-6 opacity-50  cursor-pointer hover:opacity-75 transition-colors" />
                                </a>
                            </div>
                        </div>
                        <p className="mt-8 font-bold">Projeto 3</p>
                    </div>

                    {/* Card 4 */}
                    {/*<div className="bg-gray-800 sm:h-0 min-h-72 text-white rounded-lg p-6 shadow-md flex flex-col  h-full">
                        <div className="flex justify-between items-start">
                            <BsFolder2Open className="w-8 h-8 text-[#36cb80]" />
                            <div className="flex gap-5">
                                <BsGithub className="w-6 h-6 opacity-50 text-white cursor-pointer hover:opacity-75 transition-colors" />
                                <FiExternalLink className="w-6 h-6 opacity-50  cursor-pointer hover:opacity-75 transition-colors" />
                            </div>
                        </div>
                        <p className="mt-8">Projeto 4</p>
                    </div>

                    {/* Card 5 
                    <div className="bg-gray-800 sm:h-0 min-h-72 text-white rounded-lg p-6 shadow-md flex flex-col  h-full">
                        <div className="flex justify-between items-start">
                            <BsFolder2Open className="w-8 h-8 text-[#36cb80]" />
                            <div className="flex gap-5">
                                <BsGithub className="w-6 h-6 opacity-50 text-white cursor-pointer hover:opacity-75 transition-colors" />
                                <FiExternalLink className="w-6 h-6 opacity-50  cursor-pointer hover:opacity-75 transition-colors" />
                            </div>
                        </div>
                        <p className="mt-8">Projeto 5</p>
                    </div>

                    {/* Card 6 
                    <div className="bg-gray-800 sm:h-0 min-h-72 text-white rounded-lg p-6 shadow-md flex flex-col  h-full">
                        <div className="flex justify-between items-start">
                            <BsFolder2Open className="w-8 h-8 text-[#36cb80]" />
                            <div className="flex gap-5">
                                <BsGithub className="w-6 h-6 opacity-50 text-white cursor-pointer hover:opacity-75 transition-colors" />
                                <FiExternalLink className="w-6 h-6 opacity-50  cursor-pointer hover:opacity-75 transition-colors" />
                            </div>
                        </div>
                        <p className="mt-8">Projeto 6</p>
                    </div>*/}
                </div>
            </div>
        </>
    )
}