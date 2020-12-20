import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container'
import About from '../sections/About'
import PastConferences from '../sections/PastConferences'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <About />
      <PastConferences />
    </Container>
  )
}
