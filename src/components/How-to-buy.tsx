import { BUY_CARD } from '../constants'
import { BuyCard } from './common'

export const HowToBuy = () => {
  return (
    <section>
      <div className='container'>
        <h1
          data-aos='fade-up'
          className='text-[40px] xl:text-[70px] mt-[36px] xl:mt-[177px] text-[#FFDF36] font-normal leading-[84px] text-center'
        >
          HOW TO BUY
        </h1>
        <p
          data-aos='fade-up'
          className='text-[25px] xl:text-3xl text-[#FFDF36] mt-[37px] font-normal leading-9 text-center'
        >
          TRADING STARTS IN: 16D : 7H : 32M : 14S
        </p>
        <div
          data-aos='fade-up'
          className='flex  mt-[49px] flex-wrap justify-evenly gap-y-[68px] px-0 xl:px-[74px] gap-x-[270px] grid-cols-2'
        >
          {BUY_CARD.map((card, index) => (
            <BuyCard key={index} index={index + 1} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
