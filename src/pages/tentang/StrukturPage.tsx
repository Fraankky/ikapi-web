import { ProfilePage } from '../../components/ui/ProfilePage'
import { profilePageConfigs } from '../../content/sitePages'

export function StrukturPage() {
  return <ProfilePage data={profilePageConfigs.struktur.data} slugs={profilePageConfigs.struktur.slugs} />
}
