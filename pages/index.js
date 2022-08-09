import { useSelector } from 'react-redux'
import { wrapper } from '../redux'
import { connectToDatabase } from '../util/mongodb'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Calculator from '../components/Calculator'
  
  export const getStaticProps = wrapper.getStaticProps(store => async (context) => {
    const { db } = await connectToDatabase()

    const calcSetup = await db.collection('setup').find({}).limit(1).toArray()

    return {
      props: {
        calcSetup: JSON.parse(JSON.stringify(calcSetup))
      }
    }
  }) 
  

export default function Home({ calcSetup }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Next App</title>
        <meta name="description" content="Next App using Redux, React and Redux Thunk" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Expres půjčku schválíme online do 5 minut
        </h1>

        <Calculator setup={calcSetup} />

        <p className={styles.disclaimer}>
          Výše uvedené splátky je pouze orientační a od výsledné achválené výše splátky se může lišit.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}