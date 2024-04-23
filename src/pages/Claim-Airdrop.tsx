import React from 'react'
import { useAccount } from 'wagmi'
interface Props {
  setOpen: (e: boolean) => void
}
export const CLaimAirdrop = ({ setOpen }: Props) => {
  const { isConnected } = useAccount()
  const handleConnect = () => {
    if (!isConnected) {
      setOpen(true)
    }
  }
  return (
    <section className='w-full'>
      <div className='container pb-[2rem] '>
        <div className='grid gap-y-[13px] xl:gap-y-0 gap-x-[95px] grid-cols-1 xl:grid-cols-2 pt-[58px]'>
          <div className='pt-[41px] relative px-[34px] pb-[53px] bg-[#303030] '>
            <p className='text-[14.21px] xl:text-xl font-normal leading-[17.05px] xl:leading-6 text-white'>
              AVAILABLE TO CLAIM
            </p>
            <h2 className='mt-[39px]  xl:mt-[55px] mb-[43px] xl:mb-[43px] text-[#FFDF36] text-[28.42px] xl:text-[40px] font-normal  leading-[34.1px] xl:leading-[48px] text-left'>
              0.00 $BREAD
            </h2>
            <p className=' text-[14.21px] xl:text-xl font-normal leading-6 text-left text-white'>
              TO BE RECEIVE IN YOUR WALLET AFTER CLAIM
            </p>
            <img
              src='/images/img-1-m.png'
              alt=''
              className='absolute xl:hidden top-[-103px] block right-[-30px] z-[-1]'
            />
          </div>
          <div className='relative pt-[41px] px-[34px] pb-[53px] bg-[#303030] '>
            <p className='text-[14.21px] xl:text-xl font-normal leading-[17.05px] xl:leading-6 text-white'>
              TIME REMAINING
            </p>
            <h2 className='mt-[39px]  xl:mt-[55px] mb-[43px] xl:mb-[43px] text-[#FFDF36] text-[28.42px] xl:text-[40px] font-normal  leading-[34.1px] xl:leading-[48px] text-left'>
              15D : 7H : 32M : 14S
            </h2>
            <p className=' text-[14.21px] xl:text-xl font-normal leading-6 text-left text-white'>
              UNTIL THE $BREAD AIRDROP CLAIMING STARTS
            </p>
            <img
              src='/images/img-1.png'
              alt=''
              className='absolute hidden xl:block top-[120px] xl:top-[-290px] z-[-1] right-[-94px]'
            />
          </div>
        </div>
        <button
          className='hover:bg-white transition-all duration-300 hover:text-[#001AFF] py-[35px] mt-[22px] text-[22.94px] xl:text-3xl text-white font-normal leading-9 text-center w-full bg-[#001AFF]'
          onClick={handleConnect}
        >
          {isConnected ? 'CLAIM NOT YET STARTS' : 'CONNECT WALLET'}
        </button>
        <div className='bg-[#303030] pt-[31px] mt-[83px] px-[21px] xl:px-[34px]'>
          <div className='grid grid-cols-4 md:grid-cols-3 pb-[33px]'>
            <div className='text-white col-span-2 md:col-span-1 text-[12.072px] xl:text-xl not-italic font-normal leading-[normal]'>
              LEADERBOARD
            </div>
            <div className='text-[#616161] text-[12.072px] xl:text-xl not-italic font-normal leading-[normal]'>
              AMOUNT
            </div>
            <div className=' text-end text-[#616161] pr-[22px] text-[12.072px] xl:text-xl not-italic font-normal leading-[normal]'>
              REFERRAL
            </div>
          </div>
          <div className='grid gap-y-[7px] grid-cols-4 md:grid-cols-3 pr-[11px] max-h-[977px] overflow-y-auto'>
            {new Array(20).fill('').map((_, index) => {
              return (
                <React.Fragment key={index}>
                  <div className='py-[16px] col-span-2 md:col-span-1 flex items-center xl:py-[27px] pl-[18px] xl:pl-[31px] bg-[#1E1E1E] text-[10.86px] xl:text-lg text-[#FFDF36] font-normal leading-[13.04px] xl:leading-[21.6px]'>
                    0x9c43...4770
                  </div>
                  <div className='py-[16px]  text-center lx:py-[27px] w-full flex items-center bg-[#1E1E1E] text-[10.86px] xl:text-lg text-[#616161] font-normal leading-[13.04px] xl:leading-[21.6px]'>
                    1,000.000.00 $BREAD
                  </div>
                  <div className='py-[16px] xl:py-[27px] bg-[#1E1E1E] text-[10.86px] pr-[10px] xl:text-lg text-[#616161] font-normal leading-[13.04px] xl:leading-[21.6px] text-end'>
                    1,000
                  </div>
                </React.Fragment>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
