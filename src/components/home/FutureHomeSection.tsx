import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Escolha seu Ecossistema",
    description: "Alexa, Google Home ou Apple HomeKit? Entenda qual é o certo para seu estilo de vida.",
    emoji: "🎯",
    href: "/blog/alexa-vale-a-pena-guia-completo",
  },
  {
    step: "02",
    title: "Comece pelo Básico",
    description: "Um assistente de voz e duas lâmpadas inteligentes já transformam sua rotina diária.",
    emoji: "🏁",
    href: "/blog/como-montar-casa-inteligente-gastando-pouco",
  },
  {
    step: "03",
    title: "Adicione Segurança",
    description: "Câmeras, fechaduras e sensores para proteger o que é mais importante para você.",
    emoji: "🔒",
    href: "/blog/melhores-cameras-wifi-casa",
  },
  {
    step: "04",
    title: "Automatize Tudo",
    description: "Crie rotinas inteligentes e deixe sua casa trabalhar por você, 24 horas por dia.",
    emoji: "⚡",
    href: "/blog/casa-inteligente-iniciantes",
  },
];

export default function FutureHomeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-site">
        <div className="text-center mb-12">
          <div className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full mb-4">
            🏠 Sua Casa do Futuro
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Do zero a casa inteligente<br />em 4 passos simples
          </h2>
          <p className="text-slate-500 mt-4 text-lg max-w-xl mx-auto">
            Não precisa ser técnico nem gastar muito. Siga nosso roteiro e automatize sua casa no seu ritmo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((step, i) => (
            <Link
              key={step.step}
              href={step.href}
              className="group relative bg-gradient-to-b from-slate-50 to-white rounded-2xl border border-slate-100 p-6 hover:border-brand-200 hover:shadow-lg transition-all duration-200 block"
            >
              <div className="text-3xl mb-4">{step.emoji}</div>
              <div className="absolute top-4 right-4 text-4xl font-black text-brand-400 group-hover:text-brand-600 transition-colors select-none">
                {step.step}
              </div>
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
                {step.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              <div className="mt-4 flex items-center gap-1 text-brand-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Ler guia <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/blog/casa-inteligente-iniciantes"
            className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors shadow-sm hover:shadow-md"
          >
            Ver Guia Completo para Iniciantes
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
