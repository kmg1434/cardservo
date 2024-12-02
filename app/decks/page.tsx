import Link from 'next/link'
import React from 'react'
import Navbar from '../components/nav-bar'
import prisma from '../_lib/db'
import { getDeckList } from '../services/scryfall'
import { SearchBar } from '../components/search-bar'
import { getDeck } from '../api/actions'

const DecksPage = async ({ params }: { params: { id: string } }) => {

    const decks = await prisma.deck.findMany({
        take: 15,
        skip: 0,
        select: {
            id: true,
            author: true,
            title: true,
            cardList: true,
            format: true,
            public: true,
            createdAt: true,
            updatedAt: true
        }
    });

    // const decks = getDeck(params.id);

    return (
        <div>
            <Navbar />
            <div className='flex flex-container'>
                <div className='flex flex-col flex-1 w-8'>
                    
                </div>
                <div className='flex flex-col flex-2 w-3/4'>
                    <h1 className="py-8 text-2xl">Results for: "Title of Decks Page"</h1>
                    <SearchBar />
                    {decks.map((deck) => (
                        <li key={deck.id} className='flex flex-1 items-center justify-between px-5 py-5 border-cyan-500 border-y-2'>
                            <Link href={{
                                pathname: `/decks/${deck.id}`
                                }}>
                                {deck.title}
                            </Link>
                        </li>
                    ))}
                </div>
                <div className='flex flex-col flex-1 w-8'>
                    
                </div>
            </div>
        </div>
    )
}

export default DecksPage