import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

const conferences = [
  {
    title: "LASD@FedCSIS'20",
    location: "Sofia 2020",
    website: "https://www.fedcsis.org/2020/lasd",
    proceedings: "https://annals-csis.org/Volume_21/#H4LASD",
  },
  {
    title: "LASD@FedCSIS'19",
    location: "Leipzig 2019",
    website: "https://www.fedcsis.org/2019/lasd",
    proceedings: "https://annals-csis.org/Volume_18/#H4LASD",
  },
  {
    title: "LASD@FedCSIS'18",
    location: "Poznan 2018",
    website: "https://www.fedcsis.org/2018/lasd",
    proceedings: "https://annals-csis.org/Volume_15/#H4LASD",
  },
  {
    title: "LASD@FedCSIS'17",
    location: "Prague 2017",
    website: "https://www.fedcsis.org/2017/lasd",
    proceedings: "https://annals-csis.org/Volume_11/#H4LASD",
  },
]


const PastConferences = () => (
  <Container fluid="md" className='section'>
    <a className='target' id='conferences'/>
    <h2 className="display-4 anchor">Past Conferences</h2>
    <Row className="justify-content-md-center m-1">
      {conferences.map(c => (
      <Col key={c.title} md='auto' className="m-2">
        <Card style={{ width: '14.5rem' }} className="mx-auto">
          <Card.Body>
            <Card.Title>{c.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{c.location}</Card.Subtitle>
            <Card.Link href={c.website}>Website</Card.Link>
            <Card.Link href={c.proceedings}>Proceedings</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      ))}
    </Row>
  </Container>
)

export default PastConferences
