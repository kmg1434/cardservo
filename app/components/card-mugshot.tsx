import React from 'react'
import Image from 'next/image'
import { getCardImageURI, isDoubleSided } from '../_lib/utils';

export const CardMugshot = ({ card }: CardProps) => {

  return (
    <div className='flex flex-col overflow-hidden'>
      <div className='flex flex-row shadow-md hover:shadow-2xl rounded-2xl overflow-hidden'>
        <Image
          src={getCardImageURI(card)}
          width={250}
          height= {400}
          alt={card.name}
        />
      </div>
    </div>
  )
}
