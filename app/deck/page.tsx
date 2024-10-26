import Link from 'next/link'
import React from 'react'
import Navbar from '../components/navbar'

const deck = ({ searchParams }: { searchParams: { user: number, format: string } }) => {
    return (
        <div>
            <Navbar />
            <h1>Title of Decks</h1>
            <Link href="/deck/1">Deck_1</Link>
            <br></br>
            <Link href="/deck/2">Deck_2</Link>
        </div>
    )
}

export default deck