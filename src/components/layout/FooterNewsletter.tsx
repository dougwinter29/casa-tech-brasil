"use client";

import { useState } from "react";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return done ? (
    <p className="text-green-400 text-sm font-medium py-2">✓ Obrigado! Você está inscrito.</p>
  ) : (
    <form
      onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
      className="flex flex-col gap-2"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="seu@email.com"
        required
        className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
      />
      <button
        type="submit"
        className="px-4 py-2.5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold rounded-lg transition-colors"
      >
        Quero Receber
      </button>
    </form>
  );
}
