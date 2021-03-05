import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
      </Head>
      <main className={styles.main}>
        <div className={styles.start}>
          <h1 className={styles.title}>
            Beloved Book
            <img src="images/logo.svg" alt="" />
          </h1>

          <p className={styles.description}>
            Doe livros ou veja quais livros estão disponíveis.
          </p>

          <button className={styles.button}>
            Cadastre-se
            <img src="icons/arrow-primary.svg" alt=""/>
          </button>
          <button className={styles.buttonSecondary}>
            Login
            <img src="icons/arrow.svg" alt=""/>
          </button>
        </div>
      </main>

      <footer className={styles.footer}>
        Desenvolvido por Thauany Alves
      </footer>
    </div>
  )
}
