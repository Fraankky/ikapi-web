import { StaticPage } from './StaticPage'
import { staticPages } from '../content/sitePages'

export function ProgramPage() {
  return <StaticPage {...staticPages.program} />
}
