import React, { FC, memo } from 'react';
import './Button.css';

interface ButtonProps {
  disabled: boolean,
}

export const Button: FC<ButtonProps> = memo(({ disabled }) =>
(
  <button
    className="submitbutton"
    data-testid="submitbutton"
    type="submit"
    disabled={disabled}
  >
    Отправить
  </button>
)
);