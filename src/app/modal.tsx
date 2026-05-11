import Image from "next/image";
import { useEffect } from "react";
import type { Project } from "./types";

const PLACEHOLDER = "/project-placeholder.svg";

export type ModalCopy = {
  highlights: string;
  impact: string;
  tech: string;
  close: string;
};

type ModalProps = {
  project: Project;
  setModal: (project: Project | null) => void;
  setShowModal: (state: boolean) => void;
  copy: ModalCopy;
};

export default function Modal({
  project,
  setModal,
  setShowModal,
  copy,
}: ModalProps) {
  function exit() {
    setShowModal(false);
    setModal(null);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") exit();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [setShowModal, setModal]);

  const { name, imagePath, content, technologies, keyFeatures, impact } =
    project;
  const src = imagePath ?? PLACEHOLDER;

  return (
    <div
      role="presentation"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 p-4 backdrop-blur-[2px] dark:bg-black/45"
      onClick={exit}
    >
      <div
        className="relative max-h-[85dvh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-[color:var(--surface-border)] bg-[color:var(--bg-elevated)] p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          type="button"
          onClick={exit}
          className="absolute right-4 top-4 rounded-lg px-2 py-1 text-sm text-[color:var(--muted)] hover:bg-[color:var(--surface)] hover:text-[color:var(--text)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)]"
        >
          {copy.close}
        </button>

        <div className="flex flex-col gap-6 md:flex-row md:gap-8">
          <div className="relative mx-auto aspect-[4/3] w-full shrink-0 overflow-hidden rounded-xl bg-[color:var(--surface)] md:w-56">
            <Image
              src={src}
              alt=""
              fill
              sizes="224px"
              className="object-cover"
              unoptimized={src.endsWith(".svg")}
            />
          </div>

          <div className="min-w-0 flex-1 text-[color:var(--text)]">
            <h2 id="project-modal-title" className="text-xl font-semibold pr-12">
              {name}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--muted)]">
              {content}
            </p>

            {keyFeatures && keyFeatures.length > 0 && (
              <div className="mt-5">
                <h3 className="text-sm font-medium text-[color:var(--text)]">
                  {copy.highlights}
                </h3>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-[color:var(--muted)]">
                  {keyFeatures.map((feature: string, i: number) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {impact && (
              <div className="mt-5">
                <h3 className="text-sm font-medium text-[color:var(--text)]">
                  {copy.impact}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--muted)]">
                  {impact}
                </p>
              </div>
            )}

            {technologies && technologies.length > 0 && (
              <div className="mt-5">
                <h3 className="text-sm font-medium text-[color:var(--text)]">
                  {copy.tech}
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-[color:var(--surface-border)] bg-[color:var(--surface)] px-2.5 py-0.5 text-xs text-[color:var(--text)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
