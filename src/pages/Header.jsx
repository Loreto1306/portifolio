import './Header.css'
export default function Header(){
    return(
        <>
        <header id="container-header" className="items-center flex justify-between p-8 text-sm">
            <a href="">
                <div className="logo-container">
                    <div className="hexagon">
                        <span className="letter">L</span>
                    </div>
                </div>
            </a>

        <div id="container-nav" className="font-mono items-center flex gap-10 right-5 relative ">
            <a href="#about" className="group text-[#36cb80] transition-all duration-300 ease-in-out">
                <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    01.<span className="text-gray-300"> About</span></span>
            </a>
            
            <a href="" className="group text-[#36cb80] transition-all duration-300 ease-in-out">
                <span className="bg-left-bottom mt-2 bg-gradient-to-r from-green-600 to-green-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    02.<span className="text-gray-300"> Experience</span></span>
            </a>
            
            <a href="" className="group text-[#36cb80] transition-all duration-300 ease-in-out">
                <span className="bg-left-bottom bg-gradient-to-r from-green-600 to-green-300  bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    03.<span className="text-gray-300"> Work</span></span>
            </a>
            
            <a href="" className="group text-[#36cb80]  transition-all duration-300 ease-in-out">
                <span className="bg-left-bottom mt-2 bg-gradient-to-r from-green-600 to-green-300 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    04.<span className="text-gray-300"> Contact</span></span>
            </a>
            <a href=""  id="button-resume" className=" p-4 left-4 hover:border-b-[5px] hover:border-t-[1px] hover:border-l-[1px] hover:border-r-[5px] relative border border-[#36cb80] rounded-md">
                Resume
            </a>
        </div>
    </header>
        </>
    )
}