import React, { FC, memo } from 'react';
import { nanoid } from 'nanoid';
import './MessageList.css';

interface Message {
  id: string,
  username: string,
  message: string
}

interface MessageListProps {
  messages: Message[] // массив значений Message (объектов) || Array<Message>
}

export const MessageList: FC<MessageListProps> = memo(({ messages }) => (
  <ul>
    {messages.map((message, idx) => {
      if (message.username === 'Chatbot')
        return (
          <li key={idx} className="message botmessage">
            <h3 className="botname">{message.username}</h3>
            <p className="bottext">{message.message}</p>
          </li>
        );
      else
        return (
          <li key={idx} className="message usermessage">
            <h3 className="username">{message.username}</h3>
            <p className="usertext" data-testid="testmessage">
              {message.message}
            </p>
          </li>
        );
    })}
  </ul>
));
