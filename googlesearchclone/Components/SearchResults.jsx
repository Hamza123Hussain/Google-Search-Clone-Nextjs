import React from 'react'
import Link from 'next/link'
const SearchResults = ({ items }) => {
  const itemelements = items.map((element) => (
    <div key={element.cacheId} className=" px-8  py-2.5 lg:px-24  w-fit">
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
      <div className=" flex flex-col mt-5 mb-5"> {itemelements}</div>
    </>
  )
}

export default SearchResults
