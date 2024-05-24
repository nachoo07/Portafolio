import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/navegador.css'

const Navegador = () => {
  return (
    <>
<Navbar expand="lg" className="bg-body-tertiary navegador">
      <Container>
        <Navbar.Brand href="#home">Portafolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="../componentes/Inicio.jsx">Inicio</Nav.Link>
            <Nav.Link href="#link">Acerca</Nav.Link>
            <Nav.Link href="#link">Habilidades</Nav.Link>
            <Nav.Link href="#link">Proyectos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navegador
