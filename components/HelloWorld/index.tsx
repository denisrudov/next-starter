import React, { useId } from 'react'

const Index = () => {
  const id = useId()
  return <div id={id}>Hello World Next.js Starter Kit</div>
}

export default Index
