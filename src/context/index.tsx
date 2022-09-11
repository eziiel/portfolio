/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { createContext, ReactNode } from "react"

interface PropsElement {
  children: ReactNode;
}

interface PropsRef {
  component: number;
  setComponent: (newState: number) => void;
}

const local = window.localStorage.getItem("component")

const init: PropsRef = {
  component: local != null ? JSON.parse(local) : 0,
  setComponent: () => {}
}
export const ContextRef = createContext(init)

export const ContextRefProvider = ({ children }: PropsElement) => {
  const [component, setComponent] = React.useState(init.component)

  const data = { component, setComponent }

  return <ContextRef.Provider value={data}>{children}</ContextRef.Provider>
}
