import React from 'react'

const Trip = (props) => {
  return (   
    <div>
      <div className='travel-container'>
        <div className='tavel-image-container'><img className='travel-image' src={props.item.imageUrl} alt="" /></div>
        <div className='text-content'>
          <div className='location-row'>
            <div className='location-box'>
              <div className='location-icon'>📍</div>
              <div className='location-name'>{props.item.location}</div>
            </div>
            <a href={props.item.googleMapsUrl} className='location-link'>View on Google Maps</a>
          </div>
          <div className='travel-title'>{props.item.title}</div>
          <div className='travel-date'>{props.item.startDate + " " + props.item.endDate}</div>
          <div className='travel-text'>{props.item.description}</div>
        </div>
      </div>
      {props.index !== props.totalItems - 1 && <hr />}
    </div>
  )
}

export default Trip

//  {
//     id: 1,
//     title: "莲花山公园 Lianhuashan Park",
//     location: "深圳 Shenzhen",
//     googleMapsUrl: "https://maps.app.goo.gl/ib823mMtXkByg9Pw8",
//     startDate: "25 Jun, 2024",
//     endDate: "",
//     description: "Lianhuashan Park in Shenzhen is a sprawling urban park known for its scenic beauty, lush greenery, and the prominent Deng Xiaoping statue that offers panoramic views of the city from its hilltop.",
//     imageUrl: "Lianhuashan.jpeg"
//   },