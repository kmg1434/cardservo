import { getCardByScryfallId } from '@/app/services/scryfall';
import React from 'react'
import { CardSnippet } from '../../components/card-snippet';
import { headers } from 'next/headers';
import Link from 'next/link';

const CardDetailsPage = async ({ 
  searchParams, 
}: { 
  searchParams?: SearchParams 
}) => {

  const url = headers().get("x-url") ?? headers().get("referer");
  const cardScryfallId = url?.split("/").pop();

  const card: Card = await getCardByScryfallId(cardScryfallId as string);

  return (
    <>
      <CardSnippet card={card} />
      <span className='px-2'>Card Price: ${card.prices.usd}</span>
      <a href={card.purchase_uris.tcgplayer}>TCG Player</a>
    </>
  )
}

export default CardDetailsPage