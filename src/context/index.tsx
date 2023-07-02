/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { createContext, ReactNode } from 'react'

interface PropsElement {
  children: ReactNode;
}

interface PropsRef {
  component: number;
  setComponent: (newState: number) => void;
  projetoId: number;
  setProjetoId: (newState: number) => void;
}

const local = window.localStorage.getItem('component')

const init: PropsRef = {
  component: local != null ? JSON.parse(local) : 0,
  setComponent: () => {},
  projetoId: 0,
  setProjetoId: () => {},
}
export const ContextRef = createContext(init)

export const ContextRefProvider = ({ children }: PropsElement) => {
  const [component, setComponent] = React.useState(init.component)
  const [projetoId, setProjetoId] = React.useState(init.projetoId)

  const data = { component, setComponent, projetoId, setProjetoId }

  return <ContextRef.Provider value={data}>{children}</ContextRef.Provider>
}
