'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai'

export default function SearchHeaderOptions() {
  const router = useRouter() // used for navigation
  const searchParams = useSearchParams() // hok to geet params data
  const searchTerm = searchParams.get('searchTerm') // geeting the params data from the url

  const pathname = usePathname() // used for geeting which link is active

  const selectTab = (tab) => {
    //function to route us to the correct page
    router.push(`/search/${tab}?searchTerm=${searchTerm}`)
  }
  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
      <div
        onClick={() => selectTab('web')}
        className={`flex items-center space-x-1 border-b-4 border-transparent cursor-pointer pb-3 px-2 ${
          pathname == '/search/web' ? 'text-blue-600 border-blue-600' : ''
        }`}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab('image')}
        className={`flex items-center space-x-1 border-b-4 border-transparent  cursor-pointer pb-3 px-2 ${
          pathname == '/search/image' ? 'text-blue-600 border-blue-600' : ''
        }`}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  )
}
