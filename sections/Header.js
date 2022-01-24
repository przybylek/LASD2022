import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

//<span className='badge badge-warning'>pending request</span>
//<p className='text-center lead'><a href='https://forms.gle/FHFopHtDSBWePTQT8'>Online Registration</a></p>

const Header = () => (
  <Jumbotron style={{ backgroundImage: `url(/landingPage.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}  className='mt-5'>
    <a className='target' id='home'/>
    <h1 className='display-1 text-center anchor'>
      LASD 2022
    </h1>
    <h2 className='text-center'>
      6th International Conference on <strong>Lean and Agile Software Development</strong>
    </h2>
    <p className='text-center lead'>22 January, 2022, Online event<sup>*</sup></p>
    <p className='text-center lead text-info font-italic'>Free of charge, with Springer LNBIP proceedings!</p>
    <p className='text-center lead text-info font-italic'>Corresponding authors of 15 top-rated accepted papers will get complimentary 1 year membership in <a href='https://www.agilealliance.org'>Agile Alliance</a>!</p>
    <p className='text-center lead'><small><sup>*</sup>The conference will consist of pre-recorded presentations, live keynote, and Q&A sessions.</small></p>
  </Jumbotron>
)

export default Header
