export const AboutCard = () => {
  return (
    <div className='max-w-[598.98px] bg-[#303030] mt-[86px] relative'>
      <div className='flex flex-col items-center'>
        <h1 className='text-[25px] px-4 xl:text-[40px] mt-[62px] text-[#FFDF36] font-normal leading-[30px] xl:leading-[48px] text-center'>
          LOOOOOAF DE DOUGH
        </h1>
        <p className='text-white  mt-[41px] mb-[58px] max-w-[276.11px] xl:max-w-[460px] text-[13.21px] xl:text-lg font-normal leading-[15.85px]  xl:leading-[21.6px] text-center'>
          $BREAD is Powered by 10,000 collectible bread characters living on
          base chain. Rising from obscurity to make its mark in the world of
          memes and digital collectibles, an airdrop is baked, raining down on
          the happy $BREAD early community, with a 2x Airdrop for $BREAD NFT
          holders! Uniting a community bound by their love for bread, memes, and
          the promise of a decentralized future.
        </p>
      </div>
      <img src='/images/about-card.png' alt='' />
      <span className='absolute top-0 rotate-[4deg] z-[-1] w-full h-full bg-[#001AFF]'></span>
    </div>
  )
}
