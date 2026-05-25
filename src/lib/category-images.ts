/**
 * Mapeamento de imagens Unsplash por categoria.
 * Formato: https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w={w}&h={h}&q=80
 */

const categoryImageIds: Record<string, string> = {
  // ── Categorias principais do site ─────────────────────────────────────────
  "robos-aspiradores":    "1558618666-fcd25c85cd64",  // robot vacuum on floor ✅
  "cameras-wifi":         "1526947425960-945c6e72858f", // security camera ✅
  "fechaduras-digitais":  "1614064641938-3bbee52942c7", // smart door lock ✅
  "iluminacao-smart":     "1559028012-481c04fa702d",   // LED smart bulb ✅
  "assistentes-virtuais": "1543512214-318c7553f230",   // Amazon Echo / smart speaker ✅
  "sensores":             "1558346490-a72e53ae2d4f",   // IoT sensor ✅
  "interruptores-smart":  "1556742049-0cfed4f6a45d",  // smart switch / IoT plug ✅
  "tomadas-smart":        "1600585154526-990dced4db0d", // smart outlet / hub ✅

  // ── Slugs usados em posts MDX ─────────────────────────────────────────────
  "automacao-residencial": "1600585154526-990dced4db0d", // smart home device ✅
  "casa-inteligente":      "1600585154526-990dced4db0d", // smart home interior ✅
  "gadgets-futuristas":    "1558346490-a72e53ae2d4f",    // IoT / tech gadget ✅
  "gadgets":               "1558346490-a72e53ae2d4f",    // IoT / tech gadget ✅
  "iluminacao-inteligente":"1559028012-481c04fa702d",   // LED smart bulb ✅

  // ── Aliases legados ───────────────────────────────────────────────────────
  "robo-aspirador":  "1558618666-fcd25c85cd64",
  "camera":          "1526947425960-945c6e72858f",
  "fechadura":       "1614064641938-3bbee52942c7",
  "iluminacao":      "1559028012-481c04fa702d",
  "alexa":           "1543512214-318c7553f230",
  "automacao":       "1600585154526-990dced4db0d",

  // ── Fallback ──────────────────────────────────────────────────────────────
  "default":         "1600585154526-990dced4db0d",  // smart home device ✅
};

export function getCategoryImage(category: string, w = 600, h = 400): string {
  const id = categoryImageIds[category] ?? categoryImageIds["default"];
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

/** Imagens de produto por tipo */
export const productImages: Record<string, string> = {
  "roborock-s8":     getCategoryImage("robos-aspiradores", 500, 500),
  "echo-dot-5":      getCategoryImage("assistentes-virtuais", 500, 500),
  "reolink":         getCategoryImage("cameras-wifi", 500, 500),
  "intelbras-fr620": getCategoryImage("fechaduras-digitais", 500, 500),
  "govee":           getCategoryImage("iluminacao-smart", 500, 500),
  "tapo-c200":       getCategoryImage("cameras-wifi", 500, 500),
  "lampada":         getCategoryImage("iluminacao-smart", 500, 500),
  "tomada":          getCategoryImage("tomadas-smart", 500, 500),
  "sensor":          getCategoryImage("sensores", 500, 500),
  "controle-ir":     getCategoryImage("assistentes-virtuais", 500, 500),
  "tira-led":        getCategoryImage("iluminacao-smart", 500, 500),
  "camera-externa":  getCategoryImage("cameras-wifi", 500, 500),
};
