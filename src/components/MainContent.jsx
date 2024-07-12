import React from 'react'
import Trip from './Trip'
import data from '../data'

const MainContent = () => {
  const totalItems = data.length;

  const trips = data.map((item, index) => {
    return (
      <Trip
        key = {item.id}
        item = {item}
        index = {index}
        totalItems = {totalItems}
      />
    )
  })
  return (
    <div className='content-container'>
      {trips}
    </div>
  )
}

export default MainContent