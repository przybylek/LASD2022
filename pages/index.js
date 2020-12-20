import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container'
import Header from '../sections/Header'
import About from '../sections/About'
import PastConferences from '../sections/PastConferences'
import Keynotes from '../sections/Keynotes'
import Sponsors from '../sections/Sponsors'
import TopicAndInterests from '../sections/TopicsAndInterests'


export default function Home() {
  return (
    <Container fluid>
      <Head>
        <title>LASD Conference 2020</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>
      </Head>

      <Header />
      <About />
      <TopicAndInterests />
      <Keynotes />
      <PastConferences />
      <Sponsors />

    </Container>
  )
}
