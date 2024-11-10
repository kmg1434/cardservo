import React from 'react'
import Image from 'next/image'

export const CardSnippet = ({ card }: CardProps) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg'>
      <div className='px-4 py-4'>
        <Image
          src={card.image_uris.normal}
          width={400}
          height={400}
          alt={card.name}
        />
      </div>
    </div>
  )
}
