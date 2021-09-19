import React from 'react'
import style from './Message.module.css'

type MessageDataType = {
        avatar : string
        name : string
        message : string
        time : string
}



function Message( props: MessageDataType) {
    return (
        <div className={style.wrapper}>
            <div className={'avatar'} >
                <img className={style.styleAvatar} src={props.avatar} />
            </div>
            <div className={style.messege}>
                <div className={'name'}>{props.name}</div>
                <div className={'styleMassage'}>{props.message}</div>
                <div className={'time'} >{props.time}</div>
            </div>

        </div>
    )
}

export default Message
