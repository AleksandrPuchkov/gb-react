import React, { FC } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'

const navigate = [
    {
        id: 1,
        to: '/',
        name: 'Home'
    },
    {
        id: 2,
        to: '/profile',
        name: 'Profile'
    },
    {
        id: 3,
        to: '/chats',
        name: 'Chats'
    },
]

export const Header: FC = () => {
    return <>
        <header>
            <ul>
                {navigate.map((link) => (
                    <li key={link.id}><NavLink to={link.to} style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
                    >{link.name}</NavLink><br /></li>
                ))}
            </ul>
            <main>
                <Outlet />
            </main>
        </header>
    </>
}