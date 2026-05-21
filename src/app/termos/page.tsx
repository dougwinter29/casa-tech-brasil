import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do Casa Tech Brasil. Leia as condições de uso do nosso portal.",
  alternates: { canonical: "/termos" },
};

export default function TermosPage() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container-site max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Termos de Uso</h1>
        <p className="text-slate-400 text-sm mb-10">Última atualização: Janeiro de 2026</p>

        <div className="prose prose-slate max-w-none">
          <p>
            Ao acessar e usar o {siteConfig.name} ({siteConfig.url}), você concorda com estes Termos de Uso.
          </p>

          <h2>1. Uso do Site</h2>
          <p>O conteúdo do {siteConfig.name} é disponibilizado para uso informacional e pessoal. É proibido:</p>
          <ul>
            <li>Reproduzir ou distribuir conteúdo sem autorização expressa</li>
            <li>Usar o conteúdo para fins comerciais sem licença</li>
            <li>Tentar acessar partes restritas do sistema</li>
          </ul>

          <h2>2. Precisão das Informações</h2>
          <p>
            Nos esforçamos para manter informações precisas e atualizadas. No entanto, preços, disponibilidade e especificações de produtos podem mudar. Sempre verifique as informações diretamente no site do vendedor antes de comprar.
          </p>

          <h2>3. Links de Afiliados</h2>
          <p>
            Este site contém links de afiliados. Quando você clica e compra através desses links, podemos receber uma comissão. Isso não adiciona custo para você e nos ajuda a manter o site gratuito.
          </p>

          <h2>4. Limitação de Responsabilidade</h2>
          <p>
            O {siteConfig.name} não é responsável por: danos resultantes do uso das informações do site; problemas com produtos comprados através dos links de afiliados; indisponibilidade temporária do site.
          </p>

          <h2>5. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo (textos, imagens, logotipos) é de propriedade do {siteConfig.name} ou licenciado por terceiros. Reprodução parcial com atribuição é permitida; reprodução total requer autorização.
          </p>

          <h2>6. Alterações nos Termos</h2>
          <p>
            Podemos atualizar estes termos a qualquer momento. A versão mais recente estará sempre disponível nesta página.
          </p>

          <h2>7. Contato</h2>
          <p>Dúvidas: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>
        </div>
      </div>
    </div>
  );
}
