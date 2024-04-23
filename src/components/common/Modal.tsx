import { Connector, useConfig, useConnect } from 'wagmi'
import { CricleXIcon } from '../../icons'

interface Props {
  open: boolean
  close: () => void
}
const imgs = ['images/coin-2.png', 'images/coin-1.png', 'images/coin-3.png']
export const Modal = ({ open, close }: Props) => {
  const { connect, connectors } = useConnect()
  const { chains } = useConfig()
  const connectWallet = (connector: Connector, chainId: number) => {
    connect({ connector, chainId })
    close()
  }
  return (
    <>
      <div
        onClick={() => console.log('1')}
        className={` ${
          open ? '' : 'hidden'
        } px-[20px] fixed -translate-y-1/2 translate-x-1/2 top-1/2 right-1/2 z-[999999999999999] py-[28px] w-[300px] md:!w-[599px] bg-[#303030]`}
      >
        <h2 className='text-[#FFDF36] mb-[39px]  text-[22.3px] xl:text-[22.3px] font-normal leading-[26.76px] text-left'>
          CONNECT WALLET
        </h2>
        {connectors
          .filter((conn) => conn.id !== 'io.metamask')
          .map((connector, index) => (
            <div
              key={index}
              className='bg-[#1E1E1E] text-white py-[27px] px-[21px] cursor-pointer gap-x-[25px] flex items-center mt-2.5'
              onClick={() => connectWallet(connector, chains[0].id)}
            >
              <img className='w-[37px] h-[37px]' src={imgs[index]} alt='' />
              <p className='text-[11.15px] xl:text-xl font-normal leading-6 text-left'>
                CONNECT WITH METAMASK
              </p>
            </div>
          ))}

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
