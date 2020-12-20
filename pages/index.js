import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container'
import Header from '../sections/Header'
import About from '../sections/About'
import Sponsors from '../sections/Sponsors'

export default function Home() {
  return (
    <Container fluid>
      <Head>
        <title>LASD Conference 2020</title>
      </Head>

      <Header />
      <About />
      <Sponsors />
    </Container>
  )
}
