'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import SearchResults from '@/Components/SearchResults'
import { Usepagecontext } from '@/context/pagecontext'
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
      )}&start=${page}`
    )

    if (!res.ok) throw Error('SOMETHING WENT WRONG')

    const data = await res.json()
    settime(data.searchInformation.formattedSearchTime)
    setresults(data.searchInformation.formattedTotalResults)
    setdearchdata(data.items)
  }

  useEffect(() => {
    getdata()
  }, [])

  if (searchdata.length > 1) {
    console.log(searchdata)
  }
  /**
   snippet
: 
"Share your videos with friends, family, and the world."
   * 

htmlSnippet
: 
"Share your videos with friends, family, and the world."

htmlFormattedUrl
: 
"https://www.youtube.com/channel/UCWsslCoN3b_wBaFVWK_ye_A"
   */

  return (
    <div className="flex flex-col">
      <h5 className=" text-gray-600 px-8 mt-5 lg:px-24  ">
        About {results} results ({searchtime}) seconds
      </h5>
      <SearchResults items={searchdata} />
    </div>
  )
}

export default page
