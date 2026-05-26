import { Gift } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-brand-700 bg-gradient-to-br from-brand-600 to-brand-800 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative container-site">
        <div className="max-w-2xl mx-auto text-center">
          {/* Lead magnet badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
            <Gift size={16} className="text-yellow-300" />
            GRÁTIS: Guia Casa Inteligente com R$500
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Receba o Guia + Melhores Ofertas
          </h2>
          <p className="text-white text-lg mb-3 leading-relaxed">
            Cadastre-se e receba <strong>gratuitamente</strong> nosso guia com os 12 produtos
            essenciais para montar sua casa inteligente com qualquer orçamento.
          </p>
          <p className="text-white/80 text-sm mb-8">
            + Toda semana: novas ofertas, lançamentos e guias exclusivos direto no seu e-mail.
          </p>

          <NewsletterForm />

          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-white/80 text-xs">
            <span>✓ Sem spam</span>
            <span>✓ Cancele quando quiser</span>
            <span>✓ 100% gratuito</span>
            <span>✓ +5.000 assinantes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
