import { useEffect, useState } from 'react'
import { BUY_CARD } from '../constants'
import { BuyCard } from './common'

export const HowToBuy = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  function calculateTimeRemaining() {
    const startDate = new Date('2024-05-23T00:00:00')
    const currentDate = new Date()
    const difference = Number(startDate) - Number(currentDate)

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  }

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
          TRADING STARTS IN: {timeRemaining.days}DAY : {timeRemaining.hours}H :{' '}
          {timeRemaining.minutes}M : {timeRemaining.seconds}S
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
