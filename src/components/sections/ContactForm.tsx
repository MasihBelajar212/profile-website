"use client";

import { useState, type FormEvent } from "react";

const inputStyles =
  "rounded-[10px] border-[1.5px] border-line bg-[#FAFCFB] px-3.5 py-3 text-[14.5px] text-ink outline-none transition-all focus:border-primary focus:shadow-[0_0_0_3px_var(--color-primary-light)]";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
    setTimeout(() => setSubmitted(false), 4000);
  }

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
          <input id="name" name="name" type="text" required placeholder="Nama lengkap" className={inputStyles} />
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

      <p className="-mt-1 text-[13px] text-muted">
        Form ini adalah tampilan demo — hubungkan ke layanan email atau backend pilihan Anda untuk
        menerima pesan sungguhan.
      </p>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-[10px] bg-primary px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_8px_20px_-8px_rgba(36,165,124,0.55)] transition-all hover:-translate-y-0.5 hover:bg-primary-dark"
        >
          Kirim Pesan
        </button>
        {submitted && (
          <span className="rounded-[10px] bg-primary-light px-4 py-3 text-sm font-semibold text-primary-dark">
            Terima kasih! Pesan Anda telah tercatat.
          </span>
        )}
      </div>
    </form>
  );
}
