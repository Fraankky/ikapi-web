export function ErrorMessage({ message }: { message?: string }) {
  return (
    <div className="rounded-[1.4rem] border border-red-200 bg-red-50/92 px-5 py-4 text-sm font-semibold text-red-800 shadow-[0_18px_50px_-42px_rgb(127_29_29_/_0.65)]">
      {message ?? 'Konten belum bisa dimuat. Silakan coba beberapa saat lagi.'}
    </div>
  )
}
