export const Breadnomics = () => {
  return (
    <section className='w-full pt-[106px] xl:pt-[222px]'>
      <div className='container'>
        <div className=' w-full flex-col xl:flex-row flex items-center'>
          <div>
            <img src='/images/BREADNOMICS.png' alt='' />
          </div>
          <div>
            <h1
              data-aos='fade-up'
              className='text-right text-[40px] xl:text-[70px] font-normal leading-[48px] xl:leading-[84px] xl:text-center text-[#FFDF36]'
            >
              BREADNOMICS
            </h1>
            <p
              data-aos='fade-up'
              className='text-3xl text-right text-white mt-[28px] xl:mt-[46px] font-normal leading-9 '
            >
              1,000,000,000,000 <br className='block xl:hidden' /> $BREAD
            </p>
            <div
              data-aos='fade-up'
              className='pl-[2rem]  mt-[28px] xl:mt-[38px] xl:pl-0 flex w-full justify-end'
            >
              <button className='bg-[#001AFF] hover:bg-white group hover:text-[#001AFF] text-white text-base xl:text-3xl font-normal leading-9 text-center w-full xl:w-[324px] pt-[22px] xl:pt-[32px] pb-[25px] xl:pb-[35px] relative transition-all duration-300'>
                70% Airdrop
                <span className='absolute z-[-1] group-hover:bg-gray-500 bottom-[-16px] bg-white transition-all duration-300 w-full h-full right-[-12px]'></span>
              </button>
            </div>
            <div
              data-aos='fade-up'
              className='mt-[56px]  pr-[2rem]  xl:pr-0  wraper_btn w-full flex justify-start'
            >
              <button className='bg-[#001AFF] hover:bg-white group hover:text-[#001AFF] text-white text-base xl:text-3xl font-normal leading-9 text-center w-full xl:w-[324px] pt-[22px] xl:pt-[32px] pb-[25px] xl:pb-[35px] relative transition-all duration-300'>
                30% Liquidity
                <span className='absolute z-[-1] group-hover:bg-gray-500 bottom-[-16px] bg-white transition-all duration-300 w-full h-full right-[-12px]'></span>
              </button>
            </div>
            <h4
              data-aos='fade-up'
              className='text-[#FFDF36] w-full mt-[83px] text-[25px] xl:text-3xl font-normal leading-9 text-center'
            >
              CONTRACT ADDRESS:
            </h4>
            <p
              data-aos='fade-up'
              className='text-[10px] md:text-[14px] w-full xl:text-xl text-white font-normal leading-6 mt-[11px] text-center cursor-pointer'
              onClick={() =>
                window.open(
                  'https://basescan.org/token/0x6E0F01B118e34311680353e5febaa11e706cb7bf'
                )
              }
            >
              0x6E0F01B118e34311680353e5febaa11e706cb7bf
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
