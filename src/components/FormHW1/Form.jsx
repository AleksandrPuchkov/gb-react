import React, { useState } from 'react'
import './styles/Form.css'
import { Message } from './Message'
import { Input } from './Input'
import { Button } from './Button'

export const Form = () => {
    const [value, setValue] = useState('')
    const [message, setMessage] = useState('Это поле Message, и в нем отобразится новое сообщение')

    const handleClick = () => {
        setMessage(value)
    }

    const handleChange = (ev) => {
        setValue(ev.target.value)
    }

    return <div className='form'>
        <Message message={message} />
        <Input value={value} change={handleChange}  />
        <br />
        <Button click={handleClick} />
    </div>
}