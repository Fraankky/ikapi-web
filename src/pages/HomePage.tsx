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
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <LoadingSpinner />
        </section>
      ) : null}
      {error ? (
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <ErrorMessage message={(error as Error).message} />
        </section>
      ) : null}
      {!isLoading ? (
        data?.content.rendered ? (
          <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-[#e2d8c8] bg-[#fffdfa] p-6 sm:p-8 lg:p-10">
              <PageContent htmlContent={data.content.rendered} fallback={homePageConfig.fallback} />
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
