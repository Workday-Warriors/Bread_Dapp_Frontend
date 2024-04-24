export const TWITTER_CLIENT_ID = 'cGRXRDZCaXFoX29WZVVjTzNjcUo6MTpjaQ'
const REDIRECT_URI = 'https://basebread.xyz/join_quest'
export function getTwitterOauthUrl() {
  const rootUrl = 'https://twitter.com/i/oauth2/authorize'
  const options = {
    redirect_uri: REDIRECT_URI,
    client_id: TWITTER_CLIENT_ID,
    state: 'state',
    response_type: 'code',
    code_challenge: 'y_SfRG4BmOES02uqWeIkIgLQAlTBggyf_G7uKT51ku8',
    code_challenge_method: 'S256',
    scope: ['users.read', 'tweet.read', 'follows.read', 'follows.write'].join(
      ' '
    ),
  }
  const qs = new URLSearchParams(options).toString()
  return `${rootUrl}?${qs}`
}
