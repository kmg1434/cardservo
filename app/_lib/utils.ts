export const getCardImageURI = (card: Card, size?: string, back?: boolean) => {

    if (isDoubleSided(card)) {
        console.log("is double sided")
        if (back) {
            return size === 'large' ? card.card_faces[1].image_uris.large 
                 : size === 'small' ? card.card_faces[1].image_uris.small 
                 : card.card_faces[1].image_uris.normal;
        }
        return size === 'large' ? card.card_faces[0].image_uris.large 
            : size === 'small' ? card.card_faces[0].image_uris.small 
            : card.card_faces[0].image_uris.normal;
    }
    return size === 'large' ? card.image_uris?.large 
        : size === 'small' ? card.image_uris?.small 
        : card.image_uris?.normal
} 

export const isDoubleSided = (card: Card) => {
    return card.layout === 'transform'|| card.layout === 'modal_dfc';
}