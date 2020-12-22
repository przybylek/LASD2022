import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const Navigation = () => (
  <Navbar fixed='top' bg='light' expand='xl'>
    <Navbar.Brand>LASD 2020</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-nav" />
    <Navbar.Collapse id="navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href='#home'>Home</Nav.Link>
        <Nav.Link href='#about'>About </Nav.Link>
        <Nav.Link href='#topics'>Topics</Nav.Link>
        <Nav.Link href='#submissions'>Submissions </Nav.Link>
        <Nav.Link href='#dates'>Dates </Nav.Link>
        <Nav.Link href='#keynotes'>Keynotes</Nav.Link>
        <Nav.Link href='#program'>Program</Nav.Link>
        <Nav.Link href='#chairs'>Committee</Nav.Link>
        <Nav.Link href='#sponsors'>Sponsors</Nav.Link>
        <Nav.Link href='#conferences'>Conferences</Nav.Link>
      </Nav>
    </Navbar.Collapse>

  </Navbar>
)

export default Navigation
