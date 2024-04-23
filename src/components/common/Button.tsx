import { ReactNode } from 'react'

interface Props {
  className?: string
  children: ReactNode
  onClick?: () => void
}

export const Button = ({ children, className, onClick }: Props) => (
  <>
    <button
      onClick={onClick}
      className={`relative px-6 py-2 group ${className}`}
    >
      <span className='absolute inset-0 w-full h-full transition duration-300 ease-out transform translate-x-1 translate-y-1 bg-white group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
      <span className='absolute inset-0 w-full h-full bg-[#001AFF] border-2 border-[#001AFF] group-hover:bg-black border-none'></span>
      <span className='relative text-white group-hover:text-white'>
        {children}
      </span>
    </button>
  </>
)
