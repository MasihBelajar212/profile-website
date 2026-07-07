import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ecommerce-umkm",
    title: "Platform E-Commerce UMKM",
    description:
      "Toko daring untuk pelaku UMKM dengan katalog produk, keranjang, dan integrasi pembayaran lokal.",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    thumbnail: "ecommerce",
    href: "#",
  },
  {
    id: "internal-dashboard",
    title: "Dashboard Analitik Internal",
    description:
      "Panel monitoring metrik operasional real-time untuk tim manajemen, lengkap dengan visualisasi data.",
    tags: ["React", "Node.js", "D3.js"],
    thumbnail: "dashboard",
    href: "#",
  },
  {
    id: "company-profile",
    title: "Situs Company Profile",
    description:
      "Website perusahaan multi-halaman dengan CMS ringan sehingga tim non-teknis bisa memperbarui konten sendiri.",
    tags: ["Next.js", "Sanity CMS", "SEO"],
    thumbnail: "company",
    href: "#",
  },
];
