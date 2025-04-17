import Image from "next/image";

type Project = {
  name: string;
  imagePath: string;
  content: string;
  technologies: string[];
};

type CardProps = {
  project: Project;
  setModal: (project: Project) => void;
  setShowModal: (state: boolean) => void;
};

export default function Card({ project, setModal, setShowModal }: CardProps) {
  const { name, imagePath } = project;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Abrir modal del proyecto ${name}`}
      className="bg-gray-700 rounded-xl relative w-full h-full min-h-48 flex flex-col justify-center items-center"
      onClick={() => {
        setModal(project);
        setShowModal(true);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          setModal(project);
          setShowModal(true);
        }
      }}
    >
      <div className="absolute h-full w-full rounded-xl bg-gray-600 hover:-translate-y-16 transition-transform duration-300 ease-in-out overflow-hidden">
        <Image
          src={imagePath}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover rounded-xl"
        />
      </div>
      <div className="flex justify-center items-end p-4 text-2xl font-bold w-full h-full">
        {name}
      </div>
    </div>
  );
}