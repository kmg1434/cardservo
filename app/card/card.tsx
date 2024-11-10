import React from 'react'
import Navbar from '../components/nav-bar';
import Image from 'next/image'
import { CardSnippet } from './card-snippet';

const gathererUrl = 'https://api.magicthegathering.io/v1/cards';
const scryfallUrl = 'https://api.scryfall.com/cards/search?q=destroy';

const Card = async ({ params }: { params: { id: number } }) => {

  const res = await fetch(scryfallUrl, {
    method: 'GET',
    headers: {
      'User-Agent': 'Cardservo/v0.0.1',
      'Accept': 'application/json;',
    },
  })

  const cards = await res.json()

  return (
    <div>
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Title of Card Page
        </h1>
        <div className='flex'>
          {
            cards['data'].map((card: ScryfallCardObj) =>
              <CardSnippet key={card.id} card={card}/>)
          }
        </div>
      </div>
    </div>
  )
}

export default Card