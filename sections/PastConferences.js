import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'


const PastConferences = () => (
  <Container>
    <Row className="justify-content-md-center m-1">
      <Col md='auto' className="m-3">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>LASD@FedCSIS'20</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Sofia 2020</Card.Subtitle>
            <Card.Link href="https://www.fedcsis.org/2020/lasd">Website</Card.Link>
            <Card.Link href="https://annals-csis.org/Volume_21/#H4LASD">Proceedings</Card.Link>
          </Card.Body>
        </Card>
      </Col>
      <Col md='auto' className="m-3">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>LASD@FedCSIS'19</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Leipzig 2019</Card.Subtitle>
            <Card.Link href="https://www.fedcsis.org/2019/lasd">Website</Card.Link>
            <Card.Link href="https://annals-csis.org/Volume_18/#H4LASD">Proceedings</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>

    <Row className="justify-content-md-center m-1">
      <Col md='auto' className="m-3">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>LASD@FedCSIS'18</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Poznan 2018</Card.Subtitle>
            <Card.Link href="https://www.fedcsis.org/2018/lasd">Website</Card.Link>
            <Card.Link href="https://annals-csis.org/Volume_15/#H4LASD">Proceedings</Card.Link>
          </Card.Body>
        </Card>
      </Col>
   
      <Col md='auto' className="m-3">
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>LASD@FedCSIS'17</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Prague 2017</Card.Subtitle>
            <Card.Link href="https://www.fedcsis.org/2017/lasd">Website</Card.Link>
            <Card.Link href="https://annals-csis.org/Volume_11/#H4LASD">Proceedings</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
)

export default PastConferences
