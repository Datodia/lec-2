
import React from 'react'

export default function UserCard({userName = 'Donald Trump', userImg, bgColor}) {
    const randomColors = ['#123123', '#a8004b', '#fff000', '#ff1122', '#00af4c']
    const index = Math.floor(Math.random() * randomColors.length)

    bgColor = bgColor ? bgColor : randomColors[index]
    
    return (
        <div style={{background: bgColor}} className='userCard'>
            <img src={userImg} alt="" />
            <h2>{userName}</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, nulla?</p>
        </div>
    )
}
