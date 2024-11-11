import Link from 'next/link'
import React from 'react'
import Navbar from '../components/nav-bar'
import { DeckHeader } from '../components/deck-header'

const DeckPage = async ({ params }: { params: { id: number } }) => {

    const deck: Deck = {
        owner: "Kevin",
        title: "Some Izzet Combo Deck",
        card_list: "izzet charm, sol ring, reverberate",
        id: "1"
    }

    const user: User = {
        name: "Kevin",
        id: "1234", 
    }

    return (
        <div>
            <Navbar />
            <h1 className="">Title of Deck Page</h1>
            <Link href="/deck/1">Deck_1</Link>
            <br></br>
            <Link href="/deck/2">Deck_2</Link>
        </div>
    )
}

export default DeckPage