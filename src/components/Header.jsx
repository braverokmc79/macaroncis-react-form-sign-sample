import { Link } from 'react-router-dom';
import logoImg from '../assets/logo.jpg';

export default function Header() {
  return (
    <header>
      <img src={logoImg} alt="A form and a pencil" />
      <h1>리액트 폼</h1>
      <ul className='top-menu'>
				<Link to="/login" ><li>로그인</li></Link>
				<Link to="/join"  ><li>회원가입</li></Link>
			</ul>

    </header>
  );
}
