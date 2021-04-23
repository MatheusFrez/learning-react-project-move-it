import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContext'

//TODOS ELEMENTOS DESSE CHALLENGES CONTEXT PROVIDER
//POSSUEM ACESSO AO CONTEXTO DESSE PROVIDER
//NO VALUE E OQ EU QUERO ENVIAR COMO INFORMAÇÃO
function MyApp({ Component, pageProps }) {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
  )
}

export default MyApp
