import { ProfilePage } from '../../components/ui/ProfilePage'
import { profilePageConfigs } from '../../content/sitePages'

export function VisiMisiPage() {
  return <ProfilePage data={profilePageConfigs.visiMisi.data} slugs={profilePageConfigs.visiMisi.slugs} />
}
