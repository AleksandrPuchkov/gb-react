import React, { FC, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { Chat } from '../../App'
import './ChatList.css'

interface ChatListProps {
    chatList: Chat[];
    onAddChat: (chats: Chat) => void
}

export const ChatList: FC<ChatListProps> = ({ chatList, onAddChat }) => {
    const [name, setName] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (name) {
            onAddChat(
                {
                    id: nanoid(),
                    name,
                })
            setName('')
        }
    }

    return (
        <div className='chatList'>
            <ul>
                {chatList.map((chat) => (
                    <li key={chat.id}>
                        <NavLink className='chatTab' to={`/chats/${chat.id}`} style={({ isActive }) => ({ backgroundColor: isActive ? '#DDD' : '#FFF', outline: isActive? 'none' : '1px solid #DDD' })}>{chat.name}</NavLink>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <button type="submit">add chat</button>
            </form>
        </div>
    )
}