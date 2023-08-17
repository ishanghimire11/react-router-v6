import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';
import Pokemons from './pages/Pokemons';
import PokemonDetail from './pages/PokemonDetail';
import Header from './components/Header';

function App() {
  return (
    <div className= 'font-handjet'>
    <Header />
    <main className='max-w-[1340px] p-12 mx-auto'>   
      <Routes>
      {/* <Route path='/' element={<Home />}/> */}
      <Route path='/about' element={<About/>}/>
      <Route path='/' element={<Pokemons/>}/>
      <Route path='/pokemons/:id' element={<PokemonDetail/>}/>
     </Routes>
     </main> 
    </div>
  )
}

export default App
