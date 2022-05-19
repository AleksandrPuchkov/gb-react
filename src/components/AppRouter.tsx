import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutWithConnect } from "src/pages/About";
import { Chats } from "src/pages/Chats/Chats";
import { Home } from "src/pages/Home";
import { Profile } from "src/pages/Profile";
import { ChatList } from "./Chatlist/ChatList";
import { Header } from "./Header/Header";


export const AppRouter: FC = () => (
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
)