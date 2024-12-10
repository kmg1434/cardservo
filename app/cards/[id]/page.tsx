import { getCardByMultiverseId } from '@/app/services/scryfall';
import React from 'react'
import { CardSnippet } from '../../components/card-snippet';

const CardDetailsPage = async ({ params }: { params: { id: string } }) => {

  const card = await getCardByMultiverseId(params.id);

  return (
    <div>
      Card ID: {params.id}
      <CardSnippet card={card} />
    </div>
  )
}

export default CardDetailsPage