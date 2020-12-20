import Container from 'react-bootstrap/Container'
import PeopleList from '../components/PeopleList'

const Commitee = ({ people }) => (
  <Container>
    <h2 className='display-4'>Program Commitee</h2>
    <PeopleList people={people} />
  </Container>
)

export default Commitee
