import '../styles/Banner.scss';
import logo from '../assets/logo.png';

function Banner() {
      return (
            <header>
                  <img src={logo} className="LogoKasa" alt="Kasa" title="Logo de Kasa"/>
                  <nav>
                        <li>Accueil</li>
                        <li>A Propos</li>
                  </nav>
            </header>
      )
}

export default Banner;