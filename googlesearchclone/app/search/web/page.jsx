'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import SearchResults from '@/Components/SearchResults'
const page = () => {
  console.log(process.env.Context_key)
  console.log(process.env.Api_Key)

  const [searchdata, setdearchdata] = useState([])
  const searchterm = useSearchParams()

  const getdata = async () => {
    const res = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyBXCxmtbJNhgt3hpn1eJv68UZWL8IIKf5E&cx=c3a1d5bebbc044c89&q=${searchterm.get(
        'searchTerm'
      )}`
    )

    if (!res.ok) throw Error('SOMETHING WENT WRONG')

    const data = await res.json()

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
    <div>
      <SearchResults items={searchdata} />
    </div>
  )
}

export default page
