import { Mail } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

export default function NewsletterSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-brand-600 to-brand-800 relative overflow-hidden">
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
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-2xl mb-6">
            <Mail size={26} className="text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Receba as Melhores Ofertas
          </h2>
          <p className="text-white/90 text-lg mb-8 leading-relaxed">
            Cadastre-se e receba semanalmente: ofertas imperdíveis, novos lançamentos e guias exclusivos de casa inteligente.
          </p>

          <NewsletterForm />

          <p className="mt-4 text-white/60 text-xs">
            ✓ Sem spam &nbsp;·&nbsp; ✓ Cancele quando quiser &nbsp;·&nbsp; ✓ 100% gratuito
          </p>
        </div>
      </div>
    </section>
  );
}
