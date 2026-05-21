import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { siteConfig, categories } from "@/lib/site-config";
import FooterNewsletter from "./FooterNewsletter";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400">
      {/* Main footer */}
      <div className="container-site py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed">
              O maior portal de casa inteligente do Brasil. Reviews honestos, guias completos e os melhores produtos para automatizar sua casa.
            </p>
            <p className="mt-4 text-xs text-slate-500 leading-relaxed">
              {siteConfig.affiliateDisclaimer}
            </p>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="text-white font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2">
              {categories.slice(0, 6).map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/categorias/${cat.slug}`}
                    className="text-sm hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span>{cat.icon}</span> {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              {[
                { label: "Blog", href: "/blog" },
                { label: "Reviews", href: "/reviews" },
                { label: "Comparativos", href: "/comparativos" },
                { label: "Melhores Produtos", href: "/melhores-produtos" },
                { label: "Sobre Nós", href: "/sobre" },
                { label: "Contato", href: "/contato" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Receba as melhores ofertas e dicas de casa inteligente direto no seu e-mail.
            </p>
            <FooterNewsletter />
            <p className="mt-2 text-xs text-slate-500">
              Sem spam. Cancele quando quiser.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container-site py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Privacidade", href: "/privacidade" },
              { label: "Termos", href: "/termos" },
              { label: "Cookies", href: "/privacidade#cookies" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
