import '../../pages/pages.css'

export default function JsonBlock({ data }) {
  const formatted = typeof data === 'string' ? data : JSON.stringify(data, null, 2)

  return (
    <div className="json-scroll w-full max-h-96 overflow-auto rounded-2xl bg-black/60 border border-white/[0.10] p-4">
      <pre className="text-xs text-white/90 whitespace-pre-wrap break-all leading-relaxed">
        {formatted}
      </pre>
    </div>
  )
}
