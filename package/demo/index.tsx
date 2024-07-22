import React from 'react'
import * as s from './index.less'
import xprops from './model/props'

interface ButtonProps {
  /**
   * 按钮名称
   */
  label: string
  style?: React.CSSProperties
  backgroundColor?: string
  color?: string
  onClick?: (args: string) => void
}

const mergeProps = (xprops: ButtonProps, props: ButtonProps) => ({
  ...xprops,
  ...props,
})
export const Demo = (props: ButtonProps) => {
  const mergedProps = mergeProps(xprops, props)
  const { label, style, onClick, backgroundColor, color } = mergedProps

  const styles = { ...style }

  const ballStyles: React.CSSProperties = {}
  ballStyles.backgroundColor = backgroundColor
  ballStyles.color = color

  console.log(styles, ballStyles)
  return (
    <div className={s.wrapper}>
      <button
        type="button"
        className={s.button}
        style={styles}
        onClick={() => onClick && onClick(label)}
      >
        {label || '默认文字'}
      </button>
      <div
        className={s.ball}
        style={ballStyles}
        onClick={() => onClick && onClick('ball')}
      >
        ball
      </div>
    </div>
  )
}