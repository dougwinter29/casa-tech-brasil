import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade do Casa Tech Brasil. Saiba como coletamos, usamos e protegemos seus dados.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="container-site max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Política de Privacidade</h1>
        <p className="text-slate-400 text-sm mb-10">Última atualização: Janeiro de 2026</p>

        <div className="prose prose-slate max-w-none">
          <p>
            Esta Política de Privacidade descreve como o <strong>{siteConfig.name}</strong> ({siteConfig.url}) coleta, usa e protege suas informações pessoais quando você visita nosso site.
          </p>

          <h2>1. Informações que Coletamos</h2>
          <h3>1.1 Informações fornecidas voluntariamente</h3>
          <ul>
            <li>Nome e endereço de e-mail (quando você se inscreve na newsletter ou entra em contato)</li>
            <li>Mensagens enviadas pelo formulário de contato</li>
          </ul>
          <h3>1.2 Informações coletadas automaticamente</h3>
          <ul>
            <li>Endereço IP e dados de localização aproximada</li>
            <li>Tipo de navegador e dispositivo</li>
            <li>Páginas visitadas e tempo de permanência (via Google Analytics)</li>
            <li>Cookies de sessão e preferências</li>
          </ul>

          <h2>2. Como Usamos suas Informações</h2>
          <ul>
            <li>Enviar a newsletter (se você se inscreveu)</li>
            <li>Responder mensagens de contato</li>
            <li>Analisar o uso do site para melhorar o conteúdo</li>
            <li>Exibir anúncios relevantes (Google AdSense)</li>
          </ul>

          <h2>3. Links de Afiliados</h2>
          <p>
            Este site participa de programas de afiliados (Mercado Livre, Amazon). Quando você clica em um link de afiliado, o parceiro pode coletar dados sobre sua visita de acordo com a política de privacidade dele.
          </p>

          <h2>4. Cookies</h2>
          <p>Utilizamos cookies para:</p>
          <ul>
            <li>Google Analytics (análise de tráfego)</li>
            <li>Google AdSense (publicidade personalizada)</li>
            <li>Preferências do usuário</li>
          </ul>
          <p>Você pode desativar cookies nas configurações do seu navegador.</p>

          <h2>5. Compartilhamento de Dados</h2>
          <p>
            Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros, exceto com prestadores de serviço necessários para operação do site (Google Analytics, provedor de newsletter).
          </p>

          <h2>6. Seus Direitos (LGPD)</h2>
          <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
          <ul>
            <li>Confirmar se tratamos seus dados</li>
            <li>Acessar seus dados</li>
            <li>Solicitar correção de dados incompletos</li>
            <li>Solicitar exclusão dos seus dados</li>
            <li>Revogar consentimento</li>
          </ul>
          <p>Para exercer seus direitos, entre em contato: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></p>

          <h2>7. Contato</h2>
          <p>
            Dúvidas sobre esta política? Entre em contato: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
        </div>
      </div>
    </div>
  );
}
