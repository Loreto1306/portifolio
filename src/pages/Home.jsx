import './App.css'

export default function Home() {

  return (
    <>
      <div className="h-screen max-h-[600px] justify-center items-center flex relative">
        <div id="container-profile" style={{width: "-webkit-fill-available"}} className="max-w-[900px] flex flex-wrap flex-col">
            <div className="text-lg pb-4 text-[#36cb80]">
                <h4>Hi, my name is</h4>
            </div>
            <div className="font-bold text-6xl pb-4">
                <h1>Artur Loreto.</h1>
            </div>
            <div className="font-bold text-6xl pb-8 text-[#b9ceff96]">
                <h1>I build things for the web.</h1>
            </div>
            <div className=" text-md text-[#9aabd1] max-w-[550px]">
                I'm a full-stack developer spacializing in building exceptional digital experiences. Currently, I'm focused on building modern, simple and needed aplications for engineering projects at 
                <a href="https://www.genpro.com.br/" target='_blank' className="group text-[#6effbc]  transition-all duration-300 ease-in-out"> <span className="bg-left-bottom mt-2 bg-gradient-to-r from-green-600 to-green-300 bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">GENPRO LTDA</span></a> .
            </div>
            <div className="mt-12 max-w-[250px] relative ">
              <a
                target="_blank"
                href="https://github.com/Loreto1306"
                id="teste"
                className="hover:-ml-2 p-4 hover:border-[#36cb80] max-w-54 border border-[#36cb80] rounded text-center hover:-translate-y-[5px] hover:-translate-x-[5px] transition-transform duration-300 block"
                style={{
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'rgba(100, 255, 218, 1) 4px 4px 0px 0px';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Check out my projects!
              </a>
            </div>
        </div>
      </div>
    </>
  )
}