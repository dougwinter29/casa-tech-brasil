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
  "cameras-wifi":          "1526947425960-945c6e72858f", // câmera de segurança
  "fechaduras-digitais":   "1558002038-1055907df827",    // fechadura inteligente + smartphone
  "iluminacao-smart":      "1559028012-481c04fa702d",    // lâmpada LED smart
  "assistentes-virtuais":  "1543512214-318c7553f230",    // Amazon Echo / smart speaker
  "sensores":              "1558346490-a72e53ae2d4f",    // sensor IoT
  "interruptores-smart":   "1556742049-0cfed4f6a45d",   // tomada/interruptor smart
  "tomadas-smart":         "1600585154526-990dced4db0d", // hub smart home

  // Slugs usados nos posts MDX
  "automacao-residencial":  "1600585154526-990dced4db0d",
  "casa-inteligente":       "1600585154526-990dced4db0d",
  "gadgets-futuristas":     "1558346490-a72e53ae2d4f",
  "gadgets":                "1558346490-a72e53ae2d4f",
  "iluminacao-inteligente": "1559028012-481c04fa702d",

  // Aliases legados
  "robo-aspirador":  "1558317374-067fb5f30001",
  "camera":          "1526947425960-945c6e72858f",
  "fechadura":       "1558002038-1055907df827",
  "iluminacao":      "1559028012-481c04fa702d",
  "alexa":           "1543512214-318c7553f230",
  "automacao":       "1600585154526-990dced4db0d",

  // Fallback
  "default": "1600585154526-990dced4db0d",
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
  "lampada":         img("1559028012-481c04fa702d", 500, 500),   // lâmpada LED smart
  "tomada":          img("1556742049-0cfed4f6a45d", 500, 500),   // tomada inteligente
  "sensor":          img("1558346490-a72e53ae2d4f", 500, 500),   // sensor IoT / presença
  "controle-ir":     imgPlus("1663100617829-5e747d55ed34", 500, 500), // controle smart home
  "tira-led":        img("1565382038303-8c62e88d119a", 500, 500), // tira LED RGB na parede
  "camera-externa":  imgPlus("1675016457613-2291390d1bf6", 500, 500), // câmera externa
};
