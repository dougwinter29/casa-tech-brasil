"use client";

import { useState } from "react";
import { MessageSquare, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="bg-white rounded-2xl border border-slate-100 p-10 text-center shadow-sm">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Mensagem enviada!</h2>
        <p className="text-slate-500">Respondemos em até 24 horas úteis. Obrigado pelo contato!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
      <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Nome</label>
            <input
              type="text"
              required
              placeholder="Seu nome"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">E-mail</label>
            <input
              type="email"
              required
              placeholder="seu@email.com"
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Assunto</label>
          <select className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all bg-white">
            <option>Dúvida sobre produto</option>
            <option>Sugestão de conteúdo</option>
            <option>Parceria / Publicidade</option>
            <option>Erro no site</option>
            <option>Outro</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Mensagem</label>
          <textarea
            required
            rows={5}
            placeholder="Como podemos ajudar?"
            className="w-full px-4 py-3 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold py-3.5 rounded-xl transition-colors"
        >
          <MessageSquare size={18} /> Enviar Mensagem
        </button>
      </form>
    </div>
  );
}
