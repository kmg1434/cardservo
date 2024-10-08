import React from 'react'

const card = ({ params }: { params: { id: number } }) => {
  return (
    <div>card {params.id}</div>
  )
}

export default card