import React from 'react';
import './Button.css';

export const Button = ({ disabled }) => (
  <button
    className="submitbutton"
    data-testid="submitbutton"
    type="submit"
    disabled={disabled}
  >
    Отправить
  </button>
);
