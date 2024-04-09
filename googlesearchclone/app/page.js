import HomeHeader from '@/Components/HomeHeader'
import HomeSearch from '@/Components/HomeSearch'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <HomeHeader />

      <div className=" flex justify-center items-center">
        <Image
          src={
            'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png'
          }
          width={300}
          height={100}
        />
      </div>

      <HomeSearch />
    </>
  )
}
