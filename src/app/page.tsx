import Image from "next/image";
import Card from "@/app/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen  pb-20 gap-16 sm:py-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex min-h-[50dvh] flex-col items-center justify-center">
          <div className="font-bold text-3xl pb-6">
            CARLOS OSORIO
          </div>
          <div className="">
            Aprendiz de <span className=" text-green-400">todo</span> , Maestro en <span className="text-red-500">descomponer</span>  cosas... Pero <span className="text-blue-500">repararlas</span> 
          </div>
          <div className="flex gap-1">
            <button className="p-2 bg-emerald-500">Ver proyectos</button>
            <button className="p-2 bg-red-500">Descargar CV</button>
            <button className="p-2 bg-blue-500">Contactarme</button>
          </div>
      </div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex justify-start min-h-[70dvh] flex-col w-full items-center  bg-gray-500/10 p-10">
          <div className=" font-bold text-3xl pb-6 text-red-500">Sobre mi</div>
          <div className="flex justify-between w-full h-full">
            <div className="flex w-2/3 h-full justify-center items-center">foto</div>
            <div className="w-2/3 h-full text-justify p-4 border-red-500 border-2">
              Soy un programador autodidacta y entusiasta de la tecnología que disfruta tanto construyendo interfaces atractivas del lado del cliente como diseñando la lógica que las hace funcionar en el servidor. <br /> <br />
              Mi camino comenzó entre tutoriales nocturnos y documentación olvidada por el tiempo, donde aprendí a programar utilizando cursos y recursos en línea — algunos gratuitos, otros que pagué con el alma (o con lo poco que tenía en mi cuenta bancaria). <br /> <br />

              No me limité a quedarme en la teoría: reforcé mis conocimientos desarrollando aplicaciones Full-Stack sostenibles, eficientes… y bastante ingeniosas. <br /> <br />
              La mayoría de ellas no fueron creadas por capricho, sino para resolver problemas reales — tanto míos como de mi entorno personal y académico. Si algo no funcionaba, lo reconstruía. Si algo faltaba, lo creaba. <br /> <br />

              Últimamente, he expandido mi mundo al terreno de la electrónica, integrando software y hardware con Arduino y ESP32.
            </div>
          </div>
        </div>
        <div className="flex flex-col  w-full min-h-[70dvh] h-full items-center">
          <div className="font-bold text-3xl p-6">Portfolio</div>
          <div className="grid grid-cols-3 p-5 gap-3 h-full w-full justify-center">
            <Card name={"dd"} imagePath={"d"}/>
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
