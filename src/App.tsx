import React, { FC, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Chats } from './pages/Chats/Chats';
import { Profile } from './pages/Profile'
import { ChatList } from './components/Chatlist/ChatList';
import { Header } from './components/Header/Header';
import { defaultContext, ThemeContext } from './utils/ThemeContext'
import { AboutWithConnect } from './pages/About';

export const App: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
      <ThemeContext.Provider value={
        {
          theme,
          toggleTheme,
        }
      }>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />}>
              <Route index element={<Home />} />
              <Route path="profile" element={<Profile />} />
              <Route path="chats">
                <Route index element={<ChatList />} />
                <Route path=":chatId" element={<Chats />} />
              </Route>
              <Route path="about" element={<AboutWithConnect />} />
            </Route>
            <Route path="*" element={<h2>404</h2>} />
          </Routes>
        </BrowserRouter >
      </ThemeContext.Provider>
  )
};