import React from 'react'
import Navbar from '../components/navbar';
import Image from 'next/image'
import { CardSnippet } from './cardsnippet';

interface GathererCardObj {
  name: string,
  manaCost: string,
  cmc: number,
  colors: Array<string>,
  colorIdentity: Array<string>,
  type: string,
  types: Array<string>,
  subtypes: Array<string>,
  rarity: string,
  set: string,
  setname: string,
  text: string,
  flavor: string,
  artist: string,
  number: string,
  power: string,
  toughness: string,
  layout: string,
  variations: Array<string>,
  printings: Array<string>,
  legalitites: Array<string>,
  id: string,
}

interface ScryfallCardObj {
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

const gathererUrl = 'https://api.magicthegathering.io/v1/cards';
const scryfallUrl = 'https://api.scryfall.com/cards/search?q=destroy the evidence';

const card = async ({ params }: { params: { id: number } }) => {

  const res = await fetch(scryfallUrl, {
    method: 'GET',
    headers: {
      'User-Agent': 'Cardservo/v0.0.1',
      'Accept': 'application/json;',
    },
  })

  const cards = await res.json()

  console.log("cards: ", cards);

  return (
    <div>
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Title of card page
        </h1>
        {
          cards['data'].map((card: ScryfallCardObj) => 
            <CardSnippet key={card.id} card={card}/>)
        }
      </div>
    </div>
  )
}

export default card