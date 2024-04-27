export const EmptyPage = () => {
  return (
    <section className=' xl:px-0 pb-[2rem]'>
      <div className='container '>
        <div className='py-10 min-h-[70vh] flex justify-center items-center mt-[58px] px-[19px] xl:px-[48px] w-full bg-[#303030] relative'>
          <h1 className=' text-[20px] text-center xl:text-3xl text-white font-normal leading-[24px] xl:leading-9'>
            Coming Soon
          </h1>

          <img
            src='/images/img-1.png'
            alt=''
            className='absolute hidden xl:block top-[120px] xl:top-[-290px] z-[-1] right-[-94px]'
          />
          <img
            src='/images/img-1-m.png'
            alt=''
            className='absolute xl:hidden top-[-103px] block right-[-30px] z-[-1]'
          />
        </div>
      </div>
    </section>
  )
}
