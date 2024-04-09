'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
const HomeSearch = () => {
  const [input, setinput] = useState('')
  const [randomLoading, setRandomSearchLoading] = useState(false)
  const router = useRouter()
  const handlesubmit = (e) => {
    e.preventDefault()
    if (input == '') return
    router.push(`search/web?searchTerm=${input}`)
    setinput('') // Resetting the input to an empty string
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handlesubmit()
    }
  }

  const randomSearch = async () => {
    setRandomSearchLoading(true)
    const response = await fetch('https://random-word-api.herokuapp.com/word')
    const data = await response.json()
    const word = data[0] // the word is stored in it
    if (!response) return
    router.push(`/search/web?searchTerm=${word}`)
    setRandomSearchLoading(false)
  }

  return (
    <>
      <form className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl">
        <AiOutlineSearch
          onClick={handlesubmit}
          className="text-xl text-gray-500 mr-3 cursor-pointer"
        />
        <input
          value={input}
          onKeyUp={handleKeyPress}
          type="text"
          className="flex-grow focus:outline-none"
          onChange={(e) => setinput(e.target.value)}
        />
      </form>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 justify-center sm:justify-center mt-8 sm:space-x-4">
        <button
          type="submit"
          onClick={handlesubmit}
          className="hidden sm:block bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-full sm:w-36 h-10 transition-shadow"
        >
          Google Search
        </button>
        <button
          onClick={randomSearch}
          className="hidden sm:block bg-[#f8f9fa] rounded-md text-sm text-gray-800 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-full sm:w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm"
        >
          {randomLoading ? 'Loading...' : 'I am Feeling Lucky'}
        </button>
      </div>
    </>
  )
}

export default HomeSearch
