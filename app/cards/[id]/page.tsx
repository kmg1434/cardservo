import { getCardByScryfallId } from '@/app/services/scryfall';
import React from 'react'
import { CardSnippet } from '../../components/card-snippet';
import { headers } from 'next/headers';
import Link from 'next/link';
import Navbar from '@/app/components/nav-bar';

const CardDetailsPage = async ({ 
  searchParams, 
}: { 
  searchParams?: SearchParams 
}) => {

  const url = headers().get("x-url") ?? headers().get("referer");
  const cardScryfallId = url?.split("/").pop();

  const card: Card = await getCardByScryfallId(cardScryfallId as string);

  console.log("card: ", card);

  return (
    <div className='flex flex-col'>
      <Navbar />
      <section className='flex flex-row'>
        <div className='flex w-1/3 shadow-2xl'>
          <CardSnippet card={card} />
        </div>
        <div className='cardText flex-row w-1/3'>
          <h2>{card.name}</h2>
          <p>{card.type_line}</p>
        </div>
        <span className='px-2'>Card Price: ${card.prices?.usd}</span>
        <a target="_blank" href={card.purchase_uris.tcgplayer}>TCG Player</a>
      </section>
    </div>
  )
}

export default CardDetailsPage