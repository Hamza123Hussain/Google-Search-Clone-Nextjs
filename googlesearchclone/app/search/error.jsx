'use client'
import { useEffect } from 'react'

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <div className=" flex flex-col gap-3 justify-center items-center">
      <h1 className=" text-gray-500">Something went wrong</h1>

      <button> Try Again </button>
    </div>
  )
}
