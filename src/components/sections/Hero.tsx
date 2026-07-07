import { Button } from "@/components/ui/Button";
import { TerminalWindow } from "@/components/terminal/TerminalWindow";

const STATS = [
  { value: "4+", label: "Tahun pengalaman" },
  { value: "20+", label: "Proyek selesai" },
  { value: "8", label: "Teknologi inti" },
];

export function Hero() {
  return (
    <section id="top" className="flex min-h-[92vh] items-center pt-[172px] pb-24">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-4 gap-6 px-6 sm:px-10 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 flex flex-col gap-5 md:col-span-8 lg:col-span-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-light px-3.5 py-1.5 font-mono text-[13px] font-medium text-primary-dark">
            <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-primary" />
            {"// website developer"}
          </span>

          <h1 className="text-[clamp(38px,5vw,58px)] leading-[1.08] font-extrabold tracking-tight text-ink">
            Membangun web yang <span className="text-primary">cepat</span>, rapi, dan siap
            dipakai.
          </h1>

          <p className="max-w-[480px] text-[17.5px] text-muted">
            Saya membantu tim dan klien menerjemahkan ide menjadi produk web yang cepat dimuat,
            mudah dirawat, dan enak digunakan — dari landing page hingga aplikasi berbasis data.
          </p>

          <div className="mt-1 flex flex-wrap gap-4">
            <Button href="#proyek">Lihat Proyek</Button>
            <Button href="#kontak" variant="outline">
              Kontak Saya
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-9">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <strong className="block text-[22px] font-extrabold text-ink">{stat.value}</strong>
                <span className="text-[13px] text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-4 mt-12 flex items-center justify-center md:col-span-8 lg:col-span-6 lg:mt-0">
          <TerminalWindow />
        </div>
      </div>
    </section>
  );
}
