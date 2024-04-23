import { useDisconnect } from 'wagmi'
import { CricleXIcon } from '../../icons'

interface Props {
  open: boolean
  close: () => void
}

export const DisconnectModal = ({ open, close }: Props) => {
  const { disconnect } = useDisconnect()
  const handleDisconnect = () => {
    disconnect()
    close()
  }
  return (
    <>
      <div
        className={` ${
          open ? ' ' : 'hidden'
        } px-[20px] fixed -translate-y-1/2 translate-x-1/2 z-[9999999999] top-1/2 right-1/2 py-[28px] w-[300px] md:!w-[599px] bg-[#303030]`}
      >
        <h2 className='text-[#FFDF36] mb-[39px]   text-[16.3px] md:text-[22.3px] font-normal leading-[26.76px] text-left'>
          DISCONNECT WALLET
        </h2>
        <div
          className='bg-[#1E1E1E] text-white  py-[27px] px-[30px] md:px-[74px]  cursor-pointer gap-x-[25px] flex items-center'
          onClick={handleDisconnect}
        >
          <p className='text-[11.15px] xl:text-xl font-normal leading-6 text-left'>
            DISCONNECT WALLET
          </p>
        </div>
        <button onClick={close} className='absolute top-[18px] right-[20px]'>
          <CricleXIcon />
        </button>
      </div>
      <div
        onClick={close}
        className={` ${
          open ? '' : 'hidden'
        } w-full min-h-screen z-[99999] flex justify-center items-center py-[28px]  top-0 fixed backdrop-blur-md bg-white/30 `}
      ></div>
    </>
  )
}
