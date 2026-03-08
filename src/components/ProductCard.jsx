import React from 'react'

export default function ProductCard({productImg, productName, productPrice, productReviews}) {
  return (
    <div className='productCard'>
        <img src={productImg} alt="" />
        <h2>{productName}</h2>
        <h3>${productPrice}</h3>
        <p>{productReviews}</p>
    </div>
  )
}
