export default function About(){
    return (
        <>
        <div id="about"></div>
        <div  style={{width: "-webkit-fill-available"}} className="h-screen justify-evenly flex relative mt-20 sm:mt-12 lg:mt-60 md:mt-60">
            <div   className="max-w-[900px] flex flex-wrap flex-col">
                <div className=" flex text-lg pb-4 text-[#36cb80] " >
                    <span className="font-mono">01.</span> <h4 className="font-bold text-xl ml-2 text-white"> About Me</h4><hr className="max-w-[900px]" />
                </div>
                <div className=" text-md text-[#9aabd1] max-w-[550px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rerum voluptatibus cupiditate non est, quas maxime, obcaecati asperiores nemo iure praesentium corporis. Perferendis, pariatur dolores itaque amet repellat soluta quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorem deleniti mollitia ipsa, eos omnis dolore velit blanditiis, 
                    <div className="mt-6">
                        Sou graduando na Faculdade Fundação Escola de Comércio Álvares Penteado <a href="https://www.fecap.br/" target="_blank" className="group text-[#6effbc]  transition-all duration-300 ease-in-out"> <span className="bg-left-bottom mt-2 bg-gradient-to-r from-green-600 to-green-300 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">(FECAP)</span></a>.
                    </div>
                    <div className="mt-6">
                        Aqui estão algumas tecnologias que resolvi me aventurar recentemente:
                    </div>
                </div>
                
            </div>
            <div className="relative w-80 h-80">
                {/* <img className="w-full h-full object-cover relative z-10" src="GRAVES.jpg" alt=""> */}
                <div className="absolute inset-0 bg-[#2aff94] z-10 opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute w-[100%] h-[100%] border-2 border-[#2aff94] -bottom-5 -right-5 z-0"></div>
            </div>
        </div>
        </>
    )
}