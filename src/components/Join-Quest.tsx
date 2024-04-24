import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { Quest } from './common'
import { getTwitterOauthUrl } from '../utils'

export const JoinQuest = ({ setOpen }: { setOpen: (e: boolean) => void }) => {
  const [discord, setDiscord] = useState(() =>
    Boolean(localStorage.getItem('discord'))
  )
  const [twitter, setTwitter] = useState(() =>
    Boolean(localStorage.getItem('twitter'))
  )
  const { isConnected } = useAccount()
  const handleLogin = () => {
    if (!localStorage.getItem('discord')) {
      window.location.href = `https://discord.com/oauth2/authorize?client_id=1232682981869621288&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fjoin_quest&scope=identify`
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
          client_id: '1232682981869621288',
          client_secret: 'i7FBRXsOj53vEIeKlD97daA5vRd8oRTD',
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: 'http://localhost:5173/join_quest',
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data?.access_token) {
            setDiscord(true)
            localStorage.setItem('discord', data?.access_token)
          }
        })
        .catch((error) => {
          console.error('Error:', error)
        })
    }
  }, [])

  useEffect(() => {
    const getParamsFromUrl = () => {
      const queryParams = new URLSearchParams(window.location.search)
      const code = queryParams.get('code')
      if (code) {
        localStorage.setItem('twitter', code)
        setTwitter(true)
        window.history.replaceState(
          {},
          document.title,
          window.location.pathname
        )
      }
    }
    getParamsFromUrl()
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
              isTwitter
              title='CONNECT TWITTER'
              onClick={getTwitterOauthUrl}
              isDone={twitter}
              subtitle='Connect your Twitter account and follow @bread-onbase.'
              steps={[
                { done: twitter, type: 'connect-wallet' },
                { done: false, type: 'connect-wallet' },
              ]}
            />
            <Quest
              onClick={handleLogin}
              title='CONNECT DISCORD'
              isDone={discord}
              subtitle='Connect your Discord account and join @breadonbase channel.'
              steps={[
                {
                  done: discord,
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
