import React from 'react'
import Image from 'next/image'

interface Card {
  object: string,
  id: string,
  oracle_id: string,
  multiverse_id: string,
  mtgo_id: string,
  mtgo_foil_id: string,
  tcgplayer_id: string,
  cardmarket_id: string,
  name: string,
  lang: string,
  released_at: string,
  uri: string,
  scryfall_uri: string,
  layout: string,
  highres_image: boolean,
  image_status: string,
  image_uris: {
    small: string,
    normal: string,
    large: string,
    png: string,
    art_crop: string,
    border_crip: string,
  },
  mana_cost: string,
  cmc: string,
  type_line: string,
  oracle_text: string,
  colors: [],
  color_identity: [],
  keywords: [],
  legalities: {
    standard: string,
    future: string,
    historic: string,
    timeless: string,
    gladiator: string,
    pioneer: string,
    explorer: string,
    modern: string,
    legacy: string,
    pauper: string,
    vintage: string,
    penny: string,
    commander: string,
    oathbreaker: string,
    standardbrawl: string,
    brawl: string,
    alchemy: string,
    paupercommander: string,
    duel: string,
    oldschool: string,
    premodern: string,
    predh: string,
  },
  games: [],
  reserved: boolean,
  foil: boolean,
  nonfoil: boolean,
  finishes: [],
  oversized: boolean,
  promo: boolean,
  reprint: boolean,
  variation: boolean,
  set_id: string,
  set: string,
  set_name: string,
  set_type: string,
  set_uri: string,
  set_search_uri: string,
  scryfall_set_uri: string,
  rulings_uri: string,
  prints_search_uri: string,
  collector_number: string,
  digital: boolean,
  rarity: string,
  flavor_text: string,
  card_back_id: string,
  artist: string,
  artist_ids: [],
  illustration_id: string,
  border_color: string,
  frame: string,
  full_art: boolean,
  textless: boolean,
  booster: boolean,
  story_spotlight: boolean,
  edhrec_rank: number,
  penny_rank: number,
  prices: {
    usd: string,
    usd_foil: string,
    usd_etched: string,
    eur: string,
    eur_foil: string,
    tix: string,
  },
  related_uris: {
    gatherer: string,
    tcgplayer_infinite_articles: string,
    tcgplayer_infinite_decks: string,
    edhrec: string,
  },
  purchase_uris: {
    tcgplayer: string,
    cardmarket: string,
    cardhoarder: string,
  }
}

interface CardProps {
  card: Card
}

export const CardSnippet = ({ card }: CardProps) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg'>
      <h2 className="text-sm font-semibold text-green-800 mb-2 truncate">{card.name}
      </h2>
      <Image
        src="https://cards.scryfall.io/large/front/b/c/bca53097-108d-457e-831c-e3d6cb499a41.jpg?1562792382"
        width={500}
        height={500}
        alt="Picture of the card art"
      />
    </div>
  )
}
