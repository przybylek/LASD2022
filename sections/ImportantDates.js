import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const ImportantDates = () => (
  <Container>
    <h2 className='display-4'>Important dates</h2>
    <Row>
      <Col className="md-6">
        <ul className="timeline">
            <ScheduleDateItem date="2020-10-01" text="Paper submission"/>
            <ScheduleDateItem date="2020-11-01" text="Reviews due"/>
            <ScheduleDateItem date="2020-11-04" text="Author notification"/>
            <ScheduleDateItem date="2020-11-18" text="Final paper submission"/>
            <ScheduleDateItem date="2020-12-31" text="Pre-recorded video submission"/>
            <ScheduleDateItem date="2021-01-23" text="Conference date"/>
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
