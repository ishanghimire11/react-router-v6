import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import Header from './components/Header';
import Pokemons from './pages/Pokemons';



function App() {
  return (
    <>
    <Header />
    <main className='max-w-[1280px] p-12 mx-auto'>   
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/pokemons' element={<Pokemons/>}/>
     </Routes>
     </main> 
    </>
  )
}

export default App
