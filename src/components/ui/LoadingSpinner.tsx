export function LoadingSpinner({
  label = 'Memuat konten',
  variant = 'page',
}: {
  label?: string
  variant?: 'page' | 'cards'
}) {
  if (variant === 'cards') {
    return (
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3" aria-label={label}>
        {[0, 1, 2].map((item) => (
          <div key={item} className="overflow-hidden rounded-[1.8rem] border border-[#e2d8c8] bg-[#fffaf2] p-1.5">
            <div className="h-40 animate-pulse rounded-[1.35rem] bg-[#e9e0d3]" />
            <div className="grid gap-3 px-4 py-5">
              <span className="h-3 w-28 animate-pulse rounded-full bg-[#e6d9c9]" />
              <span className="h-5 w-11/12 animate-pulse rounded-full bg-[#dacbb8]" />
              <span className="h-5 w-8/12 animate-pulse rounded-full bg-[#dacbb8]" />
              <span className="h-3 w-full animate-pulse rounded-full bg-[#e6d9c9]" />
              <span className="h-3 w-9/12 animate-pulse rounded-full bg-[#e6d9c9]" />
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid min-h-48 gap-3 rounded-[1.8rem] border border-[#e2d8c8] bg-[#fffaf2] p-6 text-sm font-medium text-slate-600 shadow-[0_22px_60px_-48px_rgb(20_34_58_/_0.82)]">
      <span className="h-4 w-32 animate-pulse rounded-full bg-[#e6d9c9]" />
      <span className="h-7 w-10/12 animate-pulse rounded-full bg-[#dacbb8]" />
      <span className="h-3 w-full animate-pulse rounded-full bg-[#e6d9c9]" />
      <span className="h-3 w-8/12 animate-pulse rounded-full bg-[#e6d9c9]" />
      <span className="sr-only">{label}</span>
    </div>
  )
}
