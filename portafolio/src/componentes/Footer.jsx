import '../style/footer.css'

const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Contactos</h3>
          <ul>
            <li>nanoskibski@gmail.com</li>
            <li>3816573754</li>
            <li>Llamame cuando quieras</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Redes</h3>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>linkedin</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Se vienen cositas</h3>
          <p>Proximamente</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
