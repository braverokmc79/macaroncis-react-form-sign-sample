import Header from './components/Header.jsx';
import Signup from './components/Signup.jsx';
import SimpleInput from './components/SimpleInput.jsx';
import Login from './components/StateLogin.jsx';
//import Login from './components/RefLogin.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound.jsx';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />
      <main>   

        <Routes>
					<Route path="/" element={<Signup />}></Route>
          <Route path="/join" element={<Signup />}></Route>
					<Route path="/login/*" element={<Login />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>

      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
