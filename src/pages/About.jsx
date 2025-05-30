export default function About(){
    const skills = [
        ['JavaScript (ES6+)', 'TypeScript'],
        ['Python', 'PHP'],
        ['React', 'Flask'],
        ['Node.js', ''],
      ];
    return (
        <>
        <div id="about"></div>
        <div  style={{width: "-webkit-fill-available"}} className="justify-center mb-60 justify-evenly flex relative mt-20 sm:mt-12 lg:mt-60 md:mt-60">
            <div   className="max-w-[900px] flex flex-wrap flex-col">
                <div className=" flex pb-4 text-[#36cb80] text-2xl font-bold text-gray-100 border-b border-gray-700 pb-2" >
                    <span className="font-mono text-teal-400">01.</span> <h4 className="font-bold ml-2 text-white"> About Me</h4><hr className="max-w-[900px]" />
                </div>
                <div className=" text-lg text-[#9aabd1] max-w-[550px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore rerum voluptatibus cupiditate non est, quas maxime, obcaecati asperiores nemo iure praesentium corporis. Perferendis, pariatur dolores itaque amet repellat soluta quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorem deleniti mollitia ipsa, eos omnis dolore velit blanditiis, 
                    <div className="mt-6">
                        Sou graduando na Faculdade Fundação Escola de Comércio Álvares Penteado <a href="https://www.fecap.br/" target="_blank" className="group text-[#6effbc]  transition-all duration-300 ease-in-out"> <span className="bg-left-bottom mt-2 bg-gradient-to-r from-green-600 to-green-300 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">(FECAP)</span></a>.
                    </div>
                    <div className="mt-6">
                        Here are a few technologies I've been working with recently:
                    </div>
                    <div className="mt-8 font-mono text-sm">
                        <div className="grid grid-cols-2 gap-x-10 gap-y-2">
                            {skills.map((pair, index) => (
                                pair.map((skill, i) => (
                                    <div key={`${index}-${i}`} className="flex items-center">
                                        <span className="text-teal-400 mr-2">▸</span>
                                        <span>{skill}</span>
                                    </div>
                                ))
                            ))}
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="relative w-80 h-80">
                {/* <img className="w-full h-full object-cover relative z-10" src="icon.png" alt=""/> */}
                <div className="absolute inset-0 bg-[#2aff94] z-10 opacity-50 hover:opacity-0 transition-opacity duration-300"></div>
                <div className="absolute w-[100%] h-[100%] border-2 border-[#2aff94] -bottom-5 -right-5 z-0"></div>
            </div>
        </div>
        </>
    )
}