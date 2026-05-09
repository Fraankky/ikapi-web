import { ProfilePage } from '../../components/ui/ProfilePage'
import { profilePageConfigs } from '../../content/sitePages'

export function SyaratPage() {
  return <ProfilePage data={profilePageConfigs.syarat.data} slugs={profilePageConfigs.syarat.slugs} />
}
