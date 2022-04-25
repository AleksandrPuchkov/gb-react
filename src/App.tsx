import React, { FC, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Chats } from './pages/Chats';
import { Profile } from './pages/Profile'
import { ChatList } from './components/ChatList/ChatList';
import { Header } from './components/Header/Header';

const initialChats: Chat[] = [
  {
    id: 'default',
    name: 'chat'
  }
]

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

  const [chatList, setChatList] = useState<Chat[]>(initialChats)
  const [messages, setMessages] = useState<Messages>(initialMessage);

  const onAddChat = (chat: Chat) => {
    setChatList([...chatList, chat])
    setMessages({
      ...messages,
      [chat.id]: [],
    })
  }

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />


        <Route path="chats">
          <Route index element={<ChatList chatList={chatList} onAddChat={onAddChat} />} />
          <Route path=":chatId" element={<Chats messages={messages} setMessages={setMessages} chatList={chatList} onAddChat={onAddChat} />} />
        </Route>

      </Route>
      <Route path="*" element={<h2>404</h2>} />
    </Routes>
  </BrowserRouter >
};
