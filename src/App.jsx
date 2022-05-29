import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import AboutTwo from './components/AboutTwo';
import Home from './components/Home';
import HomeTwo from './components/HomeTwo';
import ItemUser from './components/ItemUser';
import Nav from './components/Nav';
import NavBar from './components/NavBar';
import Shop from './components/Shop';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      
      {/* Route 1 */}

      {/* <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='users' element={<Users />} />
      </Routes> */}

      {/* Route 1 */}
      {/* Route 2 */}

      <Nav />
      <Routes>
        <Route path='/homeTwo' element={<HomeTwo />} />
        <Route path='aboutTwo' element={<AboutTwo />} />
        <Route path='shop' element={<Shop />} />
        <Route path='shop/:id' element={<ItemUser />} />
      </Routes>
    </div>
  );
}

export default App;
