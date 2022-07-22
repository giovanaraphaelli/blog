import './styles.css';
import mainImage from './imagem.jpg';

function Header() {
  return (
    <header>
      <h1>Meu Blog! :)</h1>
      <img
        src={mainImage}
        alt="Mulher sentada em uma montanha olhando para um lago"
      />
    </header>
  );
}

export default Header;
