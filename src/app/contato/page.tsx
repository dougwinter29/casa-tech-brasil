import { Metadata } from "next";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contato — Fale com a Casa Tech Brasil",
  description: "Entre em contato com a equipe Casa Tech Brasil. Dúvidas, sugestões ou parcerias.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="container-site max-w-2xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-100 rounded-2xl mb-4">
            <Mail size={26} className="text-brand-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Entre em Contato</h1>
          <p className="text-slate-500 text-lg">
            Dúvidas, sugestões, parcerias? Estamos aqui para ajudar.
          </p>
        </div>

        <ContactForm />

        <div className="mt-8 text-center text-sm text-slate-500">
          Você também pode nos escrever diretamente para{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-brand-600 hover:underline">
            {siteConfig.email}
          </a>
        </div>
      </div>
    </div>
  );
}
