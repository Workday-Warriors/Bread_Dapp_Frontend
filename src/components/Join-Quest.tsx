import { useEffect } from 'react'
import { useAccount } from 'wagmi'
import { Quest } from './common'

export const JoinQuest = ({ setOpen }: { setOpen: (e: boolean) => void }) => {
  const { isConnected } = useAccount()
  const handleLogin = () => {
    if (!localStorage.getItem('discord')) {
      window.location.href = `Discord Auth URL`
    }
  }
  const handleConnect = () => {
    if (!isConnected) {
      setOpen(true)
    }
  }
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')
    if (code) {
      fetch('https://discord.com/api/oauth2/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          client_id: 'DISCORD_CLIENT_ID',
          client_secret: 'DISCORD_CLIENT_SECRET',
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: 'DISCORD_REDIRECT_URI',
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data?.access_token) {
            localStorage.setItem('discord', data?.access_token)
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  }, [])

  return (
    <section className=' xl:px-0 pb-[2rem]'>
      <div className='container'>
        <div className='py-10 mt-[58px] px-[19px] xl:px-[48px] w-full bg-[#303030] relative'>
          <h1 className=' text-[20px] xl:text-3xl text-white font-normal leading-[24px] xl:leading-9 text-left'>
            JOIN QUEST TO CLAIM YOUR AIRDROP
          </h1>
          <div className=' pt-[47px] flex flex-col gap-y-5'>
            <Quest
              title='CONNECT YOUR WALLET'
              subtitle='Link your Base ETH address to confirm your participation and claim $BREAD airdrop.'
              onClick={handleConnect}
              isDone={isConnected}
              steps={[
                { done: isConnected, type: 'connect-wallet' },
                { done: false, type: 'connect-wallet' },
              ]}
            />
            <Quest
              title='CONNECT TWITTER'
              subtitle='Connect your Twitter account and follow @bread-onbase.'
              steps={[
                { done: false, type: 'connect-wallet' },
                { done: false, type: 'connect-wallet' },
              ]}
            />
            <Quest
              onClick={handleLogin}
              title='CONNECT DISCORD'
              isDone={Boolean(localStorage.getItem('discord'))}
              subtitle='Connect your Discord account and join @breadonbase channel.'
              steps={[
                {
                  done: Boolean(localStorage.getItem('discord')),
                  type: 'connect-wallet',
                },
                { done: false, type: 'connect-wallet' },
              ]}
            />
            <Quest
              isCopyBtn
              title='GET 5,000,000 $BREAD FOR EACH FRIEND YOU REFER'
              subtitle='When your friends sign up and onboard via your referral link, you both get 5,000,000 $BREAD bonus.'
            />
          </div>
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
