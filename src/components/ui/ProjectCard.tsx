import type { Project } from "@/types";
import { thumbnailMap } from "@/components/illustrations/ProjectThumbs";
import { ArrowIcon } from "@/components/icons";

export function ProjectCard({ title, description, tags, thumbnail, href }: Project) {
  const Thumb = thumbnailMap[thumbnail];

  return (
    <div className="group h-full overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:-translate-y-1.5 hover:scale-[1.015] hover:shadow-[0_24px_40px_-20px_rgba(32,33,36,0.18)]">
      <div className="h-[170px] overflow-hidden bg-primary-light">
        <Thumb className="h-full w-full" />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <h3 className="text-[19px] font-semibold text-ink">{title}</h3>
        <p className="text-[15px] text-muted">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary-light px-2.5 py-1 font-mono text-[11px] text-primary-dark"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={href}
          className="mt-1 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary-dark"
        >
          Lihat detail
          <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}
