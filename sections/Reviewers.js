import Container from 'react-bootstrap/Container'
import PeopleList from '../components/PeopleList'

const Reviewers = ({ people }) => (
  <Container>
    <a className='target' id='reviewers'/>
    <h2 className='display-4 anchor'>Reviewers</h2>
    <PeopleList people={people} />
  </Container>
)

export default Reviewers
