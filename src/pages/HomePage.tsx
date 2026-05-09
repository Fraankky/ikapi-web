import { BeritaTerbaru } from '../components/sections/BeritaTerbaru'
import { BookFairBanner } from '../components/sections/BookFairBanner'
import { HeroSection } from '../components/sections/HeroSection'
import { PageContent } from '../components/ui/PageContent'
import { usePage } from '../hooks/usePage'
import { homePageConfig } from '../content/sitePages'
import { ErrorMessage } from '../components/ui/ErrorMessage'
import { LoadingSpinner } from '../components/ui/LoadingSpinner'

export function HomePage() {
  const { data, isLoading, error } = usePage(homePageConfig.slugs)

  return (
    <main>
      <HeroSection />
      {isLoading ? (
        <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
          <LoadingSpinner />
        </section>
      ) : null}
      {error ? (
        <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
          <ErrorMessage message={(error as Error).message} />
        </section>
      ) : null}
      {!isLoading ? (
        data?.content.rendered ? (
          <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-[0.42fr_1fr] lg:items-start">
              <aside className="hidden rounded-[1.6rem] border border-[#dfd2bf] bg-[var(--ikapi-ink)] px-6 py-7 text-white shadow-[0_24px_70px_-48px_rgb(20_34_56_/_0.9)] lg:block">
                <p className="text-[0.66rem] font-bold uppercase tracking-[0.24em] text-white/56">
                  Catatan redaksi
                </p>
                <p className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.05em]">
                  Informasi organisasi disusun ringkas agar mudah dirujuk anggota dan publik.
                </p>
              </aside>
              <div className="ikapi-shell rounded-[2rem] p-2">
                <div className="rounded-[1.55rem] bg-[var(--ikapi-panel)] p-6 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.75)] sm:p-8 lg:p-10">
                  <PageContent htmlContent={data.content.rendered} fallback={homePageConfig.fallback} />
                </div>
              </div>
            </div>
          </section>
        ) : (
          homePageConfig.fallback
        )
      ) : null}
      <BeritaTerbaru />
      <BookFairBanner />
    </main>
  )
}
