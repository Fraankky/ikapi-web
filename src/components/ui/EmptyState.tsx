export function EmptyState({
  message,
  title = 'Konten belum tersedia',
}: {
  title?: string
  message: string
}) {
  return (
    <div className="rounded-[1.5rem] border border-[#e2d8c8] bg-[#fffdfa] px-6 py-8">
      <h2 className="text-xl font-extrabold tracking-tight text-[var(--ikapi-ink)]">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{message}</p>
    </div>
  )
}
