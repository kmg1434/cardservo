const decks = [
    {
        id: "1",
        owner: "Kevin",
        title: "Adeliz Wizard Tribal",
        cardList: "Flame of Anor, Krark, Counterspell"
    }
]

import { NextRequest } from "next/server"

export async function GET() {
    return Response.json({'id':'1', 'name':'Karador Abzan Combo'})
}

export async function POST(req: NextRequest) {
    const body = await req.json()
    
    const newDeck = {
        "id": "1",
        "owner": body.owner,
        "title": body.title,
        cardList: body.cardList
    }

    decks.push(newDeck);

    return Response.json(newDeck, {status: 201});
}