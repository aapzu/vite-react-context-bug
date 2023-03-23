import React, { createContext, FC, useEffect, useState } from 'react'

export const FooContext = createContext(undefined)

export const FooProvider: FC = ({ children }) => {
  const [foo, setFoo] = useState(undefined)

  useEffect(() => {
    setFoo('bar')
  }, [])

  return (
    <FooContext.Provider value={{ foo, setFoo }}>
      {foo ? children : null}
    </FooContext.Provider>
  )
}