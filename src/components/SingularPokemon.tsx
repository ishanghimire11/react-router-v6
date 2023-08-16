import React, { useEffect, useState } from 'react';
import { Pokemon } from '../types/Pokemon';
import colours from './Colors';
import { Link } from 'react-router-dom';

interface PokemonProps {
    pokemon: Pokemon;
}

interface TypeBackgroundProps {
    type: string;
}

const TypeBackground: React.FC<TypeBackgroundProps> = ({ type }) => {
    const backgroundColor = colours[type];
    return (
        <span style={{ color: backgroundColor }} className='px-4 py-2 font-semibold capitalize rounded-lg text-md'>
            {type}
        </span>
    );
};

const SingularPokemon: React.FC<PokemonProps> = ({ pokemon }) => {
    const { name, url } = pokemon;
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const [cardBackgroundColor, setCardBackgroundColor] = useState('');

    const getPokemonDetails = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setPokemonDetails(data);
        const primaryType = data.types[0].type.name;
        setCardBackgroundColor(colours[primaryType]);
    };

    useEffect(() => {
        getPokemonDetails();
    }, []);

    return (
        <Link to={`/pokemons/${pokemonDetails?.id}`}>
        <div className='relative text-center duration-300 rounded-lg shadow-md pt-28 hover:scale-105' style={{ backgroundColor: cardBackgroundColor }}>
            
                <div>                
                    <img
                    className='h-[150px] w-full mb-6'
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetails?.id}.svg`}
                    alt={`${name} image`}
                />
                </div>

                
                <span className='absolute text-gray-600 text-8xl opacity-20 top-8 left-20'>#{pokemonDetails?.id < 10 ? `00${pokemonDetails?.id}` : pokemonDetails?.id < 100 ? `0${pokemonDetails?.id}` : pokemonDetails?.id.toString()}</span>
                <div className='w-full gap-2 py-8 bg-white rounded-b-lg t-8 p'>
                    <p className='mb-3 text-xl font-medium capitalize'>{name}</p>
                    <div className='flex flex-wrap items-center justify-center gap-4'>
                    {pokemonDetails?.types.map((type) => {
                        return <TypeBackground type={type.type.name} key={type.slot} />;
                    })}
                    </div>
                </div>
            
        </div>
        </Link>
    );
};

export default SingularPokemon;
