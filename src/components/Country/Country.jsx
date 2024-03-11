import { useState } from 'react';
import './country.css'
const Country = ({ country, handleMarkCountry }) => {
    const { name, flags, capital, region, area, cca3 } = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className={`country ${visited ? 'countryBg': 'countryBg2'}`}>
            <h3>name:{name?.common}</h3>
            <p>Capital:{capital}</p>
            <img src={flags.png} alt="" />
            <h3>Region: {region}</h3>
            <h3>id:{cca3}</h3>
            <h3>Area:{area}</h3>
            <button className='visited' onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            <button onClick={()=>handleMarkCountry(country)}>Mark as visited</button>
            <h6>{visited || 'lets explore it.'}</h6>
        </div>
    );
};

export default Country;