import React from 'react'
import Link from 'next/link'
import { TbGridDots } from 'react-icons/tb'

const HomeHeader = () => {
  return (
    <div>
      <div className=" flex justify-end item-center p-2 gap-5">
        <Link
          className=" py-2 hover:underline text-sm "
          href={'https://mail.google.com'}
        >
          Gmail
        </Link>
        <Link
          className="py-2 hover:underline text-sm  "
          href={'https://image.google.com'}
        >
          Images
        </Link>

        <TbGridDots className=" hover:bg-gray-100 rounded-full text-4xl p-2" />

        <button className=" text-sm  bg-blue-500 text-white px-6 py-2 rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
          Sign In
        </button>
      </div>
    </div>
  )
}

export default HomeHeader
