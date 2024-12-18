import { getCardByScryfallId } from '@/app/services/scryfall';
import React from 'react'
import { headers } from 'next/headers';
import Navbar from '@/app/components/nav-bar';
import { CardMugshot } from '@/app/components/card-mugshot';
import CardInfo from '@/app/components/card-info';

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
      <section className='flex flex-row pt-6'>
        <div className='flex w-1/3 justify-center'>
          <CardMugshot card={card} />
        </div>
        <CardInfo card={card}/>
        <span className='px-2'>Card Price: ${card.prices?.usd}</span>
        <a className='border-2 rounded shadow-md border-black px-2' target="_blank" href={card.purchase_uris.tcgplayer}>TCG Player</a>
      </section>
    </div>
  )
}

export default CardDetailsPage