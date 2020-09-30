import React, { FC, ReactElement } from 'react'

interface TitleProps {
  text: {
    main: string
    side: string
  }
  color?: 'light' | 'dark'
  size?: 'small' | 'medium' | 'large'
}

const Title: FC<TitleProps> = ({ text, color = 'light', size = 'small' }): ReactElement => {
  const styles = { light: 'text-white', dark: 'text-gray-900' }
  const sizes = {
    main: {
      small: 'text-xl',
      medium: 'text-2xl',
      large: 'text-5xl'
    },
    side: {
      small: 'text-sm',
      medium: 'text-lg',
      large: 'text-2xl'
    }
  }
  return (
    <h2 className={styles[color]}>
      <span className={`font-semibold ${sizes.main[size]}`}>{text.main}</span>
      <span className={sizes.side[size]}>, {text.side}</span>
    </h2>
  )
}

export default Title
