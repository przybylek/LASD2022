import Container from 'react-bootstrap/Container'
import PeopleList from '../components/PeopleList'

const Chairs = ({ people }) => (
  <Container>
    <a className='target' id='chairs'/>
    <h2 className='display-4 anchor'>Chairs</h2>
    <PeopleList people={people} />
  </Container>
)

export default Chairs
