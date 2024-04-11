'use client'
import ImageResults from '@/Components/ImageResults'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {
  console.log(process.env.Context_key)
  console.log(process.env.Api_Key)

  const [searchdata, setdearchdata] = useState([])
  const searchterm = useSearchParams()

  const getdata = async () => {
    const res = await fetch(
      `https://www.googleapis.com/customsearch/v1?key=AIzaSyBXCxmtbJNhgt3hpn1eJv68UZWL8IIKf5E&cx=c3a1d5bebbc044c89&q=${searchterm.get(
        'searchTerm'
      )} } &searchType=image`
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

  /**"searchInformation": {
"searchTime": 0.193993,
"totalResults": "21040000000", */
  //START FOR THE PAGINATION
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
      <ImageResults items={searchdata} />
    </div>
  )
}

export default page
