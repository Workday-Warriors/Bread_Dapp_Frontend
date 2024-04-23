import { AboutCard } from './common'

export const Dought = () => {
  return (
    <section>
      <div className='container'>
        <div className='flex items-center  flex-col xl:flex-row'>
          <div
            data-aos='fade-up'
            className='w-full flex justify-center xl:w-[45%]'
          >
            <AboutCard />
          </div>
          <div data-aos='fade-up' className='w-full xl:w-[55%]'>
            <img src='/images/about-image.png' alt='about' className='w-full' />
          </div>
        </div>
      </div>
    </section>
  )
}
