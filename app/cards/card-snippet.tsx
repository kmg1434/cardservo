import React from 'react'
import Image from 'next/image'

export const CardSnippet = ({ card }: CardProps) => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row shadow-md hover:shadow-lg rounded-3xl overflow-hidden'>
        <Image
          src={card.image_uris.normal}
          width={300}
          height={400}
          alt={card.name}
        />
      </div>
      <div className=' py-2 flex flex-row justify-center'>
        {card.name}
      </div>
    </div>
  )
}
