import Link from "next/link";
import { ExternalLink, Flame } from "lucide-react";
import { formatPrice } from "@/lib/utils";

const achados = [
  { emoji: "💡", name: "Lâmpada Smart RGB", price: 39, originalPrice: 79, store: "Mercado Livre", href: "#", badge: "🔥 Hot" },
  { emoji: "🔌", name: "Tomada Wi-Fi c/ Medição", price: 89, originalPrice: 149, store: "Amazon", href: "#", badge: "⚡ Oferta" },
  { emoji: "📡", name: "Sensor de Presença Zigbee", price: 59, originalPrice: 99, store: "Mercado Livre", href: "#", badge: "💎 Custo-Benefício" },
  { emoji: "🎛️", name: "Controle IR Universal", price: 79, originalPrice: 129, store: "Amazon", href: "#", badge: "🔥 Hot" },
  { emoji: "💡", name: "Tira LED RGB 5m Wi-Fi", price: 79, originalPrice: 159, store: "Mercado Livre", href: "#", badge: "⚡ Oferta" },
  { emoji: "📷", name: "Câmera Externa IP66 4MP", price: 249, originalPrice: 399, store: "Amazon", href: "#", badge: "💎 Custo-Benefício" },
];

export default function SmartFindsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-site">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Flame size={20} className="text-orange-500" />
              <span className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
                Achados da Semana
              </span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Achados Smart 🔥</h2>
            <p className="text-slate-500 mt-1">Ofertas imperdíveis em automação residencial</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {achados.map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group bg-white rounded-2xl border border-slate-100 p-4 hover:border-orange-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex flex-col"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {item.emoji}
              </div>
              <span className="text-xs font-bold text-orange-500 mb-1">{item.badge}</span>
              <h3 className="text-xs font-semibold text-slate-800 leading-tight mb-2 line-clamp-2 flex-1">
                {item.name}
              </h3>
              <div>
                <p className="text-xs text-slate-400 line-through">{formatPrice(item.originalPrice)}</p>
                <p className="text-base font-bold text-slate-900">{formatPrice(item.price)}</p>
                <p className="text-xs text-slate-400 mt-1">{item.store}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
