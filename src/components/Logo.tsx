interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

export function Logo({ className = "", showText = true, size = 32 }: LogoProps) {
  return (
    <a
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Hibbullah Home"
    >
      <img
        src="/logo.svg"
        alt=""
        width={size}
        height={size}
        className="shrink-0"
        aria-hidden="true"
      />
      {showText && (
        <span className="text-[15px] font-semibold tracking-tight text-primary dark:text-white">
          Hibbullah
        </span>
      )}
    </a>
  );
}
