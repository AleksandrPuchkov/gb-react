import React, { FC, useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { MessageList } from '../components/MessageList/MessageList'
import { Button } from '../components/Button/Button'
import { ChatList } from '../components/ChatList/ChatList'
import { Chat, Messages } from '../App'
import './Chats.css'

interface ChatsProps {
    chatList: Chat[];
    messages: Messages;
    setMessages: React.Dispatch<React.SetStateAction<Messages>>;
    onAddChat: (chats: Chat) => void;
    onDeleteChat: (chat: string) => void;
}

export const Chats: FC<ChatsProps> = ({ chatList, messages, setMessages, onAddChat, onDeleteChat }) => {

    const { chatId } = useParams();
    const [message, setValue] = useState('');
    const [username, setUsername] = useState('');
    const [disabled, setDisabled] = useState(false);
console.log("CHATS RENDER")
    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (chatId) {
            setMessages({
                ...messages, [chatId]: [...messages[chatId],
                {
                    id: nanoid(),
                    username: username,
                    message: message
                }]
            });
        }
        setValue('');
    }

    useEffect(() => {
        if (
            chatId &&
            messages[chatId]?.length &&
            messages[chatId][messages[chatId].length - 1].username != 'Chatbot'
        ) {
            setDisabled(!disabled);
            const botTimeout = setTimeout(() => {
                setMessages({
                    ...messages,
                    [chatId]: [...messages[chatId],
                    {
                        id: nanoid(),
                        username: 'Chatbot',
                        message: 'Greetings from Chatbot!'
                    }]
                });
            }, 1500);

            return () => {
                clearTimeout(botTimeout);
            };
        }
        if (disabled) setDisabled(!disabled);
    }, [messages]);

    if (!chatList.find((chat) => chat.name === chatId)) {
        return <Navigate replace to="/chats" />
    }

    return (<div className="chatWindow">
        <ChatList chatList={chatList} messages={messages} onAddChat={onAddChat} onDeleteChat={onDeleteChat} />
        <form className="chatForm" onSubmit={handleSubmitForm}>
            <MessageList messages={chatId ? messages[chatId] : []} />
            <input
                className="inputusername"
                data-testid="inputusername"
                placeholder="Введите имя..."
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />
            <textarea
                className="inputmessage"
                placeholder="Введите текст..."
                value={message}
                onChange={(e) => setValue(e.target.value)}
            />
            <br />
            <Button disabled={disabled} />
        </form>
    </div>
    );
}