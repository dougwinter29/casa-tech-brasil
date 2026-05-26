/**
 * Mapeamento de imagens Unsplash por categoria e produto.
 *
 * Dois domínios:
 *   images.unsplash.com  → fotos gratuitas  (photo-ID)
 *   plus.unsplash.com    → fotos premium    (premium_photo-ID)
 *
 * Todos os IDs abaixo foram verificados e retornam imagem válida.
 */

// ─── Helpers ─────────────────────────────────────────────────────────────────

function img(id: string, w: number, h: number): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

function imgPlus(id: string, w: number, h: number): string {
  return `https://plus.unsplash.com/premium_photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

// ─── Mapa de IDs por categoria (fotos gratuitas) ──────────────────────────────

const categoryImageIds: Record<string, string> = {
  // Categorias principais
  "robos-aspiradores":     "1558317374-067fb5f30001",   // robô aspirador branco no tapete
  "cameras-wifi":          "1526947425960-945c6e72858f", // câmera de segurança dome
  "fechaduras-digitais":   "1558002038-1055907df827",    // fechadura inteligente + smartphone
  "iluminacao-smart":      "1590845947698-8924d7409b56", // lâmpada LED smart amarela
  "assistentes-virtuais":  "1543512214-318c7553f230",    // Amazon Echo / smart speaker
  "sensores":              "1666401565408-9b6b0741f0d6", // dispositivos IoT (plugs, sensores)
  "interruptores-smart":   "1666401565408-9b6b0741f0d6", // dispositivos IoT
  "tomadas-smart":         "1601467450590-8c3d11cde2fd", // réguas/tomadas inteligentes

  // Slugs usados nos posts MDX
  "automacao-residencial":  "1586023492125-27b2c045efd7", // sala moderna — casa inteligente
  "casa-inteligente":       "1586023492125-27b2c045efd7", // sala moderna — casa inteligente
  "gadgets-futuristas":     "1586023492125-27b2c045efd7", // sala moderna
  "gadgets":                "1586023492125-27b2c045efd7", // sala moderna
  "iluminacao-inteligente": "1590845947698-8924d7409b56", // lâmpada LED smart

  // Aliases legados
  "robo-aspirador":  "1558317374-067fb5f30001",
  "camera":          "1526947425960-945c6e72858f",
  "fechadura":       "1558002038-1055907df827",
  "iluminacao":      "1590845947698-8924d7409b56", // lâmpada LED smart
  "alexa":           "1543512214-318c7553f230",
  "automacao":       "1586023492125-27b2c045efd7", // sala moderna

  // Fallback
  "default": "1586023492125-27b2c045efd7", // sala de estar moderna minimalista
};

export function getCategoryImage(category: string, w = 600, h = 400): string {
  const id = categoryImageIds[category] ?? categoryImageIds["default"];
  return img(id, w, h);
}

// ─── Imagens de produto (específicas por item) ────────────────────────────────
//
// Cada produto usa a imagem mais representativa disponível.
// Fotos premium (plus.unsplash.com) usam imgPlus().

export const productImages: Record<string, string> = {
  // ── Seção Melhores Produtos / FeaturedProducts ─────────────────────────────
  "roborock-s8":     img("1558317374-067fb5f30001", 500, 500),  // robô aspirador branco
  "echo-dot-5":      img("1543512214-318c7553f230", 500, 500),  // Amazon Echo Dot
  "reolink":         imgPlus("1675016457613-2291390d1bf6", 500, 500), // câmera externa 4K
  "intelbras-fr620": img("1558002038-1055907df827", 500, 500),  // fechadura + smartphone
  "govee":           img("1565382038303-8c62e88d119a", 500, 500), // tira LED RGB colorida
  "tapo-c200":       img("1526947425960-945c6e72858f", 500, 500), // câmera dome interna

  // ── Seção Achados da Semana (SmartFindsSection) ────────────────────────────
  "lampada":         img("1590845947698-8924d7409b56", 500, 500),   // lâmpada LED smart amarela
  "tomada":          img("1601467450590-8c3d11cde2fd", 500, 500),   // régua/tomada inteligente
  "sensor":          img("1666401565408-9b6b0741f0d6", 500, 500),   // dispositivos IoT top-down
  "controle-ir":     imgPlus("1663100617829-5e747d55ed34", 500, 500), // controle smart home
  "tira-led":        img("1565382038303-8c62e88d119a", 500, 500), // tira LED RGB na parede
  "camera-externa":  imgPlus("1675016457613-2291390d1bf6", 500, 500), // câmera externa
};
