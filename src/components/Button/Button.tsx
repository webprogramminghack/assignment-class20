import React, { ReactNode, MouseEvent, FocusEvent, KeyboardEvent } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';

type ButtonProps = {
  color?: 'primary' | 'secondary' | 'danger';
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLButtonElement>) => void;
  onFocus?: (event: FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: FocusEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  children,
  disabled,
  ...remainingProps
}) => {
  return (
    <button
      className={clsx(styles.button, {
        [styles.primary]: color === 'primary',
        [styles.secondary]: color === 'secondary',
        [styles.danger]: color === 'danger',
      })}
      disabled={disabled}
      {...remainingProps}
    >
      <span>{children}</span>
    </button>
  );
};
