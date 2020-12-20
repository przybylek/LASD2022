import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

const Header = () => (
  <Jumbotron>
    <h1 className='display-1 text-center'>
      LASD 2021
    </h1>
    <h2 className='text-center display-5'>
      5th International Conference on <strong>Lean and Agile Software Development</strong>
    </h2>
    <p className='text-center lead'>23 January, 2021, Online event<sup>*</sup></p>
    <p className='text-center text-info font-italic'>Free of charge, with Springer LNBIP proceedings!</p>
    <p className='text-center text-info font-italic'>Corresponding authors of 20 top-rated accepted papers will get complimentary 1 year membership in <a className='LandinPage__url' href='https://www.agilealliance.org'>Agile Alliance</a>!</p>
    <p className><small><sup>*</sup>The conference will consist of pre-recorded presentations and live keynote and Q&A sessions</small></p>
  </Jumbotron>
)

export default Header
