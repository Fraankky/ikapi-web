import { ProfilePage } from '../../components/ui/ProfilePage'
import { profilePageConfigs } from '../../content/sitePages'

export function AdartPage() {
  return <ProfilePage data={profilePageConfigs.adart.data} slugs={profilePageConfigs.adart.slugs} />
}
