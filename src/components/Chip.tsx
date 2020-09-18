import React, { FC, ReactElement } from 'react'
import Title from './Title'

interface ChipProps {
  title: string
  subtitle: string
  image: string
  action?: () => void
}

const Chip: FC<ChipProps> = ({ title, subtitle, image, action }): ReactElement => {
  const transition = 'transition duration-150 ease-in-out'
  const hover = 'lg:cursor-pointer transform lg:hover:scale-105 lg:hover:bg-gray-300'
  const sizing = 'max-w-xl md:w-48 my-2 md:mx-2 xl:mx-4 overflow-hidden'
  const active = 'active:opacity-50'
  return (
    <div
      className={`bg-gray-400 rounded-lg shadow-xl ${sizing} ${hover} ${transition} ${active}`}
      onClick={action}
    >
      {image && <img className="object-cover w-full h-24" src={image} alt="alt" />}
      <div className="p-3">
        <Title
          main={{ text: title, size: 'xl' }}
          side={{ text: subtitle, size: 'sm' }}
          color="gray-900"
        />
      </div>
    </div>
  )
}

export default Chip
