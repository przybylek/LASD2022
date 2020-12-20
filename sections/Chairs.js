import Container from 'react-bootstrap/Container'
import PeopleList from '../components/PeopleList'

const Chairs = ({ people }) => (
  <Container>
    <h2 className='display-4'>Chairs</h2>
    <PeopleList people={people} />
  </Container>
)

export default Chairs
