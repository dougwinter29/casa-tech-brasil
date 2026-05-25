/**
 * Mapeamento de imagens Unsplash por categoria.
 * Formato: https://images.unsplash.com/photo-{ID}?auto=format&fit=crop&w={w}&h={h}&q=80
 */

const categoryImageIds: Record<string, string> = {
  "robos-aspiradores":   "1558618666-fcd25c85cd64",  // robot vacuum on floor
  "cameras-wifi":        "1555067905-e4ca4b8d0e47",  // security camera
  "fechaduras-digitais": "1614064641938-3bbee52942c7", // smart door lock
  "iluminacao-smart":    "1559028012-481c04fa702d",  // LED smart bulb
  "assistentes-virtuais":"1543512214-318c7553f230",  // Amazon Echo / smart speaker
  "sensores":            "1558346490-a72e53ae2d4f",  // IoT sensor / smart home device
  "interruptores-smart": "1558618047-3c8c76ca7d13",  // smart switch
  "tomadas-smart":       "1558618047-3c8c76ca7d13",  // smart outlet
  // blog post categories
  "robo-aspirador":      "1558618666-fcd25c85cd64",
  "camera":              "1555067905-e4ca4b8d0e47",
  "fechadura":           "1614064641938-3bbee52942c7",
  "iluminacao":          "1559028012-481c04fa702d",
  "alexa":               "1543512214-318c7553f230",
  "automacao":           "1558346416-6634c38915b1",
  "default":             "1558346416-6634c38915b1",  // smart home interior
};

export function getCategoryImage(category: string, w = 600, h = 400): string {
  const id = categoryImageIds[category] ?? categoryImageIds["default"];
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;
}

/** Imagens de produto por tipo */
export const productImages: Record<string, string> = {
  "roborock-s8":      getCategoryImage("robos-aspiradores", 500, 500),
  "echo-dot-5":       getCategoryImage("assistentes-virtuais", 500, 500),
  "reolink":          getCategoryImage("cameras-wifi", 500, 500),
  "intelbras-fr620":  getCategoryImage("fechaduras-digitais", 500, 500),
  "govee":            getCategoryImage("iluminacao-smart", 500, 500),
  "tapo-c200":        getCategoryImage("cameras-wifi", 500, 500),
  "lampada":          getCategoryImage("iluminacao-smart", 500, 500),
  "tomada":           getCategoryImage("tomadas-smart", 500, 500),
  "sensor":           getCategoryImage("sensores", 500, 500),
  "controle-ir":      getCategoryImage("assistentes-virtuais", 500, 500),
  "tira-led":         getCategoryImage("iluminacao-smart", 500, 500),
  "camera-externa":   getCategoryImage("cameras-wifi", 500, 500),
};
