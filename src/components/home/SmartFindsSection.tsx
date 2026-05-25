import Image from "next/image";
import { ExternalLink, Flame } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { productImages } from "@/lib/category-images";

const achados = [
  {
    name: "Lâmpada Smart RGB",
    price: 39,
    originalPrice: 79,
    store: "Mercado Livre",
    href: "https://lista.mercadolivre.com.br/lampada-inteligente-rgb-wifi?matt_tool=45125913&matt_word=casatechbrasil",
    badge: "🔥 Hot",
    image: productImages["lampada"],
  },
  {
    name: "Tomada Wi-Fi c/ Medição",
    price: 89,
    originalPrice: 149,
    store: "Mercado Livre",
    href: "https://lista.mercadolivre.com.br/tomada-inteligente-wifi-medicao-energia?matt_tool=45125913&matt_word=casatechbrasil",
    badge: "⚡ Oferta",
    image: productImages["tomada"],
  },
  {
    name: "Sensor de Presença Zigbee",
    price: 59,
    originalPrice: 99,
    store: "Mercado Livre",
    href: "https://lista.mercadolivre.com.br/sensor-presenca-zigbee-smart?matt_tool=45125913&matt_word=casatechbrasil",
    badge: "💎 Custo-Benefício",
    image: productImages["sensor"],
  },
  {
    name: "Controle IR Universal",
    price: 79,
    originalPrice: 129,
    store: "Mercado Livre",
    href: "https://lista.mercadolivre.com.br/controle-remoto-ir-universal-wifi?matt_tool=45125913&matt_word=casatechbrasil",
    badge: "🔥 Hot",
    image: productImages["controle-ir"],
  },
  {
    name: "Tira LED RGB 5m Wi-Fi",
    price: 79,
    originalPrice: 159,
    store: "Mercado Livre",
    href: "https://lista.mercadolivre.com.br/tira-led-rgb-wifi-5m-smart?matt_tool=45125913&matt_word=casatechbrasil",
    badge: "⚡ Oferta",
    image: productImages["tira-led"],
  },
  {
    name: "Câmera Externa IP66 4MP",
    price: 249,
    originalPrice: 399,
    store: "Mercado Livre",
    href: "https://lista.mercadolivre.com.br/camera-ip-externa-ip66-4mp-wifi?matt_tool=45125913&matt_word=casatechbrasil",
    badge: "💎 Custo-Benefício",
    image: productImages["camera-externa"],
  },
];

export default function SmartFindsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container-site">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Flame size={20} className="text-orange-500" />
              <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide">
                Achados da Semana
              </span>
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Achados Smart 🔥</h2>
            <p className="text-slate-600 mt-1">Ofertas imperdíveis em automação residencial</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {achados.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group bg-white rounded-2xl border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 flex flex-col overflow-hidden"
            >
              {/* Product image */}
              <div className="relative h-28 bg-slate-50 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-2 left-2">
                  <span className="text-xs font-bold text-white bg-orange-500 px-2 py-0.5 rounded-full shadow">
                    {item.badge}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-3 flex flex-col flex-1">
                <h3 className="text-xs font-semibold text-slate-800 leading-tight mb-2 line-clamp-2 flex-1">
                  {item.name}
                </h3>
                <div>
                  <p className="text-xs text-slate-500 line-through">{formatPrice(item.originalPrice)}</p>
                  <p className="text-base font-bold text-slate-900">{formatPrice(item.price)}</p>
                  <div className="flex items-center justify-between mt-1.5">
                    <p className="text-xs text-slate-600 font-medium">{item.store}</p>
                    <ExternalLink size={10} className="text-slate-400" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
