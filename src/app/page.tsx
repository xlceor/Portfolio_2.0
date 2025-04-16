import Image from "next/image";
import Card from "@/app/card";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiExpress, SiFlask, SiMysql, SiSqlite } from "react-icons/si";
import { IconType } from "react-icons";

interface IconProps {
  Icon: IconType;
}

export const GradientSvgIcon: React.FC<IconProps> = ({ Icon }) => (
  <>
    <svg width="0" height="0">
      <linearGradient id="svg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop stopColor="#34d399" offset="0%" />
        <stop stopColor="#06b6d4" offset="100%" />
      </linearGradient>
    </svg>
    <Icon
      style={{
        width: "4rem",
        height: "4rem",
        fill: "url(#svg-gradient)",
      }}
    />
  </>
);

export default function Home() {
  
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen  pb-20 gap-16 sm:py-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex min-h-[50dvh] flex-col h-full  items-center justify-center">
        <span className='shadow-animated  -z-50  h-0 w-full mt-20'></span>
          <div className="font-extrabold text-8xl text-transparent bg-clip-text bg-animated pb-6">
            CARLOS OSORIO
          </div>
          <div className="p-3">
            Aprendiz de <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-br  from-green-400 via-emerald-600 to-cyan-600">todo</span> , Maestro en <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-br from-orange-600  via-red-500 to-rose-700">descomponer</span>  cosas... Pero <span className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-br from-cyan-600 to-blue-500">repararlas</span> 
          </div>
          <div className="flex p-4 gap-3">
            <button className="p-3 font-bold bg-gradient-to-br  from-green-400 via-emerald-600 to-cyan-600 rounded">Ver proyectos</button>
            <button className="p-3 rounded bg-gradient-to-br from-orange-600  via-red-500 to-rose-700">Descargar CV</button>
            <button className="p-3 rounded bg-gradient-to-br from-cyan-600 to-blue-500 ">Contactarme</button>
          </div>
      </div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex justify-start min-h-[70dvh] flex-col w-full items-center  bg-gray-500/10 p-10">
        <span className='shadow-[0_0_1000px_50px_rgba(255,0,0,0.5)] -z-50 h-0 w-1/3 mt-[60px]'></span>
          <div className=" font-extrabold text-6xl pb-8 p-0 text-transparent bg-clip-text bg-gradient-to-br from-orange-600 tracking-wide   via-red-500 to-rose-700">Sobre mi</div>
          <div className="flex justify-between items-center flex-col md:flex-row w-full h-full ">
            <div className="flex w-2/3  min-h-[40dvh] p-3 h-full justify-center items-center">
            <div className="w-[22rem] rounded h-[23rem] relative bg-gradient-to-br from-orange-600  via-red-500 to-rose-700 min-h-[40dvh]">
              <Image
                src="/yo.png"
                alt="File icon"
                width={500}
                height={500}
                className="absolute -left-1 -bottom-0 rounded"
              />
            </div>
            </div>
            <div className="p-[2px] w-full md:w-2/3 bg-gradient-to-br from-orange-600 via-red-500 to-rose-700 rounded-lg">
                <div className="h-full text-justify p-4 bg-gray-900 rounded-lg">
                Soy un programador autodidacta y entusiasta de la tecnología que disfruta tanto construyendo interfaces atractivas del lado del cliente como diseñando la lógica que las hace funcionar en el servidor. <br /> <br />
              Mi camino comenzó entre tutoriales nocturnos y documentación olvidada por el tiempo, donde aprendí a programar utilizando cursos y recursos en línea — algunos gratuitos, otros que pagué con el alma (o con lo poco que tenía en mi cuenta bancaria). <br /> <br />

              No me limité a quedarme en la teoría: reforcé mis conocimientos desarrollando aplicaciones Full-Stack sostenibles, eficientes… y bastante ingeniosas. <br /> <br />
              La mayoría de ellas no fueron creadas por capricho, sino para resolver problemas reales — tanto míos como de mi entorno personal y académico. Si algo no funcionaba, lo reconstruía. Si algo faltaba, lo creaba. <br /> <br />

              Últimamente, he expandido mi mundo al terreno de la electrónica, integrando software y hardware con Arduino y ESP32.
                </div>
              </div>
          </div>
        </div>
        <div className="flex flex-col  w-full min-h-[70dvh] h-full items-center">
        <span className='shadow-[0_0_1000px_50px_rgba(45,45,252,0.6)] -z-50 h-0 w-1/3 mt-[60px]'></span>
          <div className="font-extrabold text-6xl pb-5 text-transparent bg-clip-text bg-gradient-to-br tracking-wide  from-cyan-600 to-blue-500">Portfolio</div>
          <div className="grid grid-cols-3 p-5 gap-3 h-full w-full justify-center">
            <Card name={"dd"} imagePath={"WTranscriber"}/>
          </div>
        </div>

  <div className="w-full min-h-[70dvh] flex flex-col items-center bg-gradient-to-b relative from-black via-slate-900 to-gray-950 text-white py-10">
  <span className='shadow-[0_0_1000px_50px_rgba(0,255,0,0.4)] z-50 h-0 w-1/3 mt-[30px] absolute'></span>
  <div className="text-6xl font-extrabold mb-10 tracking-wide text-transparent bg-clip-text bg-gradient-to-br  from-green-400 via-emerald-600 to-cyan-600">Stack</div>
  

  <div className="flex flex-col md:flex-row justify-around w-full gap-10 px-6">
    {/* Frontend */}
    <div className="flex flex-col items-center bg-gray-400/20 relative p-8 rounded-xl border border-white/15 w-full md:w-1/2 gap-5">
      <div className="text-2xl font-semibold mb-3">FrontEnd</div>
      <div className="flex flex-wrap w-3/4 justify-center gap-5">
  <span className='shadow-[0_0_1000px_50px_rgba(0,255,0,0.4)] z-50 h-0 w-1/3 mt-[30px] left-0 absolute'></span>

      {[FaHtml5, FaCss3, FaJs, FaReact, SiTypescript, RiTailwindCssFill, RiNextjsFill].map((Icon, index) => (
                  <div
                    key={`fill-${index}`}
                    className="p-4 rounded-2xl hover:scale-110 transition-transform duration-200"
                  >
                  
                    <GradientSvgIcon Icon={Icon} />
                  </div>
        ))}
  <span className='shadow-[0_0_1000px_50px_rgba(0,255,0,0.4)] bottom-5 right-0 z-50 h-0 w-1/3 mt-[30px] absolute'></span>

      </div>
    </div>
              

    {/* Backend */}
    <div className="flex flex-col items-center relative bg-gray-400/20 p-8 rounded-xl border border-white/15 w-full md:w-1/2 gap-5">
      <div className="text-2xl font-semibold mb-3">BackEnd</div>
      <div className="flex flex-wrap w-3/4 justify-center gap-5">
  <span className='shadow-[0_0_1000px_50px_rgba(0,255,0,0.4)] bottom-5 left-0 z-50 h-0 w-1/3 mt-[30px] absolute'></span>

        {[SiTypescript, FaNodeJs, FaPython, SiExpress, SiFlask, SiMysql, SiSqlite].map((Icon, index) => (
                  <div
                    key={`fill-${index}`}
                    className="p-4 rounded-2xl hover:scale-110 transition-transform duration-200"
                  >
                    <GradientSvgIcon Icon={Icon} />
                  </div>
        ))}
  <span className='shadow-[0_0_1000px_50px_rgba(0,255,0,0.4)] z-50 h-0 w-1/3 mt-[30px] right-0 absolute'></span>

      </div>
    </div>
  </div>
</div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
