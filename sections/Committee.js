import Container from 'react-bootstrap/Container'
import PeopleList from '../components/PeopleList'


const Commitee = () => (
  <Container className="bg-light section">
    <a className='target' id='committee'/>
    <h2 className='display-4 anchor'>Program Commitee</h2>
    <h3>To be announced later...</h3>
  </Container>
)


/*
const Commitee = ({ people }) => (
  <Container className="bg-light section">
    <a className='target' id='committee'/>
    <h2 className='display-4 anchor'>Program Commitee</h2>
    <PeopleList people={people} />
  </Container>
)
*/

export default Commitee
