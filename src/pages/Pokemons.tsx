import React, { useEffect, useState } from 'react';
import { Pokemon } from '../types/Pokemon';
import SingularPokemon from '../components/SingularPokemon';
import Search from '../components/Search';
import Sort from '../components/Sort';
import { Button } from '../components/Button';
import Loading from '../components/Loading';

const FilterOptions = ["Ascending", "Descending"];

const Pokemons = () => {
    const [pokemonList, setPokemonList] = useState([]);
    const [pokemonLimit, setPokemonLimit] = useState(18);
    const [isLoading, setIsLoading] = useState(false);

    const getPokemons = async () => {
        setIsLoading(true);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${pokemonLimit}`);
        const data = await res.json();
        setPokemonList(data.results);
        setIsLoading(false);
    };
    
    useEffect(() => {
        getPokemons();
    }, [pokemonLimit]);

    const loadMore = () => {
        return setPokemonLimit(currentLimit => currentLimit + 21);
    };

    return (
        <>
        {isLoading ? <Loading /> :
        <div>
            <div className='flex flex-col mb-16 xl:justify-between xl:flex-row gap-y-8'>
                <Search type='text' placeholder='Search...' />
                {/* <Sort options={FilterOptions}/> */}
            </div>

            <div className='grid grid-cols-1 gap-10 xl:grid-cols-3 xl:gap-8 lg:grid-cols-2 lg:gap-10'>
                {pokemonList.map((pokemon: Pokemon, index: number) =>  {
                    return (
                    
                    <div key={index}>
                        <SingularPokemon pokemon={pokemon}/>
                    </div>)
                })}
            </div>

            <Button size='lg' variant='primary' className='mx-auto mt-16' onClick={loadMore} isLoading={isLoading}>
                Load More
            </Button> 
        </div>
        }
        </>
  );
}

export default Pokemons;
