"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { useScrolled } from "@/hooks/useScrolled";

const NAV_LINKS = [
    { href: "#tentang", label: "Tentang" },
    { href: "#tech-stack", label: "Tech Stack" },
    { href: "#proyek", label: "Proyek" },
    { href: "#kontak", label: "Kontak" },
];

export function Header() {
    const scrolled = useScrolled(40);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${
                scrolled ? "bg-white/75 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md" : "bg-transparent"
            }`}
        >
            <div className="mx-auto flex h-[76px] w-full max-w-[1320px] items-center justify-between px-6 sm:px-10">
                <Link href="#top" className="flex items-center gap-2.5 font-mono text-[17px] font-semibold text-ink">
                    <Image
                        src="/logo.svg"
                        alt="Ida Bagus Made Widnyana logo"
                        width={40}
                        height={20}
                        priority
                        className="h-5 w-10" // ← added: h-10/w-10 = 40px, matches width/height props
                    />
                    Made Widnyana
                </Link>

                <nav className="hidden gap-9 text-[14.5px] font-medium md:flex">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="group relative text-muted transition-colors hover:text-ink"
                        >
                            {link.label}
                            <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:block">
                    <Button href="#kontak" size="sm">
                        Hubungi Saya
                    </Button>
                </div>

                <button
                    type="button"
                    aria-label="Buka menu navigasi"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((open) => !open)}
                    className="flex flex-col gap-[5px] md:hidden"
                >
                    <span className="h-[2px] w-[22px] bg-ink" />
                    <span className="h-[2px] w-[22px] bg-ink" />
                </button>
            </div>

            {menuOpen && (
                <nav className="flex flex-col gap-1 border-t border-line bg-white px-6 py-4 md:hidden">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="rounded-lg px-2 py-2.5 text-[15px] font-medium text-muted hover:bg-primary-light hover:text-primary-dark"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button href="#kontak" size="sm" className="mt-2 justify-center">
                        Hubungi Saya
                    </Button>
                </nav>
            )}
        </header>
    );
}
