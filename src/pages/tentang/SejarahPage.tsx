import { ProfilePage } from '../../components/ui/ProfilePage'
import { profilePageConfigs } from '../../content/sitePages'

export function SejarahPage() {
  return <ProfilePage data={profilePageConfigs.sejarah.data} slugs={profilePageConfigs.sejarah.slugs} />
}
