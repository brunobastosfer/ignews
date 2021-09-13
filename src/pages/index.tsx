import Image from 'next/image'
import Head from 'next/head';
import styles from './home.module.scss'

import GirlCoding from '../../public/images/avatar.svg';
import { SubscribeButton } from '../components/Header/SubscribeButton';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Ig News</title>
      </Head>

      <main className={styles.contentContainer}>

        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about <br />
            the <span>React</span> word.
          </h1>
          <p>
              Get access to all the publications  <br />
              <span>for $9.90 month</span>
          </p>
          <SubscribeButton />
        </section>

        <Image src={GirlCoding} alt="Girl coding" />
      </main>
    </>
  )
}
