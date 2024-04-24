import React from 'react'
import { CopyIcon } from '../../icons'
import { cn } from '../../lib/utils'

interface Step {
  done: boolean
  type: 'discord' | 'twitter' | 'connect-wallet'
}

interface Props {
  title: string
  subtitle: string
  isCopyBtn?: boolean
  onClick?: () => void | string
  isDone?: boolean
  steps?: Step[]
  isTwitter?: boolean
}

export const Quest = ({
  title,
  subtitle,
  isCopyBtn,
  onClick,
  isDone,
  steps,
  isTwitter,
}: Props) => {
  return (
    <div className='bg-[#1E1E1E] z-[11] pl-[28px] xl:pl-[34px] pt-[41px] pb-[24px] flex  flex-col xl:flex-row justify-between pr-[37px]'>
      <div>
        <h2 className='text-[15.8px] xl:text-xl font-normal leading-[18.96px] xl:leading-6 text-white'>
          {title}
        </h2>
        <p className='text-[14.22px] mb-[45px] xl:mb-0 xl:text-lg mt-[35px] xl:mt-[44px] text-[#FFDF36] font-normal leading-[21.6px] w-full xl:w-[70%]'>
          {subtitle}
        </p>
      </div>
      <div className=' flex flex-col items-start xl:items-end justify-around'>
        <div className={`  relative ${isCopyBtn ? 'w-auto xl:w-[432px]' : ''}`}>
          {isTwitter ? (
            <a
              href={onClick ? (onClick() as string) : ''}
              className={`relative custom_hover transition-all duration-300 max-w-full hover:bg-white hover:text-[#001AFF] line-clamp-1 flex items-center gap-2 bg-[#001AFF] z-[2] pt-[17px] px-[28px] text-white pb-[14px] text-xl font-normal leading-6 text-center ${
                isDone ? 'bg-[#303030]' : ' '
              }`}
            >
              {isDone ? 'Done' : ' CONNECT'}
            </a>
          ) : (
            <button
              onClick={onClick}
              className={`relative custom_hover transition-all duration-300 max-w-full hover:bg-white hover:text-[#001AFF] line-clamp-1 flex items-center gap-2 bg-[#001AFF] z-[2] pt-[17px] px-[28px] text-white pb-[14px] text-xl font-normal leading-6 text-center ${
                isDone ? 'bg-[#303030]' : ' '
              }`}
            >
              {isCopyBtn ? (
                <span className=' hidden xl:inline-block line-clamp-1 w-full text-[15px] italic font-normal leading-[18px] text-left'>
                  https://breadonbase/quest/?referral=840oa4yi
                </span>
              ) : isDone ? (
                'Done'
              ) : (
                ' CONNECT'
              )}
              {isCopyBtn ? <CopyIcon /> : ''}
            </button>
          )}

          <span className='absolute transition-all duration-300 group-hover:bg-gray-500 w-full z-[1] bottom-[-5px] right-[-5px] h-full bg-white'></span>
        </div>
        {isCopyBtn ? (
          <p className='text-lg italic mt-10 text-start font-normal xl:mt-0 text-[#FFDF36] leading-[21.6px] xl:text-right'>
            You've already referred 0 new users
          </p>
        ) : (
          <div className='flex custom_hover mt-[24px] items-center gap-x-[32px]'>
            <p className='text-lg font-normal leading-[21.6px] text-[#FFDF36] '>
              Steps
            </p>
            {steps?.map((item, index) => (
              <React.Fragment key={index}>
                <div className='relative'>
                  <button
                    className={cn(
                      'relative  transition-all duration-300 text-white  text-[12.5px] font-normal z-10 leading-[15px] text-center bg-[#303030]  w-[26px] h-[25px]',
                      `${!item.done ? 'bg-[#001AFF]' : ''}`
                    )}
                  >
                    {index + 1}
                  </button>
                  <span className='group-hover:bg-gray-500  absolute bottom-[-3px] bg-white z-[1] right-[-3px] w-full h-full'></span>
                </div>
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
