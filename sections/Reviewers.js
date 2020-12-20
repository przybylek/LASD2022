import Container from 'react-bootstrap/Container'
import PeopleList from '../components/PeopleList'

const Reviewers = ({ people }) => (
  <Container>
    <h2 className='display-4'>Reviewers</h2>
    <PeopleList people={people} />
  </Container>
)

export default Reviewers
