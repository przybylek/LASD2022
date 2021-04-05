import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container'
import Header from '../sections/Header'
import About from '../sections/About'
import PastConferences from '../sections/PastConferences'
import Keynotes from '../sections/Keynotes'
import Sponsors from '../sections/Sponsors'
import TopicAndInterests from '../sections/TopicsAndInterests'
import Submissions from '../sections/Submissions'
import ImportantDates from '../sections/ImportantDates'
import Chairs from '../sections/Chairs'
import Committee from '../sections/Committee'
import Reviewers from '../sections/Reviewers'
import Program from '../sections/Program'
import Navigation from '../components/Navigation'

import { readCsv } from '../utils'

export default function Home({ chairs, committee, reviewers }) {
  return (
    <Container fluid className='px-0'>
      <Head>
        <title>LASD Conference 2020</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous"></link>
      </Head>

      <Navigation />

      <Header />
      <About />
      <TopicAndInterests />
      <Submissions />
      <ImportantDates />
      <Keynotes />
      <Program />
      <Chairs people={chairs} />
      <Committee people={committee} />
      <Reviewers people={reviewers} />
      <Sponsors />
      <PastConferences />
    </Container>
  )
}

export async function getStaticProps() {
  return {
    props: {
      chairs: readCsv('./data/chairs.csv'),
      committee: readCsv('./data/committee.csv').slice(1),
      reviewers: readCsv('./data/reviewers.csv').slice(1),
    }
  }
}
