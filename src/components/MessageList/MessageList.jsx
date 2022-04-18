import React from 'react';
import './MessageList.css';

export const MessageList = ({ messages }) => (
  <ul>
    {messages.map((message, idx) => {
      if (message.username === 'Chatbot')
        return (
          <li key={idx} className="message botmessage">
            <h3 className="botname">{message.username}</h3>{' '}
            <p className="bottext">{message.message}</p>
          </li>
        );
      else
        return (
          <li key={idx} className="message usermessage">
            <h3 className="username">{message.username}</h3>{' '}
            <p className="usertext">{message.message}</p>
          </li>
        );
    })}
  </ul>
);
