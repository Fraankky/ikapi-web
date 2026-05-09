import { ProfilePage } from '../../components/ui/ProfilePage'
import { profilePageConfigs } from '../../content/sitePages'

export function DataAnggotaPage() {
  return <ProfilePage data={profilePageConfigs.dataAnggota.data} slugs={profilePageConfigs.dataAnggota.slugs} />
}
