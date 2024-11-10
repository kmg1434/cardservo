import React from 'react'

const CardDetailsPage = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      Card ID: {params.id}
    </div>
  )
}

export default CardDetailsPage