import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechBadge } from "@/components/ui/TechBadge";
import { Reveal } from "@/components/ui/Reveal";
import { techStack } from "@/data/techStack";

export function About() {
  return (
    <section id="tentang" className="py-28">
      <div className="mx-auto grid max-w-[1320px] grid-cols-4 gap-6 px-6 sm:px-10 md:grid-cols-8 lg:grid-cols-12">
        <Reveal className="col-span-full">
          <SectionHeading title="Tentang & Tech Stack" />
        </Reveal>

        <Reveal className="col-span-4 flex flex-col gap-4 md:col-span-8 lg:col-span-5">
          <p className="text-[16.5px] text-muted">
            Saya seorang Website Developer yang fokus pada perpaduan antara performa teknis dan
            pengalaman pengguna. Setiap proyek dimulai dari memahami kebutuhan sebenarnya, lalu
            diterjemahkan menjadi kode yang bersih dan mudah dikembangkan.
          </p>
          <p className="text-[16.5px] text-muted">
            Terbiasa bekerja end-to-end: dari merancang komponen antarmuka, menyusun struktur
            data, hingga memastikan situs tetap cepat di berbagai perangkat.
          </p>
        </Reveal>

        <Reveal
          id="tech-stack"
          delay={100}
          className="col-span-4 grid grid-cols-2 gap-3.5 md:col-span-8 lg:col-span-7 lg:grid-cols-3"
        >
          {techStack.map((item) => (
            <TechBadge key={item.name} {...item} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
