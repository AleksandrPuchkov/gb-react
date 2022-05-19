import React, { FC, memo } from 'react';
import style from './MessageList.module.less';

interface Message {
  id: string,
  username: string,
  text: string
}

interface MessageListProps {
  messages: Message[]
}

export const MessageList: FC<MessageListProps> = memo(({ messages }) => {
  return (
  <ul>
    {messages.map((message, idx) => {
      if (message.username === 'Chatbot')
        return (
          <li key={idx} className={`${style.message} ${style.botmessage}`}>
            <h3 className={style.botname}>{message.username}</h3>
            <p className={style.bottext}>{message.text}</p>
          </li>
        );
      else
        return (
          <li key={idx} className={`${style.message} ${style.usermessage}`}>
            <h3 className={style.username}>{message.username}</h3>
            <p className={style.usertext} data-testid="testmessage">
              {message.text}
            </p>
          </li>
        );
    })}
  </ul>
)});
