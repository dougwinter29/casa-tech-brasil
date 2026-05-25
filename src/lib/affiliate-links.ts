/**
 * Links de Afiliados — Casa Tech Brasil
 * Afiliado: matt_tool=45125913 | matt_word=casatechbrasil
 */

const ML = "https://www.mercadolivre.com.br";
const LISTA = "https://lista.mercadolivre.com.br";
const AMZ = "https://www.amazon.com.br/s?k=";
const P = "?matt_tool=45125913&matt_word=casatechbrasil";

export const affiliateLinks: Record<string, string> = {
  // ── ROBÔS ASPIRADORES ──────────────────────────────────────────────────────
  "roborock-s8":    `${ML}/roborock-s8-pro-ultra-rob-wi-fi-aspirador-esfrego-preto-110v/p/MLB29795934${P}`,
  "roborock":       `${ML}/roborock-s8-pro-ultra-rob-wi-fi-aspirador-esfrego-preto-110v/p/MLB29795934${P}`,
  "dreame-l20":     `${ML}/dreame-aspirador-rob-d20-ultra-13000pa-com-base-e-mop-branco/p/MLB66041515${P}`,
  "xiaomi-x20":     `${LISTA}/xiaomi-robot-vacuum-x20-plus${P}`,
  "deebot-t30":     `${LISTA}/ecovacs-deebot-t30-pro${P}`,
  "deebot-n10":     `${LISTA}/ecovacs-deebot-n10-plus${P}`,
  "positivo-smart": `${LISTA}/positivo-smart-robo-aspirador${P}`,
  "robo-aspirador": `${LISTA}/robo-aspirador-inteligente${P}`,
  "todos-robos":    `${LISTA}/robo-aspirador-inteligente${P}`,
  "roomba-j9":      `${AMZ}irobot+roomba+j9+plus`,

  // ── CÂMERAS ────────────────────────────────────────────────────────────────
  "reolink":          `${ML}/cmeras-seguranca-reolink-argus-4-pro-4k-sem-fio-branco/p/MLB51383484${P}`,
  "reolink-argus4":   `${ML}/cmeras-seguranca-reolink-argus-4-pro-4k-sem-fio-branco/p/MLB51383484${P}`,
  "intelbras-im5":    `${LISTA}/intelbras-im5-camera-wifi${P}`,
  "intelbras-im4":    `${LISTA}/intelbras-im4-camera-wifi${P}`,
  "xiaomi-2k":        `${LISTA}/camera-wifi-xiaomi-2k-pro${P}`,
  "xiaomi-camera-2k": `${LISTA}/camera-wifi-xiaomi-2k-pro${P}`,
  "tapo-c200":        `${ML}/tp-link-tapo-c200-cmera-de-seguranca-wifi-1080p-360-pantilt/p/MLB18593981${P}`,
  "tapo-c200-barata": `${ML}/tp-link-tapo-c200-cmera-de-seguranca-wifi-1080p-360-pantilt/p/MLB18593981${P}`,
  "tapo-c200-kit":    `${ML}/tp-link-tapo-c200-cmera-de-seguranca-wifi-1080p-360-pantilt/p/MLB18593981${P}`,
  "camera-100":       `${LISTA}/tp-link-tapo-c110${P}`,
  "cameras-todas":    `${LISTA}/camera-seguranca-wifi${P}`,
  "cameras-ia":       `${LISTA}/camera-seguranca-wifi${P}`,
  "arlo-pro5":        `${AMZ}arlo+pro+5s+camera`,
  "ring":             `${AMZ}ring+doorbell+4`,
  "ring-doorbell4":   `${AMZ}ring+doorbell+4`,
  "google-nest-cam":  `${AMZ}google+nest+cam`,
  "campainha-video":  `${LISTA}/campainha-video-wifi-smart${P}`,

  // ── FECHADURAS DIGITAIS ────────────────────────────────────────────────────
  "intelbras-fr620":      `${ML}/fechadura-digital-de-embutir-fr-620-push-pull-preto-intelbras/p/MLB26111466${P}`,
  "fechadura-digital":    `${LISTA}/fechadura-digital-biometrica${P}`,
  "fechaduras-biometria": `${LISTA}/fechadura-digital-biometrica${P}`,
  "fechaduras-todas":     `${LISTA}/fechadura-digital${P}`,
  "ultraloq-ul3":         `${LISTA}/ultraloq-ul3-fechadura${P}`,
  "yale-assure":          `${LISTA}/yale-assure-fechadura-smart${P}`,
  "positivo-lock":        `${LISTA}/positivo-smart-lock-fechadura${P}`,
  "samsung-shp":          `${AMZ}samsung+shp+fechadura+digital`,
  "schlage-encode":       `${AMZ}schlage+encode+plus`,

  // ── ASSISTENTES / ALEXA ───────────────────────────────────────────────────
  "echo-dot-5":       `${ML}/echo-dot-5a-geraco-alto-falante-preto-amazon-bivolt-preto/p/MLB27190731${P}`,
  "echo-dot":         `${ML}/echo-dot-5a-geraco-alto-falante-preto-amazon-bivolt-preto/p/MLB27190731${P}`,
  "echo-dot-5g":      `${ML}/echo-dot-5a-geraco-alto-falante-preto-amazon-bivolt-preto/p/MLB27190731${P}`,
  "echo-dot-comprar": `${ML}/echo-dot-5a-geraco-alto-falante-preto-amazon-bivolt-preto/p/MLB27190731${P}`,
  "echo-show":        `${LISTA}/amazon-echo-show${P}`,

  // ── ILUMINAÇÃO INTELIGENTE ─────────────────────────────────────────────────
  "govee":             `${ML}/tiras-de-led-multicoloridas-govee-revestidas-com-5-mm-de-cor-de-luz-robica/p/MLB27081234${P}`,
  "philips-hue":       `${LISTA}/philips-hue-lampada-inteligente${P}`,
  "yeelight":          `${LISTA}/xiaomi-yeelight-lampada-inteligente${P}`,
  "lampada-positivo":  `${LISTA}/lampada-inteligente-wifi${P}`,
  "lampadas-baratas":  `${LISTA}/lampada-inteligente-wifi-barata${P}`,
  "lampadas-100":      `${LISTA}/lampada-inteligente-wifi${P}`,
  "filamento-rgb":     `${LISTA}/lampada-filamento-smart-rgb${P}`,
  "led-rgb":           `${LISTA}/tira-led-inteligente-wifi${P}`,
  "led-rgb-smart":     `${ML}/tira-de-luces-led-inteligentes-govee-tira-de-iluminacion-de/p/MLB2000774671${P}`,
  "led-tira-100":      `${LISTA}/tira-led-smart-wifi${P}`,
  "iluminacao-completa": `${LISTA}/kit-iluminacao-inteligente${P}`,

  // ── INTERRUPTORES ──────────────────────────────────────────────────────────
  "positivo-interruptor": `${LISTA}/positivo-smart-interruptor-wifi${P}`,
  "xiaomi-switch":        `${LISTA}/xiaomi-smart-switch-interruptor${P}`,
  "interruptor-wifi":     `${LISTA}/interruptor-inteligente-wifi${P}`,
  "interruptores-todos":  `${LISTA}/interruptor-smart-wifi${P}`,
  "interruptor-sem-fio":  `${LISTA}/interruptor-sem-fio-smart${P}`,
  "dimmer-smart":         `${LISTA}/dimmer-smart-wifi${P}`,
  "intelbras-ews":        `${LISTA}/intelbras-ews-301-interruptor${P}`,

  // ── TOMADAS INTELIGENTES ───────────────────────────────────────────────────
  "tapo-p110":       `${ML}/tomada-inteligente-wi-fi-tapo-p110-tp-link-bivolt/p/MLB37042297${P}`,
  "tapo-p110-100":   `${ML}/tomada-inteligente-wi-fi-tapo-p110-tp-link-bivolt/p/MLB37042297${P}`,
  "tomada-p100":     `${LISTA}/tp-link-tapo-p100-tomada${P}`,
  "sonoff-basic":    `${LISTA}/sonoff-basic-r4${P}`,
  "tomadas-baratas": `${LISTA}/tomada-inteligente-wifi-barata${P}`,
  "tomada-medicao":  `${ML}/tomada-inteligente-wi-fi-tapo-p110-tp-link-bivolt/p/MLB37042297${P}`,
  "regua-smart":     `${LISTA}/regua-tomadas-smart-wifi${P}`,

  // ── AUTOMAÇÃO / HUB ───────────────────────────────────────────────────────
  "sonoff-zbminil2":       `${ML}/sonoff-zbmini-l2-extreme-zigbee-interruptor-s-neutro-cor-branco-110v220v/p/MLB28458402${P}`,
  "zbminil2":              `${ML}/sonoff-zbmini-l2-extreme-zigbee-interruptor-s-neutro-cor-branco-110v220v/p/MLB28458402${P}`,
  "shelly-mini":           `${LISTA}/shelly-1-mini-gen3${P}`,
  "broadlink-rm4":         `${LISTA}/broadlink-rm4-mini-controle${P}`,
  "controle-ir":           `${LISTA}/controle-infravermelho-smart-wifi${P}`,
  "botao-cena":            `${LISTA}/botao-cena-smart-zigbee${P}`,
  "kit-iniciante":         `${LISTA}/kit-casa-inteligente${P}`,
  "kit-iniciante-comprar": `${LISTA}/kit-automacao-residencial${P}`,

  // ── SENSORES ──────────────────────────────────────────────────────────────
  "sensor-porta-100":       `${LISTA}/sensor-abertura-porta-wifi${P}`,
  "sensor-abertura":        `${LISTA}/sensor-abertura-porta-smart${P}`,
  "sensor-pir-100":         `${LISTA}/sensor-presenca-wifi${P}`,
  "sensor-presenca":        `${LISTA}/sensor-presenca-inteligente${P}`,
  "sensor-presenca-barato": `${LISTA}/sensor-presenca-wifi-barato${P}`,
  "sensor-temp-100":        `${LISTA}/sensor-temperatura-umidade-wifi${P}`,
  "sensor-temp":            `${LISTA}/sensor-temperatura-smart${P}`,
  "sensor-fumaca":          `${LISTA}/sensor-fumaca-smart-wifi${P}`,
  "sirene-wifi":            `${LISTA}/sirene-smart-wifi${P}`,

  // ── AUDIO ────────────────────────────────────────────────────────────────
  "som-smart": `${LISTA}/caixa-de-som-smart-wifi${P}`,

  // ── GERAL ────────────────────────────────────────────────────────────────
  "produtos-100":     `${LISTA}/gadgets-casa-inteligente${P}`,
  "produtos-baratos": `${LISTA}/automacao-residencial-barato${P}`,
  "gadgets-todos":    `${LISTA}/automacao-residencial${P}`,
};

/**
 * Retorna o link de afiliado para um produto.
 */
export function getAffiliateLink(key: string, fallback = "https://www.mercadolivre.com.br"): string {
  return affiliateLinks[key] ?? fallback;
}
