import React from 'react'
import Container from 'react-bootstrap/Container'
import '../style/acerca.css'
import imagen_css from '../assets/css.png'
import imagen_html from '../assets/html.png'
import imagen_javascript from '../assets/javascript.png'
import imagen_react from '../assets/logo512.png'
import imagen_mongo from '../assets/mongo.png'
import imagen_node from '../assets/node.png'
const Acerca = () => {
    return (
        <>
            <Container className='fondo-acerca'>
                <div className='division-acerca'>
                    <div className='descripcion-acerca'>
                        <h1 className='titulo-acerca'>Sobre mi</h1>
                        <p>Mi nombre es Ignacio skibski, naci el 7 de febrero de 2003 y
                            soy de la ciudad de san miguel de tucuman, Argentina.
                            Comence a programar en un curso hecho en coderhouse en el año 2022.
                        </p>
                    </div>
                    <div className='descripcion-acerca'>
                        <h1 className='titulo-acerca'>Habilidades</h1>
                        <img className='imagen-habilidades' src={imagen_css} alt="" />
                        <img className='imagen-habilidades' src={imagen_html} alt="" />
                        <img className='imagen-habilidades' src={imagen_javascript} alt="" />
                        <img className='imagen-habilidades' src={imagen_mongo} alt="" />
                        <img className='imagen-habilidades' src={imagen_node} alt="" />
                        <img className='imagen-habilidades' src={imagen_react} alt="" />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Acerca
