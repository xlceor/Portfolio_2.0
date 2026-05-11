import Image from "next/image";
import type { Project } from "./types";

const PLACEHOLDER = "/project-placeholder.svg";

type CardProps = {
  project: Project;
  setModal: (project: Project) => void;
  setShowModal: (state: boolean) => void;
  openDetailsLabel: string;
};

export default function Card({
  project,
  setModal,
  setShowModal,
  openDetailsLabel,
}: CardProps) {
  const { name, imagePath } = project;
  const src = imagePath ?? PLACEHOLDER;

  const open = () => {
    setModal(project);
    setShowModal(true);
  };

  return (
    <button
      type="button"
      aria-label={`${openDetailsLabel} ${name}`}
      className="group text-left w-full rounded-2xl border border-[color:var(--surface-border)] bg-[color:var(--surface)] overflow-hidden shadow-sm transition-[transform,box-shadow] duration-300 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
      onClick={open}
    >
      <div className="relative aspect-[16/11] w-full bg-[color:var(--bg-elevated)]">
        <Image
          src={src}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          unoptimized={src.endsWith(".svg")}
        />
      </div>
      <div className="px-4 py-4">
        <span className="block font-medium text-[color:var(--text)] group-hover:text-[color:var(--accent)] transition-colors">
          {name}
        </span>
        <span className="mt-1 block text-sm text-[color:var(--muted)]">
          {project.content.slice(0, 112)}
          {project.content.length > 112 ? "…" : ""}
        </span>
      </div>
    </button>
  );
}
