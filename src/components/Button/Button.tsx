import React, { FC, memo } from 'react';
import style from './Button.module.less';

interface ButtonProps {
  disabled: boolean,
}

export const Button: FC<ButtonProps> = memo(({ disabled }) => {
  console.log(style)
  return (
    <button
      className={style.submitbutton}
      data-testid="submitbutton"
      type="submit"
      disabled={disabled}
    >
      Отправить
    </button>
  )
}
);
