import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-between gap-3 px-6 sm:px-10">
        <p className="text-[13.5px] text-muted">
          © 2026 Arya Wicaksana. Dibuat dengan Next.js & sedikit kopi.
        </p>
        <p className="text-[13.5px] text-muted">
          Kembali ke{" "}
          <Link href="#top" className="font-semibold text-primary-dark">
            atas ↑
          </Link>
        </p>
      </div>
    </footer>
  );
}
