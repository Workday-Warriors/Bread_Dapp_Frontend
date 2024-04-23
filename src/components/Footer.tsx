import { Link } from 'react-router-dom'
import { FOOTER } from '../constants'

export const Footer = () => (
  <footer className='w-full py-[43px] bg-[#303030] '>
    <div className='container w-full flex items-center  justify-start'>
      <div className='text-[#8E8E8E] gap-y-[27px] items-center gap-x-4 grid grid-cols-2 xl:flex'>
        {FOOTER.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className='mt-1 hover:text-[#FFDF36] transition-all duration-300'
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  </footer>
)
