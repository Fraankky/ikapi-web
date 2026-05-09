export function EmptyState({
  message,
  title = 'Konten belum tersedia',
}: {
  title?: string
  message: string
}) {
  return (
    <div className="rounded-[1.8rem] border border-[#e2d8c8] bg-[#fffaf2]/92 px-6 py-8 shadow-[0_22px_60px_-48px_rgb(20_34_58_/_0.82)]">
      <h2 className="text-xl font-black tracking-[-0.04em] text-[var(--ikapi-ink)]">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{message}</p>
    </div>
  )
}
