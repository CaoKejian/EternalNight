import React from 'react'
import * as s from './index.less'
import xprops from './model/props'
import { createRoot } from 'react-dom/client'

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

if (process.env.APP_NAME !== 'XLP') {
  // 确保在DOM加载完成后再执行渲染操作
  document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('app')
    if (rootElement) {
      const root = createRoot(rootElement)
      root.render(<Demo label={'xxx'} />)
    } else {
      console.error('未能找到ID为app的元素')
    }
  })
}
