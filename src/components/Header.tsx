import { Link } from 'react-router-dom'
import { DisconnectModal, Modal } from './common'
import { useAccount } from 'wagmi'
import { cn } from '../lib/utils'

interface Props {
  open: boolean
  setOpen: (e: boolean) => void
}

export const Header = ({ open, setOpen }: Props) => {
  const { isConnected, address } = useAccount()

  return (
    <header className='w-full min-h-[92px]'>
      <div className='w-full flex items-center justify-between h-full container'>
        <Link to='/'>
          <img src='/images/logo.png' alt='logo' />
        </Link>
        <div className='relative max-w-max  '>
          <button
            onClick={() => setOpen(true)}
            className={cn(
              'relative transition-all custom_hover  duration-300 max-w-full line-clamp-1 flex items-center gap-2 bg-[#001AFF] z-[2] py-[14px] xl:pt-[17px] px-[18px] xl:px-[28px] text-white pb-[14px] text-sm xl:text-xl font-normal leading-6 text-center ',
              `${
                isConnected
                  ? ' bg-[#303030] hover:bg-white hover:text-[#001AFF]'
                  : ' hover:bg-white hover:text-[#001AFF]'
              }`
            )}
          >
            {isConnected
              ? `${address?.slice(0, 6)}...${address?.slice(
                  address.length - 4
                )}`
              : 'CONNECT'}
          </button>
          <span
            className={`absolute  transition-all duration-300 group-hover:bg-gray-500 w-full z-[1] bottom-[-5px] right-[-5px] h-full bg-white ${
              isConnected ? 'bg-gray-500' : ''
            }`}
          ></span>
        </div>
      </div>
      <h1 className='text-[18.37px] mt-[44px] xl:mt-0 xl:text-3xl font-normal leading-9 text-center text-white px-[18px]'>
        MINT BREAD NFT AND CLAIM 2X AIRDROP
      </h1>
      {!isConnected ? (
        <Modal open={open} close={() => setOpen(false)} />
      ) : (
        <DisconnectModal open={open} close={() => setOpen(false)} />
      )}
    </header>
  )
}
