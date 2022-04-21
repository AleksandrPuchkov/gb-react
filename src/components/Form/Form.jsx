import React, { useState, useEffect } from 'react';
import { MessageList } from '../MessageList/MessageList';
import { Button } from '../Button/Button';
import './Form.css';

export const Form = () => {
  const [message, setValue] = useState('');
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setMessages([...messages, { username: username, message: message }]);
    setValue('');
  };

  useEffect(() => {
    if (
      messages.length &&
      messages[messages.length - 1].username != 'Chatbot'
    ) {
      setDisabled(!disabled);
      const botTimeout = setTimeout(() => {
        setMessages([
          ...messages,
          { username: 'Chatbot', message: 'Hello from Chatbot!' },
        ]);
      }, 1500);

      return () => {
        clearTimeout(botTimeout);
      };
    }
    if (disabled) setDisabled(!disabled);
  }, [messages]);

  return (
    <form onSubmit={handleSubmitForm}>
      <MessageList messages={messages} />
      <input
        className="inputusername"
        data-testid="inputusername"
        placeholder="Введите имя..."
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <textarea
        className="inputmessage"
        placeholder="Введите текст..."
        type="text"
        value={message}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <Button disabled={disabled} />
    </form>
  );
};
