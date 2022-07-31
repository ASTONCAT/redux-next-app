import { useSelector } from 'react-redux'
import { wrapper } from '../redux'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Calculator from '../components/Calculator'

export const getStaticProps = wrapper.getStaticProps(store => ({preview}) => {
  if (process.env.DB_DATA_AVAILABLE){
    console.log('data z databáze jsou READY')
  } else {
    console.log('data z databáze NEJSOU DOSTUPNÁ')
  }
  // fetch data from an API or databaze or files
  store.dispatch({
    type: 'SHOW_LOADER'
  })
})  

export default function Home() {
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

        <Calculator />

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