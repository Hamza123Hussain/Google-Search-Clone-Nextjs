'use client'

import { Usepagecontext } from '@/context/pagecontext'
import React from 'react'

const Pageination = () => {
  const { page, setpage } = Usepagecontext()

  const handlePrevPage = () => {
    if (page == 1) {
      setpage(1)
    } else {
      setpage(page - 1)
    }
  }

  const handleNextPage = () => {
    if (page == 20) {
      setpage(20)
    } else {
      setpage(page + 1)
    }
  }

  return (
    <div className=" flex gap-2 justify-center items-center">
      <button
        onClick={handlePrevPage}
        className=" bg-black   w-16 text-white border-2 rounded-full"
      >
        Prev
      </button>

      <button className=" bg-black w-8 text-white border-2 rounded-full">
        {page}
      </button>
      <button className=" bg-black w-8 text-white border-2 rounded-full">
        {page + 1}
      </button>
      <button className=" bg-black w-8 text-white border-2 rounded-full">
        {page + 2}
      </button>
      <button className=" bg-black w-8 text-white border-2 rounded-full">
        {page + 3}
      </button>
      <button className=" bg-black w-8 text-white border-2 rounded-full">
        {page + 4}
      </button>
      <button
        onClick={handleNextPage}
        className=" bg-black w-16 text-white border-2 rounded-full"
      >
        Next
      </button>
    </div>
  )
}

export default Pageination
