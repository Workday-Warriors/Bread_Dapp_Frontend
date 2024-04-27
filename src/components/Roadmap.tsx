import { ROADMAP } from '../constants'
import { RoadMapCard } from './common'

export const RoadMap = () => (
  <section className='pt-[111px]'>
    <div className='container'>
      <h1
        data-aos='fade-up'
        className='text-[#FFDF36] text-[40px]  xl:text-[70px] font-normal leading-[84px] text-left'
      >
        ROADMAP
      </h1>
      <img
        src='./images/road-map.png'
        alt=''
        data-aos='fade-up'
        className='w-full h-auto xl:min-h-[551.53px]'
      />

      <div className='flex flex-wrap mt-[66px] xl:mt-[22px] gap-y-[66px] lx:gap-y-0 justify-between w-full'>
        {ROADMAP.map((card, index) => (
          <RoadMapCard card={card} index={index} />
        ))}
      </div>
    </div>
  </section>
)
