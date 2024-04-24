import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'
import { Quest } from './common'

export const JoinQuest = ({ setOpen }: { setOpen: (e: boolean) => void }) => {
  const [discord, setDiscord] = useState(() =>
    Boolean(localStorage.getItem('discord'))
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
  const TWITTER_CLIENT_ID = 'cGRXRDZCaXFoX29WZVVjTzNjcUo6MTpjaQ' // give your twitter client id here

  // twitter oauth Url constructor
  function getTwitterOauthUrl() {
    const rootUrl = 'https://twitter.com/i/oauth2/authorize'
    const options = {
      redirect_uri: 'http://www.localhost:5731/join_quest', // client url cannot be http://localhost:3000/ or http://127.0.0.1:3000/
      client_id: TWITTER_CLIENT_ID,
      state: 'state',
      response_type: 'code',
      code_challenge: 'y_SfRG4BmOES02uqWeIkIgLQAlTBggyf_G7uKT51ku8',
      code_challenge_method: 'S256',
      scope: ['users.read', 'tweet.read', 'follows.read', 'follows.write'].join(
        ' '
      ), // add/remove scopes as needed
    }
    const qs = new URLSearchParams(options).toString()
    return `${rootUrl}?${qs}`
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
          redirect_uri: 'https://bree2.vercel.app/about',
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
            <a href={getTwitterOauthUrl()}>Twitter auth</a>
            {/* <Quest
              title='CONNECT TWITTER'
              onClick={getTwitterOauthUrl}
              subtitle='Connect your Twitter account and follow @bread-onbase.'
              steps={[
                { done: false, type: 'connect-wallet' },
                { done: false, type: 'connect-wallet' },
              ]}
            /> */}
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
