"use client";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import projectsData from '@/app/proyects.json' assert { type: 'json' };

import Image from "next/image";
import Card from "@/app/card";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiExpress, SiFlask, SiMysql, SiSqlite } from "react-icons/si";
import { IconType } from "react-icons";
import Modal from "./modal";
import { Project } from "./types";
import GradientSvgIcon from "@/app/GradientSvgIcon";

interface IconProps {
  Icon: IconType;
}

export default function Home() {
  const form = useRef<HTMLFormElement>(null);
  const [sent, setSent] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [ShowModal, setShowModal] = useState(false)
  const [showCV, setShowCV] = useState(false)

  const proyects = projectsData.projects as Project[];

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      form.current!,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(() => {
      setSent(true);
      setToast({ message: "Mensaje enviado con éxito. Gracias por contactarme ✨", type: "success" });
      form.current?.reset();
    
      // Ocultar el toast después de 3 segundos
      setTimeout(() => setToast(null), 3000);
    })
    .catch((error) => {
      console.error("Error enviando mensaje:", error);
      setToast({ message: "Hubo un error al enviar el mensaje 😥", type: "error" });
      setTimeout(() => setToast(null), 3000);
    });
  };

  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowModal(false);
        setModalProject(null);
        
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowModal, setModalProject]);

  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen  pb-20 gap-16 sm:py-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex min-h-[50dvh] flex-col h-full  items-center justify-center">
        <span className='shadow-animated  -z-50  h-0 w-full mt-20'></span>
          <div className="font-extrabold text-4xl text-transparent bg-clip-text bg-animated ">
            CARLOS OSORIO
          </div>
          <div className="p-3 font-extrabold text-6xl  w-full flex px-20 justify-center text-center">
              Full-Stack Developer | Next.js, React, APIs, SaaS
          </div>
          <div className="p-6 font-extrabold text-xl ">
          Construyo aplicaciones modernas, rápidas y escalables para emprendedores y pequeños negocios.
          </div>
          <div className="flex p-4 gap-3">
            <button onClick={() => document.getElementById("proyects")?.scrollIntoView({ behavior: "smooth" })} className="p-3 cursor-pointer font-bold bg-gradient-to-br from-orange-600  via-red-500 to-rose-700 rounded">Ver proyectos</button>
            <button onClick={()=> window.open("https://www.upwork.com/freelancers/xlceor", "_blank")} className="p-3 cursor-pointer rounded bg-gradient-to-br  from-green-400 via-emerald-600 to-cyan-600 ">
            Contratame en Upwork</button>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="p-3 cursor-pointer rounded bg-gradient-to-br from-cyan-600 to-blue-500 ">Contactarme</button>
          </div>
      </div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <div className="w-full min-h-[70dvh] py-20 flex flex-col items-center bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white">
      {/* Shadow Glow */}
      <span className="shadow-[0_0_1000px_50px_rgba(255,0,255,0.4)] z-0 h-0 w-1/3 mt-[40px] absolute"></span>

      {/* Title */}
      <div className="text-6xl font-extrabold mb-12 tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 via-pink-500 to-indigo-700">
        Servicios
      </div>

      {/* Grid of Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl px-6">

        {/* Card */}
        {[
          {
            title: "Aplicaciones Web Full-Stack",
            desc: "Desarrollo interfaces modernas con Next.js y React, junto con APIs robustas, bases de datos y autenticación.",
          },
          {
            title: "Dashboards y Paneles Admin",
            desc: "Creación de paneles rápidos, intuitivos y optimizados para manejo de datos, usuarios y flujos internos.",
          },
          {
            title: "APIs y Backends Escalables",
            desc: "Diseño APIs seguras y eficientes usando Node.js, Express, Supabase o Flask según lo que tu proyecto requiera.",
          },
          {
            title: "Diseño de Interfaces (UI)",
            desc: "Interfaces limpias, responsivas y modernas diseñadas con Tailwind CSS y React.",
          },
          {
            title: "Integración con Bases de Datos",
            desc: "MySQL, SQLite o soluciones BaaS como Firebase/Supabase para proyectos rápidos y confiables.",
          },
          {
            title: "Landing Pages Profesionales",
            desc: "Sitios rápidos, enfocados en conversión y altamente optimizados para negocios y emprendedores.",
          },
        ].map((service, i) => (
          <div
            key={i}
            className="p-7 bg-gray-800/40 backdrop-blur-sm border border-white/15 rounded-xl shadow-xl hover:scale-[1.03] transition-transform duration-300"
          >
            <div className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 via-pink-500 to-indigo-600 text-2xl font-semibold mb-3">
              {service.title}
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}

      </div>
    </div>
        <div className="flex justify-start min-h-[70dvh] flex-col w-full items-center  bg-gray-500/10 p-10">
        <span className='shadow-[0_0_1000px_50px_rgba(255,0,0,0.5)] -z-50 h-0 w-1/3 mt-[60px]'></span>
          <div className=" font-extrabold text-6xl pb-8 p-0 text-transparent bg-clip-text bg-gradient-to-br from-orange-600 tracking-wide   via-red-500 to-rose-700">Sobre mi</div>
          <div className="flex justify-between items-center flex-col md:flex-row w-full h-full ">
            <div className="flex w-2/3  min-h-[40dvh] p-3 h-full justify-center items-center">
            <div className="w-[22rem] rounded-4xl rounded-t-full h-[23rem] relative bg-gradient-to-br from-orange-600  via-red-500 to-rose-700 min-h-[40dvh]">
              <Image
                src="/fto.png"
                alt="File icon"
                width={500}
                height={500}
                className="absolute left-0 -bottom-0 "
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
        <div id="proyects" className="flex flex-col  w-full min-h-[70dvh] h-full items-center">
        <span className='shadow-[0_0_1000px_50px_rgba(45,45,252,0.6)] -z-50 h-0 w-1/3 mt-[60px]'></span>
          <div className="font-extrabold text-6xl pb-5 text-transparent bg-clip-text bg-gradient-to-br tracking-wide  from-cyan-600 to-blue-500">Portfolio</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 gap-3 h-full w-full justify-center">
          {proyects.map((project, index) => (
            <Card key={index} project={project} setModal={setModalProject} setShowModal={setShowModal} />
          ))}
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

{/* Contacto */}
<div id="contact" className="w-full min-h-[70dvh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-gray-950 to-black py-12 px-6 text-white">
      <span className='shadow-[0_0_1000px_50px_rgba(0,255,255,0.4)] z-50 h-0 w-1/3 mt-[30px] absolute'></span>
      <span className='shadow-[0_0_1000px_50px_rgba(0,255,255,0.4)] z-50 h-0 w-1/3 mt-[40px]'></span>

      <div className="text-6xl font-extrabold mb-10 tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600">
        Contáctame
      </div>
      <form ref={form} onSubmit={sendEmail} className="w-full max-w-xl flex flex-col gap-5 bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-white/10 shadow-lg">
        <input type="text" name="user_name" placeholder="Nombre" required className="w-full px-4 py-3 rounded bg-gray-900 border border-white/10 text-white focus:outline-none"/>
        <input type="email" name="user_email" placeholder="Correo" required className="w-full px-4 py-3 rounded bg-gray-900 border border-white/10 text-white focus:outline-none"/>
        <textarea name="message" rows={5} placeholder="Mensaje" required className="w-full px-4 py-3 rounded bg-gray-900 border border-white/10 text-white focus:outline-none"/>
        <button type="submit" className="bg-gradient-to-br from-cyan-600 via-blue-500 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold py-3 rounded transition-transform hover:scale-105">
          {sent ? "¡Enviado con éxito! ✔️" : "Enviar mensaje"}
        </button>
      </form>
    </div>

      </main>
        {ShowModal && modalProject && (
          <Modal project={modalProject} setModal={setModalProject} setShowModal={setShowModal} />
        )}

        {showCV && (
          <div onClick={() => setShowCV(false)} className="flex fixed top-0 w-full h-full justify-center items-center p-10 bg-black/30">
            <div className="flex flex-col w-3/5 h-3/5 bg-gradient-to-br items-center justify-center gap-5 from-indigo-950 rounded-xl border-2 border-indigo-800 to-black"        
            onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true">
          <p className="text-3xl ">Download CV / Descargar CV</p>
          <div className="flex items-center justify-center gap-5">
            
                        <button className="p-3 cursor-pointer rounded bg-gradient-to-br from-orange-600  via-red-500 to-rose-700">
          <a
              href="/CV_Espanol.pdf"
              target="_blank"
              className="p-3  font-bold rounded text-center"
            >
              CV en Español
            </a></button>
<button className="p-3 cursor-pointer rounded bg-gradient-to-br from-cyan-600 to-blue-500 "><a
              href="/CV_Ingles.pdf"
              target="_blank"
              className="p-3  font-bold rounded text-center"
            >
              CV in English
            </a></button></div>
        </div>
          </div>
        )}

      {toast && (
            <div
              className={`fixed top-5 right-5 z-50 px-4 py-3 rounded shadow-lg text-white
                ${toast.type === "success" ? "bg-green-500" : "bg-red-500"}`}
            >
              {toast.message}
            </div>
          )}
    </div>
  );
  
}
