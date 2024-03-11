import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'
import MarkCountries from "../MarkCountries/MarkCountries";
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [markCountries, setMarkCountries] = useState([]);
    useEffect(() => {
        const loadCountries = async () => {
            const res = await fetch('https://restcountries.com/v3.1/all');
            const data = await res.json();
            // console.log(data);
            setCountries(data);
        }
        loadCountries();
    }, []);

    useEffect(() => {

        const storedMarkCountries = localStorage.getItem('markCountries');
        if (storedMarkCountries) {
            setMarkCountries(JSON.parse(storedMarkCountries));
        }
    }, []);
    const handleMarkCountry = (country) => {
        const countryName = markCountries.map(countryN => countryN);

        if (!countryName.includes(country)) {
            const updatedMarkCountries = [...markCountries, country];
            setMarkCountries(updatedMarkCountries);

            try {
                const markCountriesString = JSON.stringify(updatedMarkCountries);

                localStorage.setItem('markCountries', markCountriesString);
            } catch (error) {
                console.error('Error occurred while storing markCountries data:', error);
            }
        } else {
            alert('Country is already marked.');
        }
    }

    const clearHistory = () => {
        try {
            localStorage.clear();
            setMarkCountries([]);
        } catch (error) {
            console.error('Error occurred while clearing local storage:', error);
        }
    }



    return (
        <div style={{ maxWidth: '1440px', margin: '0 auto' }}>
            <h3>Countries:{countries.length}</h3>
            <div className="">
                <h1>Visited Country</h1>
            </div>
            <div className="flag-container">
                {markCountries.map(image => (
                    <div key={image.cca3} className="flag-wrapper">
                        <img src={image.flags.png} className="flag-image" alt={image.name} />
                        <span className="country-name">{image.name.common}</span>
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'row-reverse', justifyContent: 'center', gap: '10px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {markCountries.map((country) => <MarkCountries key={country.cca3} country={country}></MarkCountries>)}
                    {markCountries.length !== 0 ? <button onClick={clearHistory}>Clear History</button> : 'please Add Your visited country'}
                </div>
                <div style={{ width: '' }} className="countries-container">
                    {
                        countries.map(country => <Country key={country.cca3}
                            handleMarkCountry={handleMarkCountry}
                            country={country}></Country>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Countries;