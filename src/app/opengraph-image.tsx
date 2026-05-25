import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Casa Tech Brasil — Automação Residencial & Gadgets Inteligentes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          padding: "60px",
        }}
      >
        {/* Logo area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              background: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "44px",
            }}
          >
            🏠
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "52px",
                fontWeight: "900",
                color: "white",
                letterSpacing: "-2px",
                lineHeight: 1,
              }}
            >
              Casa<span style={{ color: "#3b82f6" }}>Tech</span>
            </span>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#94a3b8",
                letterSpacing: "6px",
                marginTop: "4px",
              }}
            >
              BRASIL
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "28px",
            color: "#cbd5e1",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
            margin: "0",
          }}
        >
          Reviews honestos, comparativos completos e guias de automação residencial
        </p>

        {/* Chips */}
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {["🤖 Robôs", "📷 Câmeras", "🔐 Fechaduras", "💡 Iluminação", "🗣️ Alexa"].map(
            (chip) => (
              <div
                key={chip}
                style={{
                  background: "rgba(59,130,246,0.15)",
                  border: "1px solid rgba(59,130,246,0.3)",
                  color: "#93c5fd",
                  padding: "10px 20px",
                  borderRadius: "100px",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                {chip}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
