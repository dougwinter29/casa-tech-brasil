import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, Star } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { affiliateLinks } from "@/lib/affiliate-links";

export const metadata: Metadata = {
  title: "Comparativos — Produtos de Casa Inteligente Lado a Lado",
  description: "Compare os melhores produtos de automação residencial. Tabelas detalhadas com especificações, preços e recomendações da equipe Casa Tech Brasil.",
  alternates: { canonical: "/comparativos" },
};

export default function ComparativosPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 py-14">
        <div className="container-site text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Comparativos</h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Produtos lado a lado para você escolher o melhor para sua necessidade e orçamento.
          </p>
        </div>
      </div>

      <div className="container-site py-12">
        <div className="space-y-10 max-w-5xl mx-auto">

          {/* Comparativo 1: Robôs Aspiradores */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">🤖 Robôs Aspiradores — Comparativo Completo</h2>
              <p className="text-blue-100 text-sm mt-1">Modelos testados de R$899 a R$4.999</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Modelo</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Preço</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Sucção</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Esfregão</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Base Auto</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Nota</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Comprar</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Roborock S8 Pro Ultra", price: 4999, suc: "6.000 Pa", esfregao: "✅ Sônico", base: "✅ Completa", nota: 9.8, href: affiliateLinks["roborock-s8"], badge: "🏆 Melhor" },
                    { name: "Dreame L20 Ultra", price: 3799, suc: "7.000 Pa", esfregao: "✅ Rotativo", base: "✅ c/ Secagem", nota: 9.6, href: affiliateLinks["dreame-l20"] },
                    { name: "Xiaomi X20 Plus", price: 3299, suc: "4.000 Pa", esfregao: "✅ Eletrônico", base: "✅ Limpeza", nota: 9.4, href: affiliateLinks["xiaomi-x20"], badge: "💎 Custo-Ben" },
                    { name: "Ecovacs T30 Pro", price: 2999, suc: "11.000 Pa", esfregao: "✅ Rotativo", base: "✅ Completa", nota: 9.5, href: affiliateLinks["deebot-t30"] },
                    { name: "Deebot N10 Plus", price: 1499, suc: "4.300 Pa", esfregao: "✅ Básico", base: "✅ Esvaziamento", nota: 8.8, href: affiliateLinks["deebot-n10"] },
                    { name: "Positivo Smart", price: 899, suc: "1.800 Pa", esfregao: "❌", base: "❌", nota: 7.2, href: affiliateLinks["positivo-smart"], badge: "💵 Econômico" },
                  ].map((r) => (
                    <tr key={r.name} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-slate-900">
                        {r.name}
                        {r.badge && <span className="ml-2 text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full">{r.badge}</span>}
                      </td>
                      <td className="px-4 py-3 font-bold text-slate-900">{formatPrice(r.price)}</td>
                      <td className="px-4 py-3 text-slate-600">{r.suc}</td>
                      <td className="px-4 py-3">{r.esfregao}</td>
                      <td className="px-4 py-3">{r.base}</td>
                      <td className="px-4 py-3 font-bold text-brand-600">{r.nota}/10</td>
                      <td className="px-4 py-3">
                        <a href={r.href} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 font-bold text-xs px-3 py-1.5 rounded-lg hover:bg-yellow-500 transition-colors">
                          Ver <ExternalLink size={10} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-slate-100">
              <Link href="/blog/melhores-robos-aspiradores-2026" className="text-brand-600 hover:underline text-sm font-medium">
                → Ver guia completo com reviews detalhados
              </Link>
            </div>
          </section>

          {/* Comparativo 2: Câmeras */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 px-6 py-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">📷 Câmeras Wi-Fi — Comparativo</h2>
              <p className="text-purple-100 text-sm mt-1">Melhores câmeras de segurança para casa</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Modelo</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Preço</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Resolução</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Uso</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">App PT</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Nota</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Comprar</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Reolink Argus 4 Pro", price: 699, res: "4K", uso: "Externa", app: "❌", nota: 9.4, href: affiliateLinks["reolink"], badge: "🏆 Melhor Ext" },
                    { name: "Intelbras iM5", price: 249, res: "5MP", uso: "Interna", app: "✅", nota: 9.0, href: affiliateLinks["intelbras-im5"], badge: "🇧🇷 Nacional" },
                    { name: "Xiaomi 2K Pro", price: 199, res: "2K", uso: "Interna", app: "✅", nota: 8.8, href: affiliateLinks["xiaomi-2k"], badge: "💎 Custo-Ben" },
                    { name: "TP-Link Tapo C200", price: 169, res: "1080p", uso: "Interna", app: "✅", nota: 8.5, href: affiliateLinks["tapo-c200"], badge: "💵 Mais Vendida" },
                    { name: "Arlo Pro 5S", price: 1299, res: "2K HDR", uso: "Ambos", app: "❌", nota: 9.6, href: affiliateLinks["arlo-pro5"] },
                    { name: "Ring Doorbell 4", price: 799, res: "1080p", uso: "Porta", app: "✅", nota: 9.0, href: affiliateLinks["ring"] },
                  ].map((r) => (
                    <tr key={r.name} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-slate-900">
                        {r.name}
                        {r.badge && <span className="ml-2 text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full">{r.badge}</span>}
                      </td>
                      <td className="px-4 py-3 font-bold">{formatPrice(r.price)}</td>
                      <td className="px-4 py-3 text-slate-600">{r.res}</td>
                      <td className="px-4 py-3 text-slate-600">{r.uso}</td>
                      <td className="px-4 py-3">{r.app}</td>
                      <td className="px-4 py-3 font-bold text-brand-600">{r.nota}/10</td>
                      <td className="px-4 py-3">
                        <a href={r.href} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 font-bold text-xs px-3 py-1.5 rounded-lg hover:bg-yellow-500 transition-colors">
                          Ver <ExternalLink size={10} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-slate-100">
              <Link href="/blog/melhores-cameras-wifi-casa" className="text-brand-600 hover:underline text-sm font-medium">
                → Ver guia completo de câmeras Wi-Fi
              </Link>
            </div>
          </section>

          {/* Comparativo 3: Fechaduras Digitais */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-green-700 px-6 py-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">🔐 Fechaduras Digitais — Comparativo</h2>
              <p className="text-green-100 text-sm mt-1">Modelos testados de R$399 a R$1.999</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Modelo</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Preço</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Biometria</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Wi-Fi</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">App PT</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Nota</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Comprar</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Intelbras FR 620", price: 799, bio: "✅", wifi: "✅", app: "✅ PT-BR", nota: 9.2, href: affiliateLinks["intelbras-fr620"], badge: "🏆 Melhor Custo-Ben" },
                    { name: "Ultraloq UL3", price: 1299, bio: "✅", wifi: "✅", app: "⚠️ EN", nota: 9.0, href: affiliateLinks["ultraloq-ul3"] },
                    { name: "Yale Assure SL", price: 1599, bio: "❌", wifi: "✅", app: "⚠️ EN", nota: 8.8, href: affiliateLinks["yale-assure"], badge: "💎 Premium" },
                    { name: "Positivo Smart Lock", price: 399, bio: "❌", wifi: "✅", app: "✅ PT-BR", nota: 7.8, href: affiliateLinks["positivo-lock"], badge: "💵 Econômica" },
                    { name: "Samsung SHP-DP609", price: 1999, bio: "✅", wifi: "❌", app: "⚠️ EN", nota: 8.5, href: affiliateLinks["samsung-shp"] },
                  ].map((r) => (
                    <tr key={r.name} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-slate-900">
                        {r.name}
                        {r.badge && <span className="ml-2 text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full">{r.badge}</span>}
                      </td>
                      <td className="px-4 py-3 font-bold text-slate-900">{formatPrice(r.price)}</td>
                      <td className="px-4 py-3">{r.bio}</td>
                      <td className="px-4 py-3">{r.wifi}</td>
                      <td className="px-4 py-3 text-slate-600">{r.app}</td>
                      <td className="px-4 py-3 font-bold text-brand-600">{r.nota}/10</td>
                      <td className="px-4 py-3">
                        <a href={r.href} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 font-bold text-xs px-3 py-1.5 rounded-lg hover:bg-yellow-500 transition-colors">
                          Ver <ExternalLink size={10} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-slate-100">
              <Link href="/blog/melhores-fechaduras-digitais" className="text-brand-600 hover:underline text-sm font-medium">
                → Ver guia completo de fechaduras digitais
              </Link>
            </div>
          </section>

          {/* Comparativo 4: Iluminação Smart */}
          <section className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">💡 Iluminação Smart — Comparativo</h2>
              <p className="text-yellow-100 text-sm mt-1">Lâmpadas e tiras de LED inteligentes</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Produto</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Preço</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Tipo</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Protocolo</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">RGB</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Nota</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Comprar</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Philips Hue White & Color", price: 349, tipo: "Lâmpada E27", proto: "Zigbee", rgb: "✅ 16M cores", nota: 9.8, href: affiliateLinks["philips-hue"], badge: "🏆 Melhor Eco" },
                    { name: "Govee Tira LED Wi-Fi 5m", price: 149, tipo: "Tira LED", proto: "Wi-Fi", rgb: "✅ RGB", nota: 8.8, href: affiliateLinks["govee"], badge: "💎 Custo-Ben" },
                    { name: "Xiaomi Yeelight RGBW", price: 89, tipo: "Lâmpada E27", proto: "Wi-Fi", rgb: "✅ RGB", nota: 8.5, href: affiliateLinks["yeelight"] },
                    { name: "Positivo Smart Lamp", price: 49, tipo: "Lâmpada E27", proto: "Wi-Fi", rgb: "⚠️ Branco", nota: 7.5, href: affiliateLinks["lampada-positivo"], badge: "💵 Mais Barata" },
                    { name: "Tira LED Smart RGB 5m", price: 79, tipo: "Tira LED", proto: "Wi-Fi", rgb: "✅ RGB", nota: 7.8, href: affiliateLinks["led-rgb"] },
                  ].map((r) => (
                    <tr key={r.name} className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-slate-900">
                        {r.name}
                        {r.badge && <span className="ml-2 text-xs bg-brand-50 text-brand-700 px-2 py-0.5 rounded-full">{r.badge}</span>}
                      </td>
                      <td className="px-4 py-3 font-bold text-slate-900">{formatPrice(r.price)}</td>
                      <td className="px-4 py-3 text-slate-600">{r.tipo}</td>
                      <td className="px-4 py-3 text-slate-600">{r.proto}</td>
                      <td className="px-4 py-3">{r.rgb}</td>
                      <td className="px-4 py-3 font-bold text-brand-600">{r.nota}/10</td>
                      <td className="px-4 py-3">
                        <a href={r.href} target="_blank" rel="noopener noreferrer nofollow" className="inline-flex items-center gap-1 bg-yellow-400 text-yellow-900 font-bold text-xs px-3 py-1.5 rounded-lg hover:bg-yellow-500 transition-colors">
                          Ver <ExternalLink size={10} />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-slate-100">
              <Link href="/blog/iluminacao-inteligente-guia-completo" className="text-brand-600 hover:underline text-sm font-medium">
                → Ver guia completo de iluminação inteligente
              </Link>
            </div>
          </section>

        </div>

        <p className="text-center text-xs text-slate-400 mt-8">
          * Links de afiliados. Podemos ganhar comissão sem custo adicional para você. Preços sujeitos a alteração.
        </p>
      </div>
    </div>
  );
}
