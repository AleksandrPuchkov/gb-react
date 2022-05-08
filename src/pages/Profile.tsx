import React, { FC, useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectname, selectVisible } from 'src/store/profile/selectors'
import { changeName, toggleProfile, TOGGLE_PROFILE } from '../store/profile/actions'
import { ThemeContext } from '../utils/ThemeContext'

export const Profile: FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const dispatch = useDispatch()
    const [value, setValue] = useState('')
    const visible = useSelector(selectVisible)
    const name = useSelector(selectname)


    return (
        <>
            <h2>Profile</h2>
            <p>{theme === 'light' ? 'sun' : 'moon'}</p>
            <button onClick={toggleTheme}>change theme</button>
            <div>
                <p>{name}</p>
                <input type="checkbox" checked={visible} />
                <button onClick={() => dispatch(toggleProfile())}>change visible</button>
                <br />
                <input type="text" onChange={e => setValue(e.target.value)} value={value} />
                <button onClick={() => dispatch(changeName(value))} >change name</button>
            </div>
        </>
    )
}