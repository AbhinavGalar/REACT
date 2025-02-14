import {  Col, Row, Button} from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function App() {

  return (
    <>

<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   <Container >
    <Row>
    <Col className="p-4 bg-danger">
    <h1>first colum</h1>
    </Col>

    <Col className="p-10 bg-primary">
    <h1>second colum</h1>
    <Button variant="danger">Click here</Button>
    </Col>
    </Row>
   </Container>
  

  <Container>
    <Row>
    <Col lg={6} sm={12} md={4} className="p-4 bg-success" pl-10 >
    <h1>third colum</h1>
    </Col>
    </Row>
  </Container>
    </>
  )
}

export default App
// npm install react-bootstrap bootstrap=====(install react bootstrap)
