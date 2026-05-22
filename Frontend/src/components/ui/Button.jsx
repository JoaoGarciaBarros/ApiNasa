export default function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  className = '',
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400/40 hover:scale-[1.02] active:scale-[0.98]'

  const variants = {
    primary: 'bg-sky-400 text-black hover:bg-sky-300',
    secondary: 'bg-white/[0.06] text-white border border-white/[0.12] hover:bg-white/[0.1]',
  }

  const cls = [base, variants[variant] ?? variants.primary, className].join(' ')

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={cls}>
      {children}
    </button>
  )
}
