import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import styles from '../styles/ImportantDates.module.css'

const ImportantDates = () => (
  <Container className="bg-light section">
    <a className='target' id='dates'/>
    <h2 className='display-4'>Important dates</h2>
    <Row>
      <Col className="md-6">
        <ul className={styles.timeline}>
            <ScheduleDateItem date="2021-10-01" text="Paper submission (hard deadline)"/>
            <ScheduleDateItem date="2021-10-31" text="Reviews due"/>
            <ScheduleDateItem date="2021-11-04" text="Author notification"/>
            <ScheduleDateItem date="2021-11-25" text="Final paper submission (hard deadline)"/>
            <ScheduleDateItem date="2021-12-31" text="Pre-recorded video submission"/>
            <ScheduleDateItem date="2022-01-22" text="Conference date"/>
        </ul>
      </Col>
    </Row>
  </Container>
)

function ScheduleDateItem(props){
  const text = props.text;
  let schedule_date = new Date(props.date);

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  //actual date
  let today = new Date();

  var schedule_text;
  if (today.getTime() > schedule_date.getTime()){
    schedule_text = <del>{text}</del>;
  }
  else{
    schedule_text = text;
  }

  schedule_date = monthNames[schedule_date.getMonth()] + ' ' + schedule_date.getDate() + ', ' + schedule_date.getFullYear();

  return <li><h5>{schedule_text}</h5><h5 className="float-right">{schedule_date}</h5></li>;;
}

export default ImportantDates
