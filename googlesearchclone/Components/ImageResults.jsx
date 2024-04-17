import React from 'react'
import Link from 'next/link'
const ImageResults = ({ items }) => {
  const itemelements = items.map((result) => (
    <div className="mb-8" key={result.link}>
      <div className="group">
        <Link href={result.image.contextLink}>
          <img
            src={result.thumbnailLink}
            alt={result.title}
            width={result.image.thumbnailWidth}
            height={result.image.thumbnailHeight}
            className="h-60 group-hover:shadow-xl w-full object-contain transition-shadow duration-300"
          />
        </Link>
        <Link href={result.image.thumbnailLink}>
          <h2 className="group-hover:underline truncate text-xl">
            {result.title}
          </h2>
        </Link>
        <Link href={result.image.contextLink}>
          <p className="group-hover:underline truncate text-gray-600">
            {result.displayLink}
          </p>
        </Link>
      </div>
    </div>
  ))

  /**
       * image": {
"contextLink": "https://cellbio.hms.harvard.edu/events/fawcett-lectures",
       * "link": "https://www.topuniversities.com/sites/default/files/styles/articles_inline/public/embed-carousel/AdobeStock_460085365.jpg.webp",
       * "d": "www.topuniversities.com",
       * "title": "How to make the most of your university lectures | Top Universities",
       */
  return <>{itemelements}</>
}

export default ImageResults
