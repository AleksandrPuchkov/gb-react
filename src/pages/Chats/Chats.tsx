import React, { FC, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { MessageList } from 'components/MessageList/MessageList'
import { Button } from 'components/Button/Button'
import { ChatList } from 'src/components/Chatlist/ChatList'
import { WithClasses } from 'src/HOC/WithClasses'
import { selectChatList, selectChats } from 'src/store/chats/selectors'
import { addMessageWithReply } from 'src/store/chats/actions'
import './Chats.less'
import { AddMessage } from 'src/store/chats/types'
import { ChatsState } from 'src/store/chats/reducer'
import { ThunkDispatch } from 'redux-thunk'

export const Chats: FC = () => {

    const { chatId } = useParams();
    const dispatch = useDispatch<ThunkDispatch<ChatsState, void, ReturnType<AddMessage>>>()
    const chats = useSelector(selectChats)
    const chatList = useSelector(selectChatList, shallowEqual)
    const MessageListWithClass = WithClasses(MessageList)
    const [value, setValue] = useState('');
    const [username, setUsername] = useState('');
    const [disabled, setDisabled] = useState(false);

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (chatId) {
            dispatch(addMessageWithReply(chatId, {text: value, username: username}))
        }
        setValue('');
    }

    if (!chatList.find((chat) => chat.name === chatId)) {
        return <Navigate replace to="/chats" />
    }

    return (<div className="chat">
        <ChatList />
        <form className="chat-form" onSubmit={handleSubmitForm}>
            <MessageList messages={chatId ? chats[chatId] : []} />
            <input
                className="chat-form-inputusername"
                data-testid="inputusername"
                placeholder="Введите имя..."
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />
            <textarea
                className="chat-form-inputmessage"
                placeholder="Введите текст..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <br />
            <Button disabled={disabled} />
        </form>
    </div>
    );
}