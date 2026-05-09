import { Outlet, Route, Routes } from 'react-router-dom'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { BeritaDetailPage } from './pages/BeritaDetailPage'
import { BeritaPage } from './pages/BeritaPage'
import { HomePage } from './pages/HomePage'
import { JogjaBookFairPage } from './pages/JogjaBookFairPage'
import { KontakPage } from './pages/KontakPage'
import { ProgramPage } from './pages/ProgramPage'
import { DataAnggotaPage } from './pages/keanggotaan/DataAnggotaPage'
import { ManfaatPage } from './pages/keanggotaan/ManfaatPage'
import { SyaratPage } from './pages/keanggotaan/SyaratPage'
import { AdartPage } from './pages/tentang/AdartPage'
import { SejarahPage } from './pages/tentang/SejarahPage'
import { StrukturPage } from './pages/tentang/StrukturPage'
import { VisiMisiPage } from './pages/tentang/VisiMisiPage'

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/berita" element={<BeritaPage />} />
        <Route path="/berita/:slug" element={<BeritaDetailPage />} />
        <Route path="/tentang/sejarah" element={<SejarahPage />} />
        <Route path="/tentang/visi-misi" element={<VisiMisiPage />} />
        <Route path="/tentang/adart" element={<AdartPage />} />
        <Route path="/tentang/struktur" element={<StrukturPage />} />
        <Route path="/keanggotaan/syarat" element={<SyaratPage />} />
        <Route path="/keanggotaan/manfaat" element={<ManfaatPage />} />
        <Route path="/keanggotaan/data-anggota" element={<DataAnggotaPage />} />
        <Route path="/program" element={<ProgramPage />} />
        <Route path="/kontak" element={<KontakPage />} />
        <Route path="/jogja-book-fair" element={<JogjaBookFairPage />} />
      </Route>
    </Routes>
  )
}

export default App
