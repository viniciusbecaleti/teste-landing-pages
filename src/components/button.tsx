import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  outlined?: boolean
}

export function Button({ children, outlined }: ButtonProps) {
  return (
    <button className={outlined ? 'button--outlined' : 'button'}>
      {children}
    </button>
  )
}
