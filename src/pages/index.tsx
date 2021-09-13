import Image from 'next/image'
import Head from 'next/head';
import { GetStaticProps } from 'next'
import { SubscribeButton } from '../components/Header/SubscribeButton';
import { stripe } from '../services/stripe';

import styles from './home.module.scss'
import GirlCoding from '../../public/images/avatar.svg';
interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
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
              <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={ product.priceId }/>
        </section>

        <Image src={GirlCoding} alt="Girl coding" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JZ4HEK5JaeMUItHjAHm6quA')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}