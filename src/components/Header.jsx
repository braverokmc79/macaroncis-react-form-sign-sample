import logoImg from '../assets/logo.jpg';

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="A form and a pencil" />
      <h1>리액트 폼</h1>
    </header>
  );
}
