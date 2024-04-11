import React from 'react'
import Link from 'next/link'
const SearchResults = ({ items }) => {
  const itemelements = items.map((element) => (
    <div key={element.cacheId} className="border-2 border-gray-100 p-4  w-96">
      <h3 className="text-sm text-gray-600 hover:underline">
        {element.link.substring(0, 45)}
      </h3>
      <Link href={element.link}>
        <h1 className="text-blue-700">{element.title}</h1>
      </Link>
      <p className="text-sm">{element.snippet.substring(0, 70)}...</p>
    </div>
  ))

  return (
    <>
      <div className=" flex flex-col gap-10  pl-10 mt-5 mb-5">
        {' '}
        {itemelements}
      </div>
    </>
  )
}

export default SearchResults
