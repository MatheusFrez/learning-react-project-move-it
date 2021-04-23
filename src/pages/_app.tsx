import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext'

//NESSE ARQUIVO EU TENHO SOMENTE COMPONENTES/PROVIDERS QUE
//EU VOU TER EM TODAS MINHAS TELAS

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
