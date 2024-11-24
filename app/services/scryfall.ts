//convert deck list to card data

const scryfallBaseUrl = 'https://api.scryfall.com';

// convert decklist string to card data 
async function getDeckList(deckList: string) {

    const multiverseIds = deckList.split(',');

    const body = {
        "identifiers": [
            {
                "multiverse_id": "683a5707-cddb-494d-9b41-51b4584ded69"
            },
            {
                "name": "Ancient Tomb"
            },
            {
                "set": "mrd",
                "collector_number": "150"
            }
        ]
    }
    multiverseIds.forEach(id => {

    });
    const scryfallUrl = `${scryfallBaseUrl}/cards/multiverse/${multiverseIds[0]}`;

    const res = await fetch(scryfallUrl, {
        method: 'GET',
        headers: {
            'User-Agent': 'Cardservo/v0.0.1',
            'Accept': 'application/json;',
        },
    })

    return 0;
}
