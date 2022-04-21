import React, { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Header } from './components/Header/Header';
import './App.css';
import { Chats } from './pages/Chats';

export const App: FC = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />


        <Route path="chats">
          <Route index element={<Chats />} />
        </Route>

      </Route>
      <Route path="*" element={<h2>404</h2>} />
    </Routes>
  </BrowserRouter >
};
