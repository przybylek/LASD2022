import Container from 'react-bootstrap/Container'
import PeopleList from '../components/PeopleList'

const Commitee = ({ people }) => (
  <Container className="bg-light">
    <a className='target' id='committee'/>
    <h2 className='display-4 anchor'>Program Commitee</h2>
    <PeopleList people={people} />
  </Container>
)

export default Commitee
