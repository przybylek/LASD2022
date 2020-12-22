import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Sponsors = () => (
  <Container className="bg-light section">
    <a className='target' id='sponsors'/>
    <h2 className='display-4 anchor'>Sponsors</h2>
    <Row>
      <Col as='p'>
        <a href="https://www.agilealliance.org">Agile Alliance</a> is a nonprofit global member organization dedicated to promoting the concepts of Agile software development as outlined in the Agile Manifesto. With more than 75,000 members and subscribers around the globe, Agile Alliance is driven by the principles of Agile methodologies and the value delivered to developers, business, and end users. Agile Alliance <a href="https://www.agilealliance.org/events" target="_blank" rel="noopener noreferrer">organizes and supports events</a> to bring the Agile community together on an international scale.
      </Col>
      <Col>
        <Image src='/Agile_Alliance_Logo_Colour.png' alt='Agile Alliance' width={400} />
      </Col>
    </Row>
  </Container>
)

export default Sponsors
