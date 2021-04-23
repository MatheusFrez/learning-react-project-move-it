import Head from 'next/head'

import { CompleteChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/Experiencebar";
import { Profile } from "../components/Profile";
import { ChallangeBox } from "../components/ChallengeBox";

import styles from '../styles/pages/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Início | move.it
        </title>
      </Head>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompleteChallenges />
          <Countdown/>
        </div>
        <div>
          <ChallangeBox />
        </div>
      </section>
    </div> 
  )
}
