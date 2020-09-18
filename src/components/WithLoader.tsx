import React, { FC, ReactElement } from 'react'
import Loader from './Loader'

interface WithLoaderProps {
  isLoading?: boolean
  className?: string
}

const WithLoader: FC<WithLoaderProps> = ({
  isLoading = false,
  className = '',
  children
}): ReactElement => {
  const visibility = {
    content: isLoading ? 'invisible' : 'visible',
    loader: isLoading ? 'visible' : 'invisible'
  }
  return (
    <>
      <div className={`${visibility.content} ${className}`}>{children}</div>
      <div className={`${visibility.loader} absolute right-1/2 top-1/2 -mr-10 -mt-10`}>
        <Loader />
      </div>
    </>
  )
}

export default WithLoader
