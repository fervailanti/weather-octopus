import React, { FC, ReactElement } from 'react'

interface TitleProps {
  main: {
    text: string
    size: string
  }
  side?: {
    text: string
    size: string
  }
  color?: string
}

const Title: FC<TitleProps> = ({ main, side, color = 'white' }): ReactElement => (
  <h2 className={`text-${color}`}>
    <span className={`font-semibold text-${main.size}`}>{main.text}</span>
    {side && <span className={`text-${side.size}`}>, {side.text}</span>}
  </h2>
)

export default Title
