
import React from 'react';
import Logo from '../../assets/img/ontheflix.png';
import './Header.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Header() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="AluraFlix logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Header;