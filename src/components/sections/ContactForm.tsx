"use client";

import { useState, type FormEventHandler } from "react";

const inputStyles =
    "rounded-[10px] border-[1.5px] border-line bg-[#FAFCFB] px-3.5 py-3 text-[14.5px] text-ink outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_var(--color-primary-light)]";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
    const [status, setStatus] = useState<Status>("idle");

    const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
        event.preventDefault();
        setStatus("loading");

        const form = event.currentTarget;
        const formData = new FormData(form);
        const payload = {
            name: formData.get("name")?.toString() ?? "",
            email: formData.get("email")?.toString() ?? "",
            message: formData.get("message")?.toString() ?? "",
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Request failed");

            setStatus("success");
            form.reset();
        } catch (err) {
            console.error(err);
            setStatus("error");
        } finally {
            setTimeout(() => setStatus("idle"), 4000);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-[18px] rounded-[18px] border border-line bg-white p-9"
        >
            <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex flex-1 flex-col gap-2">
                    <label htmlFor="name" className="text-[13px] font-semibold text-muted">
                        Nama
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Nama lengkap"
                        className={inputStyles}
                    />
                </div>
                <div className="flex flex-1 flex-col gap-2">
                    <label htmlFor="email" className="text-[13px] font-semibold text-muted">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="nama@perusahaan.com"
                        className={inputStyles}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[13px] font-semibold text-muted">
                    Pesan
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Ceritakan kebutuhan atau peluang kerja sama Anda..."
                    className={`resize-none ${inputStyles}`}
                />
            </div>

            <div className="flex items-center gap-4">
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-2 rounded-[10px] bg-primary px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_20px_-8px_rgba(36,165,124,0.55)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark disabled:opacity-60"
                >
                    {status === "loading" ? "Mengirim..." : "Kirim Pesan"}
                </button>

                {status === "success" && (
                    <span className="rounded-[10px] bg-primary-light px-4 py-3 text-sm font-semibold text-primary-dark">
                        Terima kasih! Pesan Anda telah terkirim.
                    </span>
                )}
                {status === "error" && (
                    <span className="rounded-[10px] bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                        Gagal mengirim. Coba lagi nanti.
                    </span>
                )}
            </div>
        </form>
    );
}
