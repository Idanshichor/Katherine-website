"use client";

import { useState } from "react";
import { useLanguage } from "@/context/language-context";

export function Web3Form({ 
  className, 
  subject,
  variant
}: { 
  className?: string, 
  subject: string,
  variant: "main" | "footer"
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const { t } = useLanguage();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting" || status === "success") return;
    
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "7bd1aa94-7d33-4738-b627-5b9378af65d4");
    formData.append("subject", subject);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {variant === "main" ? (
        <>
          <input type="email" name="email" placeholder={t("newsletter.placeholder")} required disabled={status === "submitting" || status === "success"} className="px-6 py-4 rounded-full border border-gray-200 bg-gray-50 focus:outline-none focus:border-[var(--color-brand-gold)] w-full text-sm text-[var(--color-brand-black)] disabled:opacity-50" />
          <button type="submit" disabled={status === "submitting" || status === "success"} className="bg-[var(--color-brand-black)] text-[var(--color-brand-cream)] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] md:w-auto w-full hover:bg-gray-800 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed">
            {status === "success" ? t("newsletter.success") : status === "submitting" ? t("newsletter.submitting") : status === "error" ? t("newsletter.error") : t("newsletter.button")}
          </button>
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-6 w-full">
            <input type="text" name="name" placeholder={t("footer.placeholder_name")} required disabled={status === "submitting" || status === "success"} className="bg-transparent border-b border-gray-700 text-white px-0 py-3 w-full focus:outline-none focus:border-[var(--color-brand-pink)] transition-colors font-light text-base disabled:opacity-50" />
            <input type="text" name="last_name" placeholder={t("footer.placeholder_lastname")} disabled={status === "submitting" || status === "success"} className="bg-transparent border-b border-gray-700 text-white px-0 py-3 w-full focus:outline-none focus:border-[var(--color-brand-pink)] transition-colors font-light text-base disabled:opacity-50" />
          </div>
          <input type="email" name="email" placeholder={t("footer.placeholder_email")} required disabled={status === "submitting" || status === "success"} className="bg-transparent border-b border-gray-700 text-white px-0 py-3 w-full focus:outline-none focus:border-[var(--color-brand-pink)] transition-colors font-light text-base disabled:opacity-50" />
          <button type="submit" disabled={status === "submitting" || status === "success"} className="bg-[var(--color-brand-pink)] text-white px-10 py-4 font-semibold uppercase tracking-widest hover:bg-[#E01E79] transition-colors w-max rounded-full mt-6 text-xs shadow-premium hover:-translate-y-1 disabled:opacity-50 disabled:hover:-translate-y-0 disabled:cursor-not-allowed">
            {status === "success" ? t("newsletter.success") : status === "submitting" ? t("newsletter.submitting") : status === "error" ? t("newsletter.error") : t("footer.subscribe")}
          </button>
        </>
      )}
    </form>
  );
}
