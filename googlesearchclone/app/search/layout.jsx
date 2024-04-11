import SearchImageHeader from '@/Components/SearchImageHeader'

export default function RootLayout({ children }) {
  return (
    <div>
      <SearchImageHeader />
      {children}
    </div>
  )
}
