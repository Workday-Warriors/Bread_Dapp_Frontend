import { Link, useLocation } from 'react-router-dom'
import { NAVBAR } from '../constants'

export const Navbar = () => {
  const { pathname } = useLocation()
  return (
    <div className='w-full  grid grid-cols-2 xl:flex justify-center items-center text-white gap-8 pt-[32px] xl:pt-[65px]'>
      {NAVBAR.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`hover:text-[#FFDF36] text-center text-[15px] xl:text-xl font-normal leading-[18.17px] xl:leading-6 transition-all duration-300 ${
            pathname === item.path ? 'text-white' : 'text-[#616161] '
          } `}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}
