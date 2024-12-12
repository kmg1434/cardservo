import React from 'react'
import Image from 'next/image'

export const CardSnippet = ({ card }: CardProps) => {

  console.log("cardImageURIs: ", card.image_uris);

  return (
    <div className='flex flex-col p-1 overflow-hidden transition-all duration-300'>
      <div className='flex flex-row shadow-lg rounded-2xl overflow-hidden'>
        <Image
          src={card.image_uris?.normal}
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
