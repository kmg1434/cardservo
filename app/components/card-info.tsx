const CardInfo = ({ card }: CardProps) => {
    return (
        <div className='cardText bg-gray-300 border-2 rounded shadow-md border-black flex-row w-1/3'>
          <div className='grid grid-cols-2 p-2 border-b-1 font-bold shadow-sm'>
            <h2 className='flex'>{card.name}</h2>
            <span className='flex justify-self-end'>{card.colors}</span>
          </div>
          <p className='p-2 border-b-1 shadow-sm'>{card.type_line}</p>
          <p className='p-2 border-b-1 shadow-sm'>{card.oracle_text}</p>
          <p className='p-2 border-b-1 shadow-sm italic'>{card.flavor_text}</p>
          <p className='p-2 border-b-1 shadow-sm'>{card.rarity}</p>
          {card.type_line.includes('Creature') && <p className='p-2 border-b-1 shadow-sm'>{card.power}/{card.toughness}</p>}
          <p className='p-2 border-b-1 shadow-sm'>Artist: {card.artist}</p>
        </div>
    )
}

export default CardInfo;