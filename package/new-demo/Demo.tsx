import React from 'react';
import * as s from './demo.less'
interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
  xxx: string
}

export const Demo = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  console.log(props)
  return (
    <button
      type="button"
      className={s.button}
      {...props}
    >
      {label}
    </button>
  );
};
