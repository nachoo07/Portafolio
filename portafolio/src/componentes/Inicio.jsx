
import '../style/inicio.css'
import imagen from '../assets/fotoportada.jpg'
import Container from 'react-bootstrap/Container'
const Inicio = () => {
  return (
    <>
        <Container className='fondo-inicio'>
        <div className='division_inicio'>
            <div className='descripcion-inicio'>
                <h1>Desarrollador Full Stack</h1>
                <p>Experiencia demostrable en trabajo en equipo bajo metodologías ágiles. 
                    Uso tecnologías como React, Next.js, Css, Html, Javascript; 
                    Node, Express, MongoDB y Sql.</p>
            </div>
            <div>
                <img className='imagen-portada' src={imagen} alt="" />
            </div>
        </div>
        </Container>
    </>
  )
}

export default Inicio
