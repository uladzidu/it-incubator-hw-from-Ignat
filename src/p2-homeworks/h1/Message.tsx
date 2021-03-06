import React from 'react'

export type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div>
            <img width={'75px'} src={props.avatar} alt=""/>
            <div>{props.name}</div>
            <div>{props.message}</div>
            <div>{props.time}</div>
        </div>
    )
}

export default Message
