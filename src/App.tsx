import React, { FC, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Chats } from './pages/Chats';
import { Profile } from './pages/Profile'
import { ChatList } from './components/ChatList/ChatList';
import { Header } from './components/Header/Header';
import { nanoid } from 'nanoid';

const initialMessage: Messages = {
  default: [
    {
      id: '1',
      username: 'username',
      message: 'hello geekbrains'
    }
  ]
}

export interface Chat {
  id: string,
  name: string;
}

export interface Message {
  id: string,
  username: string,
  message: string
}

export interface Messages {
  [key: string]: Message[];
}

export const App: FC = () => {

  const [messages, setMessages] = useState<Messages>(initialMessage);
  const chatList = useMemo(
    () =>
      Object.entries(messages).map((chat) => ({
        id: nanoid(),
        name: chat[0],
      })),
    [Object.entries(messages).length]
  );


  const onAddChat = (chat: Chat) => {
    setMessages({
      ...messages,
      [chat.name]: [],
    })
  }

  const onDeleteChat = (chatName: string) => {
    const newMessages = { ...messages }
    delete newMessages[chatName]
    setMessages({ ...newMessages })
  }

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />


        <Route path="chats">
          <Route index element={<ChatList chatList={chatList} messages={messages} onDeleteChat={onDeleteChat} onAddChat={onAddChat} />} />
          <Route path=":chatId" element={<Chats messages={messages} setMessages={setMessages} chatList={chatList} onAddChat={onAddChat} onDeleteChat={onDeleteChat} />} />
        </Route>

      </Route>
      <Route path="*" element={<h2>404</h2>} />
    </Routes>
  </BrowserRouter >
};
