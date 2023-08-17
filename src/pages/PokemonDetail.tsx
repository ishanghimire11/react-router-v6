import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading';

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
            {loading ? <Loading /> : 
            <div>
                <div>
                    <div>
                    <img
                    className='h-[150px] w-full mb-6'
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${details?.id}.svg`}
                    alt={`${details.name} image`} />
                    </div>
                    <div>
                        <div>
                            <button>About</button>
                            <button>Stats</button>
                            <button>Evolution</button>
                        </div>
                        <div>
                            <div>
                                Stats
                            </div>
                        </div>
                    </div>
                </div>
            </div>

}
        </>
  )
}

export default PokemonDetail;