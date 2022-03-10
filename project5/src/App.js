import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import TrangChu from './components/TrangChu';
import LienHe from './components/LienHe';
import GioHang from './components/GioHang';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <header>
          <nav>
            <Link to='/'>trang chu</Link>
            <Link to='/about'>lien he</Link>
            <Link to='/cart'>gio hang</Link>
          </nav>
        </header>
        <main>
          <article>
            <Routes>
              <Route path='/' element={<TrangChu/>}/>
              <Route path='/about' element={<LienHe/>}/>
              <Route path='/cart' element={<GioHang/>}/>
            </Routes>
          </article>
          <aside>
            thong tin bo sung
          </aside>
        </main>
        <footer>footer</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
