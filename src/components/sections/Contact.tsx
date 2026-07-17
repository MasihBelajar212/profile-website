import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { MailIcon, GithubIcon, LinkedinIcon, type IconProps } from "@/components/icons";
import type { ComponentType } from "react";

const CONTACT_LINKS: { href: string; label: string; Icon: ComponentType<IconProps> }[] = [
    { href: "mailto:bagusmade212@gmail.com", label: "bagusmade212@gmail.com", Icon: MailIcon },
    { href: "https://github.com/MasihBelajar212", label: "github.com/MasihBelajar212", Icon: GithubIcon },
    {
        href: "https://www.linkedin.com/in/ida-bagus-made/",
        label: "linkedin.com/in/ida-bagus-made",
        Icon: LinkedinIcon,
    },
];

export function Contact() {
    return (
        <section id="kontak" className="py-28">
            <div className="mx-auto grid max-w-[1320px] grid-cols-4 gap-6 px-6 sm:px-10 md:grid-cols-8 lg:grid-cols-12">
                <Reveal className="col-span-full">
                    <SectionHeading title="Mari Berkolaborasi" />
                </Reveal>

                <Reveal className="col-span-4 flex flex-col gap-6 md:col-span-8 lg:col-span-4">
                    <p className="max-w-[320px] text-[16px] text-muted">
                        Terbuka untuk peluang kerja penuh waktu, proyek lepas, maupun sekadar berdiskusi soal ide produk
                        web Anda.
                    </p>
                    <div className="flex flex-col gap-3.5">
                        {CONTACT_LINKS.map(({ href, label, Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-[15px] font-medium text-ink transition-colors hover:text-primary-dark"
                            >
                                <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[10px] bg-primary-light text-primary-dark">
                                    <Icon className="h-4 w-4" />
                                </span>
                                {label}
                            </a>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={120} className="col-span-4 md:col-span-8 lg:col-span-8">
                    <ContactForm />
                </Reveal>
            </div>
        </section>
    );
}
