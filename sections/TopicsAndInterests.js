import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

const TopicAndInterests = () => (
  <Container>
    <h2 className="display-4">Topics and Interests</h2>
      <ListGroup variant='flush'>
        <ListGroup.Item><i className="fas fa-check-square"/> Agile teams during Covid-19</ListGroup.Item>
        <ListGroup.Item><i className="fas fa-check-square"/> Combining lean and agile methods for software development</ListGroup.Item>
        <ListGroup.Item><i className="fas fa-check-square"/> Lean and agile requirements engineering</ListGroup.Item>
        <ListGroup.Item><i className="fas fa-check-square"/> Scaling agile methods</ListGroup.Item>
        <ListGroup.Item><i className="fas fa-check-square"/> Distributed teams in Agile Software Development</ListGroup.Item>
        <ListGroup.Item><i className="fas fa-check-square"/> Challenges of migrating to lean and agile methods</ListGroup.Item>
        <ListGroup.Item><i className="fas fa-check-square"/> Balancing agility and discipline</ListGroup.Item>
        <ListGroup.Item><i className="fas fa-check-square"/> Agile development for safety systems</ListGroup.Item>
        <ListGroup.Item><i className="fas fa-check-square"/> Lean and agility at the enterprise level</ListGroup.Item>
        <ListGroup.Item><i className="fas fa-check-square"/> Conflicts in agile teams</ListGroup.Item>
        <ListGroup.Item><i className="fas fa-check-square"/> Lean and agile project production and management</ListGroup.Item>
        <ListGroup.Item><i className="fas fa-check-square"/> Collaborative games in Software Process Improvement</ListGroup.Item>
        <ListGroup.Item><i className="fas fa-check-square"/> Lean and agile coaching</ListGroup.Item>
        <ListGroup.Item><i className="fas fa-check-square"/> Managing knowledge for agility and collaboration</ListGroup.Item>
        <ListGroup.Item><i className="fas fa-check-square"/> Tools and techniques for lean and agile development</ListGroup.Item>
        <ListGroup.Item><i className="fas fa-check-square"/> Measurement and metrics for agile projects, agile processes, and agile teams</ListGroup.Item>
        <ListGroup.Item><i className="fas fa-check-square"/> Innovation and creativity in software engineering</ListGroup.Item>
        <ListGroup.Item><i className="fas fa-check-square"/> Variability across the software life cycle</ListGroup.Item>
        <ListGroup.Item><i className="fas fa-check-square"/> Gamification</ListGroup.Item>
        <ListGroup.Item><i className="fas fa-check-square"/> Industrial experiments, case studies, and experience reports related to all of the above topics</ListGroup.Item>
      </ListGroup>
  </Container>
)

export default TopicAndInterests
