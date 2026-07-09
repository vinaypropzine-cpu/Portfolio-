import Image from "next/image";
import type { Project } from "@/lib/data";

function BrowserFrame({ project }: { project: Project }) {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-card shadow-[0_1px_2px_rgba(28,25,23,0.06)] transition-shadow duration-300 group-hover:shadow-[0_16px_40px_-12px_rgba(28,25,23,0.18)]">
      <div className="flex items-center gap-1.5 border-b border-line bg-paper px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-3 hidden truncate rounded-md bg-card px-2.5 py-0.5 font-mono text-[10px] text-faint sm:block">
          {project.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
        </span>
      </div>
      <div className="relative aspect-[8/5] overflow-hidden">
        <Image
          src={project.image}
          alt={`Screenshot of ${project.name}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <BrowserFrame project={project} />
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <h3 className="font-display text-2xl tracking-tight">
          {project.name}
        </h3>
        <span className="shrink-0 font-mono text-xs text-faint">{project.year}</span>
      </div>
      <p className="mt-0.5 text-xs font-medium uppercase tracking-[0.14em] text-ember">
        {project.category}
      </p>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-soft">
        {project.description}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <li
            key={t}
            className="rounded-full border border-line px-3 py-1 text-xs text-soft"
          >
            {t}
          </li>
        ))}
      </ul>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
        Visit site
        <svg
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M4.5 11.5l7-7M5.5 4.5h6v6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </a>
  );
}
