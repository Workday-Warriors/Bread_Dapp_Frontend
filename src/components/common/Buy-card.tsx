export interface Props {
  card: {
    title: string
    description: string
  }
  index: number
}

export const BuyCard = ({ card, index }: Props) => (
  <div
    className={`w-full xl:w-1/2 relative min-h-[323.85px] max-w-[322.2px] bg-[#303030] px-[30px] pt-[48px] ${
      index % 2 == 0 ? 'mt-0 xl:mt-[54px]' : 'mb-0 xl:mb-[54px]'
    } `}
  >
    <h1 className='text-[#FFDF36] text-[20.07px] xl:text-[22px] font-normal leading-[26.4px] text-left'>
      {card.title}
    </h1>
    <p className='text-[14.59px] xl:text-base text-white mt-[22px] font-normal leading-[17.51px] xl:leading-[19.2px] text-left'>
      {card.description}
    </p>
    <span className='absolute top-0 left-0  rotate-[5.43deg] z-[-1] w-full h-full bg-[#001AFF]'></span>
  </div>
)
