import React from 'react'

const Card_Details = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      Card ID: {params.id}
    </div>
  )
}

export default Card_Details