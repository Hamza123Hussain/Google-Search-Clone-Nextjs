'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { RxCross2 } from 'react-icons/rx'
import { TbGridDots } from 'react-icons/tb'
import SearchHeaderOptions from './SearchHeaderOptions'

const SearchImageHeader = () => {
  const [inputdata, setInputData] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputdata.trim() !== '') {
      // Handle form submission
      console.log('Form submitted with input:', inputdata)
      // Clear input after submission
      setInputData('')
    }
  }

  return (
    <div>
      <div className="flex justify-evenly items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          alt="Google Logo"
          width={90}
          height={90}
        />
        <form
          onSubmit={handleSubmit}
          className="flex w-full mt-5 max-w-[90%] border border-gray-200 px-5 py-3 rounded-full shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl"
        >
          <input
            value={inputdata}
            onChange={(e) => setInputData(e.target.value)}
            type="text"
            placeholder="Search"
            className="flex-grow focus:outline-none"
          />
          <div className="flex gap-2 justify-center items-center">
            {inputdata !== '' && (
              <RxCross2
                className="cursor-pointer"
                onClick={() => setInputData('')}
              />
            )}
            <div className="text-gray-400">|</div>
            <button type="submit">
              <AiOutlineSearch className="text-xl text-gray-500 mr-3 cursor-pointer" />
            </button>
          </div>
        </form>

        <div className="flex justify-center items-center gap-5">
          <TbGridDots className="hover:bg-gray-100 rounded-full text-5xl mt-5" />
          <button className="text-sm bg-blue-500 text-white p-4 rounded-md hover:brightness-105 hover:shadow-md transition-shadow">
            Sign In
          </button>
        </div>
      </div>
      <hr className="border-1 border-gray-100" />
      <SearchHeaderOptions />
    </div>
  )
}

export default SearchImageHeader
