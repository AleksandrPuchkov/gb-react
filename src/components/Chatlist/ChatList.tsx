import React, { FC, useEffect, useState } from 'react'
import { NavLink, Link, Navigate } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { Chat, Messages } from '../../App'
import './ChatList.css'

interface ChatListProps {
    chatList: Chat[];
    messages: Messages;
    onAddChat: (chats: Chat) => void;
    onDeleteChat: (chat: string) => void;
}

export const ChatList: FC<ChatListProps> = ({ chatList, messages, onAddChat, onDeleteChat }) => {
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
                        <NavLink className='chatTab' to={`/chats/${chat.name}`} style={({ isActive }) => ({ backgroundColor: isActive ? '#DDD' : '#FFF', outline: isActive ? 'none' : '1px solid #DDD' })}>
                            {chat.name}
                            <div className='deleteChat' onClick={() => onDeleteChat(chat.name)}>+</div>
                        </NavLink>

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