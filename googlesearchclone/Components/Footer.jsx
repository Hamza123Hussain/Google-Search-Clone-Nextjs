'use client'
import React, { useEffect, useState } from 'react'

const Footer = () => {
  const [country, setcountry] = useState()
  const getdata = async () => {
    const response = await fetch(
      'https://extreme-ip-lookup.com/json/?key=SVliSjC6yvkMxV4Hr0so'
    )
    const data = await response.json()
    if (response.ok) {
      console.log(data)
      setcountry(data.country)
    }
  }

  useEffect(() => {
    getdata()
  }, [])
  return (
    <footer className=" absolute bottom-0 w-full text-sm bg-[#f2f2f2] text-gray-500  flex flex-col mt-200">
      <div className="p-2 px-6">{country}</div>
      <hr className="  border-2 " />

      <div className="flex flex-col sm:flex-row py-5 px-6 gap-6">
        <div className="flex  gap-4">
          <h6 className=" text-sm">About</h6>
          <h6 className=" text-sm">Advertising</h6>
          <h6 className=" text-sm">Business</h6>
          <h6 className=" text-sm">How Search works</h6>
        </div>

        <ul className="flex justify-center items-center gap-4 sm:flex-row  sm:absolute sm:right-10 ">
          <li>Privacy</li>
          <li>Terms</li>
          <li>Settings</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
