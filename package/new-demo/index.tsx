import React from 'react';
import * as s from './index.less'
interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  onClick?: () => void;
}

export const Demo = ({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={s.button}
      {...props}
    >
      {label || '默认文字'}
    </button>
  );
};
