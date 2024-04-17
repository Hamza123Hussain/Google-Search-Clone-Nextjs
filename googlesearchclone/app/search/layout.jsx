import Footer from '@/Components/Footer'
import Pageination from '@/Components/Pagination'
import SearchImageHeader from '@/Components/SearchImageHeader'
import { PageProvider } from '@/context/pagecontext'

export default function RootLayout({ children }) {
  return (
    <PageProvider>
      <div>
        <SearchImageHeader />
        {children}

        <Footer />
      </div>
    </PageProvider>
  )
}
