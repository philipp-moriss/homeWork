import React from 'react'
import Message from "./Message";

const messageData = {
    avatar: 'https://i.pinimg.com/originals/08/73/60/087360eb7deb1a6aa742fa16a81bdffa.jpg',
    name: 'philipp',
    message: 'press f to respect',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1

            <Message avatar={messageData.avatar} name={messageData.name} message={messageData.message}  time={messageData.time} />

        </div>
    )
}

export default HW1
