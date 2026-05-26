"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex items-center justify-center gap-3 bg-white/20 rounded-2xl px-8 py-5">
        <CheckCircle size={24} className="text-green-300" />
        <div className="text-left">
          <p className="text-white font-semibold">Perfeito! Você está na lista.</p>
          <p className="text-white/70 text-sm">Em breve você receberá nossas dicas no e-mail.</p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
      className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu melhor e-mail"
        required
        className="flex-1 px-5 py-3.5 bg-white/20 border border-white/40 rounded-xl text-white placeholder:text-white/70 focus:outline-none focus:border-white/70 focus:bg-white/25 transition-all text-sm"
      />
      <button
        type="submit"
        className="px-6 py-3.5 bg-white text-brand-700 font-bold rounded-xl hover:bg-brand-50 transition-colors text-sm whitespace-nowrap shadow-lg"
      >
        Quero Receber!
      </button>
    </form>
  );
}
