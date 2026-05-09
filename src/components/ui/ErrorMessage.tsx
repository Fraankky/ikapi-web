export function ErrorMessage({ message }: { message?: string }) {
  return (
    <div className="rounded-[1.25rem] border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-800">
      {message ?? 'Konten belum bisa dimuat. Silakan coba beberapa saat lagi.'}
    </div>
  )
}
