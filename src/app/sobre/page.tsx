import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre — Quem Somos",
  description: "Conheça a Casa Tech Brasil: o maior portal de automação residencial do Brasil. Nossa missão, valores e equipe.",
  alternates: { canonical: "/sobre" },
};

export default function SobrePage() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container-site max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Sobre o Casa Tech Brasil</h1>
        <div className="h-1 w-16 bg-brand-600 rounded mb-10" />

        <div className="prose prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed">
            O <strong>Casa Tech Brasil</strong> nasceu da paixão por tecnologia e da frustração de não encontrar informações confiáveis em português sobre automação residencial.
          </p>

          <h2>Nossa Missão</h2>
          <p>
            Democratizar o acesso à informação sobre casa inteligente no Brasil. Acreditamos que qualquer pessoa, independente do orçamento, pode transformar sua casa com tecnologia inteligente — e nosso trabalho é mostrar como fazer isso da forma mais acessível e inteligente possível.
          </p>

          <h2>O que Fazemos</h2>
          <ul>
            <li><strong>Reviews honestos:</strong> Testamos cada produto antes de recomendar. Sem patrocínios que comprometam nossa opinião.</li>
            <li><strong>Guias completos:</strong> Do iniciante ao avançado, cobrimos todos os níveis de automação residencial.</li>
            <li><strong>Comparativos detalhados:</strong> Lado a lado, ajudamos você a escolher o melhor produto para sua realidade.</li>
            <li><strong>Custo-benefício real:</strong> Foco em produtos disponíveis no Brasil, com suporte nacional quando possível.</li>
          </ul>

          <h2>Transparência sobre Afiliados</h2>
          <p>
            O Casa Tech Brasil é financiado através de programas de afiliados. Quando você compra um produto por um dos nossos links, podemos receber uma comissão — sem custo adicional para você.
          </p>
          <p>
            <strong>Importante:</strong> Essa comissão NUNCA influencia nossas avaliações. Se um produto não é bom, dizemos isso claramente, mesmo que haja comissão envolvida. Nossa credibilidade vale mais que qualquer comissão.
          </p>

          <h2>Fale Conosco</h2>
          <p>
            Tem uma dúvida, sugestão ou quer propor uma parceria? Entre em contato através da nossa{" "}
            <Link href="/contato" className="text-brand-600 hover:underline">página de contato</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
