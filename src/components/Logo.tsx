import React, { FC, ReactElement } from 'react'
import { images } from '../images'

export interface LogoProps {
  action: () => void
}

const Logo: FC<LogoProps> = ({ action }): ReactElement => (
  <div className="flex flex-col items-center mt-2 lg:my-4">
    <img
      className="h-16 lg:h-20 transition duration-200 ease-in-out lg:cursor-pointer transform lg:hover:scale-110 active:opacity-50"
      src={images.common.octopus}
      onClick={action}
      alt="octopus"
    />
    <h1 className="text-4xl text-white font-hairline">
      Weather<span className="font-semibold">Octopus</span>
    </h1>
  </div>
)

export default Logo
