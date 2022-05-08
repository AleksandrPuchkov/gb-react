import React, { FC } from 'react'
import { Outlet, Link, NavLink } from 'react-router-dom'
import './Header.less'

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
    {
        id: 4,
        to: '/about',
        name: 'About'
    },
]

export const Header: FC = () => {
    return <>
        <header className="header">
            <ul className='header-list'>
                {navigate.map((link) => (
                    <li key={link.id}>
                        <NavLink className="header-navlink" to={link.to} style={({ isActive }) => ({
                            backgroundColor: isActive ? '#BBB' : '#FFF',
                            color: isActive ? 'white' : 'black',
                            boxShadow: isActive ? '0px 0px 8px #BBB' : 'none',
                        })}
                        >{link.name}</NavLink><br />
                    </li>
                ))}
            </ul>
            <main>
                <Outlet />
            </main>
        </header>
    </>
}