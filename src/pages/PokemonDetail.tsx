import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetail = () => {
    const [details, setDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const params = useParams();

    const getPokemonDetails = async () => {
        try{
            setLoading(true)
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
            const data = await res.json();
            setDetails(data)
        } catch (err){
            console.error(err);
        } finally {
            setLoading(false)
        }
    };
    
    useEffect(() => {
        getPokemonDetails();
    }, []);
  
    return (
        <>
            {loading ? "Loading..." : 
            <div className='flex flex-col items-center'>
                <div className='mb-16'>
                    <h2 className='text-4xl capitalize'>
                        {details.name}
                    </h2>
                </div>
                <div>
                <div className='flex gap-32'>
                    <div>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${details?.id}.svg`} alt="" />
                    </div>
                    <div className='flex p-6 bg-blue-500 rounded-lg h-fit'>
                        <div className='flex gap-20'>
                            <div>
                                <p className='mb-2 text-xl text-white'>
                                    Height
                                </p>
                                <p className='text-xl text-center'>
                                    {details.height}
                                </p>
                            </div>
                            <div>
                                <p className='mb-2 text-xl text-white'>
                                    Weight
                                </p>
                                <p className='text-xl text-center'>
                                    {details.weight}
                                </p>
                            </div>
                        </div>
                        <div className='flex'>

                        </div>
                        <div className='flex'>

                        </div>
                    </div>
                </div>
                </div>
                
            </div>}
        </>
  )
}

export default PokemonDetail;