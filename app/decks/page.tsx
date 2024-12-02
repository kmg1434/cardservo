import Link from 'next/link'
import React from 'react'
import Navbar from '../components/nav-bar'
import prisma from '../_lib/db'
import { SearchBar } from '../components/search-bar'
import { createDeck } from '../api/actions'

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
            <div className='flex-container flex-row'>
                <div className='flex-container flex'>
                    <div className='flex  flex-1 w-8  bg-slate-800'>
                        margin
                    </div>
                    <div className='flex flex-col flex-2 w-3/4 p-4'>
                        <h1 className="py-8 text-2xl">Results for: "Title of Decks Page"</h1>
                        <SearchBar />
                        {decks.map((deck) => (
                            <li key={deck.id} className='flex flex-1 items-center justify-between my-4 px-5 py-5 border-cyan-500 rounded-lg border-2'>
                                <Link href={{
                                    pathname: `/decks/${deck.id}`
                                    }}>
                                    <span className='text-2xl'>{deck.title}</span> <span className='italic pl-2'>by {deck.author.firstName}</span>
                                </Link>
                            </li>
                        ))}
                    </div>
                    <div className='flex flex-1 w-8 bg-slate-800'>
                        margin
                    </div>
                </div>
                <div className='flex-container justify-center text-black py-8 flex flex-row flex-12'>
                    <form action={createDeck} className='flex flex-col  bg-gray-800 border-4 p-4 rounded-lg border-gray-500 gap-y-2 w-[500px]'>
                        <input type="text" name="title" placeholder="Title" className="p-1" />
                        <input type="text" name="format" placeholder="Format" className="p-1" />
                        <input type="checkbox" name="public" value="Public" checked className="p-1" />
                        <textarea name="cardList" rows={6} placeholder="Card List" className="p-1" />
                        <button type="submit" className=" rounded-sm p-1 m-2 bg-blue-500 w-1/3 self-center">Create Deck</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default DecksPage