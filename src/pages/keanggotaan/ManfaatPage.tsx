import { ProfilePage } from '../../components/ui/ProfilePage'
import { profilePageConfigs } from '../../content/sitePages'

export function ManfaatPage() {
  return <ProfilePage data={profilePageConfigs.manfaat.data} slugs={profilePageConfigs.manfaat.slugs} />
}
