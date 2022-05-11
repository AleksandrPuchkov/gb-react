import React, { FC, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addChat, deleteChat } from 'src/store/chats/actions'
import { selectChatList } from 'src/store/chats/selectors'
import './ChatList.less'

export const ChatList: FC = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const chatList = useSelector(selectChatList, (prev, next) => prev.length === next.length)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (name) {
            dispatch(addChat(name))
            setName('')
        }
    }

    return (
        <div className='chatList'>
            <ul>
                {chatList.map((chat) => (
                    <li key={chat.id}>
                        <NavLink className='chatList-tab' to={`/chats/${chat.name}`} style={({ isActive }) => ({ backgroundColor: isActive ? '#DDD' : '#FFF', outline: isActive ? 'none' : '1px solid #DDD' })}>
                            {chat.name}
                            <div className='deleteChat' onClick={() => dispatch(deleteChat(chat.name))}>+</div>
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