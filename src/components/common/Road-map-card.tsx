export interface Props {
  index: number
  card: {
    title: string
    description: string
  }
}

export const RoadMapCard = ({ index, card }: Props) => (
  <div
    className={`w-full xl:w-1/2 gap-x-[36px] flex ${
      index % 2 == 0 ? 'mb-0 xl:mb-[54px]' : ' mt-0 xl:mt-[54px]'
    }`}
    data-aos='fade-up'
  >
    <div className='w-[20%] xl:w-auto'>
      <div className='relative w-[70px] h-[65px] xl:w-[111.08px] xl:h-[103.33px] bg-[#001AFF] flex justify-center items-center'>
        <p className='text-[32.8px] xl:text-[51.67px] font-normal leading-[62px] text-center text-white'>
          {index + 1}
        </p>
        <span className='absolute w-full h-full right-[-12px] bottom-[-15px] bg-white z-[-1]'></span>
      </div>
    </div>
    <div>
      <h1
        data-aos='fade-up'
        className='mt-[10px] text-[22.22px] xl:text-[35px] font-normal leading-[42px] text-[#FFDF36]'
      >
        {card.title}
      </h1>
      <p
        data-aos='fade-up'
        className='text-[14px] xl:text-xl text-white mt-[10px] w-full xl:w-[90%] font-normal leading-[16.8px] xl:leading-6'
      >
        {card.description}
      </p>
    </div>
  </div>
)
