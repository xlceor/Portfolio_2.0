import Image from "next/image";
import { useEffect } from "react";
import { Project } from "./types";

type CardProps = {
    project: Project;
    setModal: (project: Project) => void;
    setShowModal: (state: boolean) => void;
  };

export default function Modal({ project, setModal, setShowModal }: CardProps) {

    function Exit () {
        setShowModal(false);
        setModal({ name: "", imagePath: "", content: "", technologies: [] });
      }

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
          if (event.key === "Escape") {
            Exit()
          }
        };
    
        document.addEventListener("keydown", handleKeyDown);
        return () => {
          document.removeEventListener("keydown", handleKeyDown);
        };
      }, [setShowModal, setModal]);


const { name, imagePath, content, technologies } = project;

  return (
    <div 
    role="button"
    tabIndex={0}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
    onClick={() => {
        Exit()
      }}
    >
      <div
        className="relative max-w-7xl w-full h-[70dvh]  border border-white/15 rounded-2xl shadow-xl backdrop-blur-md p-6 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={Exit}
          className="absolute top-4 right-4 text-white text-xl hover:text-red-500 transition-colors"
          aria-label="Cerrar modal"
        >
          &times;
        </button>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 h-full">
          
          {/* Imagen */}
          <div className="relative w-full md:w-1/3 h-64 ">
            <Image
              src={imagePath}
              alt={name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-xl"
            />
          </div>

          {/* Contenido */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <p className="text-white mb-4">{content}</p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-100 text-gray-800 text-sm rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}