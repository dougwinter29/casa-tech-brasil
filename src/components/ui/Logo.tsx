import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const sizes = { sm: "text-lg", md: "text-2xl", lg: "text-3xl" };
  const textColor = variant === "light" ? "text-white" : "text-dark-900";

  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="relative flex items-center justify-center w-9 h-9 bg-gradient-to-br from-brand-500 to-brand-700 rounded-xl shadow-sm group-hover:shadow-md transition-shadow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
          <path d="M3 9.5L12 3L21 9.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(255,255,255,0.15)"/>
          <circle cx="12" cy="14" r="2" fill="currentColor"/>
          <path d="M9 14h6M12 11v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className={`${sizes[size]} font-bold ${textColor} tracking-tight`}>
          Casa<span className="text-brand-600">Tech</span>
        </span>
        <span className={`text-xs font-medium ${variant === "light" ? "text-white/70" : "text-dark-400"} tracking-wide`}>
          BRASIL
        </span>
      </div>
    </Link>
  );
}
