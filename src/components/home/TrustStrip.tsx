export default function TrustStrip() {
  const items = [
    { icon: "🔬", text: "Reviews 100% Independentes" },
    { icon: "📅", text: "Atualizado Semanalmente" },
    { icon: "🇧🇷", text: "Focado no Mercado Brasileiro" },
    { icon: "🎁", text: "Guias 100% Gratuitos" },
  ];

  return (
    <div className="bg-white border-b border-slate-100">
      <div className="container-site py-3">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {items.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
              <span className="text-base leading-none">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
