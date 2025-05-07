import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";

export default function Footer(){
    return(
        <footer className="relative w-full bg-[#0a192f] text-white flex flex-col items-center justify-center py-6">
            {/* Barra lateral esquerda com redes sociais */}
            <div className="hidden lg:flex flex-col fixed left-8 bottom-0 items-center gap-9">
                {/* Ícones */}
                <a href="https://www.linkedin.com/in/artur-loreto" target="_blank" rel="noreferrer">
                    <BsInstagram className="opacity-50 hover:text-[#12ff87] transition-colors w-6 h-6" />
                </a>
                <a href="https://github.com/Loreto1306" target="_blank" rel="noreferrer">
                    <BsGithub className="opacity-50 hover:text-[#12ff87] transition-colors w-7 h-7" />
                </a>
                <a href="https://www.linkedin.com/in/artur-loreto" target="_blank" rel="noreferrer">
                    <BsLinkedin className="opacity-50 hover:text-[#12ff87] transition-colors w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/artur-loreto" target="_blank" rel="noreferrer">
                    <BsTwitterX className="opacity-50 hover:text-[#12ff87] transition-colors w-6 h-6" />
                </a>
                {/* Linha abaixo dos ícones */}
                <div className="w-px h-24 bg-white opacity-30 mt-2" />
            </div>
            

            {/* Barra lateral direita com email */}
            <div className="hidden lg:flex flex-col fixed  right-[-60px] bottom-0 items-center gap-4">
                <p className="text-xs  opacity-75 rotate-90 tracking-widest hover:text-[#79ffbb] cursor-pointer transition-colors">
                    tucorodriguesloreto@hotmail.com.br
                </p>
                <div className="w-px h-24 mt-28 bg-white opacity-40 mt-2" />
            </div>

            {/* Rodapé central inferior */}
            <div className="text-center mt-16 text-sm text-gray-400">
                <p>Designed & Built by <span className="text-white font-semibold">Artur Loreto</span></p>
                <div className="flex justify-center items-center gap-2 mt-1">
                    <span>★ 3</span>
                    <span>🍴 1</span>
                </div>
            </div>
        </footer>
    )
}