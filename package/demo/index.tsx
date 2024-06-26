import React from 'react';
import * as s from './index.less'
import xprops from './model/props'
interface ButtonProps {
  label?: string;
  onClick?: () => void;
}

const mergeProps = (xprops: ButtonProps, props: ButtonProps) => ({
  ...xprops,
  ...props,
})
export const Index = (props: ButtonProps) => {

  const mergedProps = mergeProps(xprops, props);
  return (
    <button
      type="button"
      className={s.button}
      {...mergedProps}
    >
      {mergedProps.label || '默认文字'}
    </button>
  )
}
