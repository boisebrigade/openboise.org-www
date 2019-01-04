import React from 'react'

export default props => {
  const {
    blog: blog = false,
    padding: padding = 'md:px-16'
  } = props

  let maxWidth = 'max-w-4xl'
  if (blog) {
    maxWidth = 'max-w-xl'
  }

  return <div className={`flex flex-col justify-center ${maxWidth} center h-full flex flex-col mx-auto ${padding}`}>
    {props.children}
  </div>
}
