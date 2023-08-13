import React, { useEffect, useState } from 'react'
import { Pokemon } from '../types/Pokemon'
import colours from './Colors';

interface PokemonProps {
    pokemon: Pokemon
}

interface TypeBackgroundProps {
    type: string
}

const TypeBackground: React.FC<TypeBackgroundProps> = ({type}) => {
    const backgroundColor = colours[type]
    return <span style={{backgroundColor: backgroundColor}} className='px-4 py-2 text-white rounded-lg'>
        {type}
    </span>
}

const SingularPokemon: React.FC<PokemonProps> = ({pokemon}) => {
    const {name, url } = pokemon;
    const [pokemonDetails, setPokemonDetails] = useState([]);

    const getPokemonDetails = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setPokemonDetails(data);
    };

    useEffect(() => {
        getPokemonDetails();
    }, [])
  
    return (
   <div className='relative text-center'>
        <img className='h-[120px] w-full mb-6' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetails?.id}.svg`} alt={`${name} image`} />
        <p className='text-2xl font-medium capitalize'>{name}</p>
        <span className='absolute text-gray-600 -left-6 -top-4'>#{pokemonDetails && pokemonDetails.id}</span>
        <div className='flex flex-wrap justify-center gap-2 mt-8'>
            {pokemonDetails && pokemonDetails.types?.map((type) => {
            return <TypeBackground type={type.type.name} key={type.slot}/>
        })}</div>
   </div>
  )
}

export default SingularPokemon;