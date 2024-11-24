import Link from 'next/link'
import React from 'react'
import Navbar from '../components/nav-bar'
import prisma from '../_lib/db'

const DeckPage = async ({ params }: { params: { id: number } }) => {

    const decks = await prisma.deck.findMany();

    return (


        <div>
            <Navbar />
            <h1 className="">Title of Deck Page</h1>
            {decks.map((deck) => (
                 <li key={deck.id} className='flex items-center justify-between px-5 py-5 border-cyan-500 border-2'>
                    <Link href={`/deck/${deck.id}`}>
                        {deck.title} 
                    </Link>
                 </li>
            ))}
        </div>
    )
}

export default DeckPage