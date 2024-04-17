'use client'
import ImageResults from '@/Components/ImageResults'
import Pageination from '@/Components/Pagination'
import { Usepagecontext } from '@/context/pagecontext'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
  console.log(process.env.Context_key)
  console.log(process.env.Api_Key)
  const { page } = Usepagecontext()
  const [searchdata, setdearchdata] = useState([])
  const [results, setresults] = useState(0)
  const [searchtime, settime] = useState(0)
  const searchterm = useSearchParams()

  const getdata = async () => {
    const res = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyCfjjiL0USDarwuL_9rPopIKXxpui1xP0E&cx=c3a1d5bebbc044c89&q=${searchterm.get(
        'searchTerm'
      )} }start=${page}&searchType=image`
    )

    if (!res.ok) throw Error('SOMETHING WENT WRONG')

    const data = await res.json()

    console.log(data.searchInformation)
    settime(data.searchInformation.formattedSearchTime)
    setresults(data.searchInformation.formattedTotalResults)
    setdearchdata(data.items)
  }

  useEffect(() => {
    getdata()
  }, [page])

  if (searchdata.length > 1) {
    console.log(searchdata)
  }

  console.log(page)
  return (
    <div className="mt-4  mx-auto w-auto">
      <div className="flex flex-col">
        <h5 className="text-gray-600">
          About {results} results ({searchtime}) seconds
        </h5>
        <div className=" p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          <ImageResults items={searchdata} />
        </div>
        <Pageination />
      </div>
    </div>
  )
}

export default page
