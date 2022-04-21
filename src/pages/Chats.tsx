import React, { FC, useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import { MessageList } from '../components/MessageList/MessageList';
import { Button } from '../components/Button/Button';
import './Chats.css';

interface Message {
    id: string,
    username: string,
    message: string
}

export const Chats: FC = () => {

    const [message, setValue] = useState('');
    const [username, setUsername] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [disabled, setDisabled] = useState(false);

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessages([...messages, { id: nanoid(), username: username, message: message }]);
        setValue('');
    }

    useEffect(() => {
        if (
            messages.length &&
            messages[messages.length - 1].username != 'Chatbot'
        ) {
            setDisabled(!disabled);
            const botTimeout = setTimeout(() => {
                setMessages([
                    ...messages,
                    { id: nanoid(), username: 'Chatbot', message: 'Hello from Chatbot!' },
                ]);
            }, 1500);

            return () => {
                clearTimeout(botTimeout);
            };
        }
        if (disabled) setDisabled(!disabled);
    }, [messages]);

    return (
        <form onSubmit={handleSubmitForm}>
            <MessageList messages={messages} />
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
    );
}