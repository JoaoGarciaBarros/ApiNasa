import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function ApiCard({ title, description, Icon, onExplore, href, status = 'Em breve' }) {
  const inner = (
    <div className="flex flex-col h-full">
      {Icon && (
        <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-white/[0.05] border border-white/[0.08] mb-5">
          <Icon size={20} className="text-sky-400" />
        </div>
      )}

      <div className="flex-1">
        <h3 className="text-white font-semibold text-base leading-snug">{title}</h3>
        <p className="text-white/55 text-sm mt-2 leading-relaxed">{description}</p>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40 bg-white/[0.04] border border-white/[0.07] rounded-full px-2.5 py-1">
          <span className="h-1 w-1 rounded-full bg-amber-400/70" />
          {status}
        </span>
        <span className="inline-flex items-center gap-1 text-sky-400 text-sm font-medium group-hover:gap-1.5 transition-all duration-200">
          Explorar <ArrowRight size={14} />
        </span>
      </div>
    </div>
  )

  const classes =
    'group flex flex-col p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1 text-left h-full cursor-pointer'

  if (href) {
    return (
      <Link to={href} className={classes}>
        {inner}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onExplore} className={classes}>
      {inner}
    </button>
  )
}
