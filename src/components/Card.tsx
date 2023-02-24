import { ReactNode } from "react"

interface CardProps {
  children: ReactNode
}
export const Card:React.FC<CardProps> = ({children}) => {
  return <div className="max-w-sm w-1/4 bg-slate-900 text-slate-200 dark:text-gray-900 dark:bg-white">
    {children}
  </div>

}