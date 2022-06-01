import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import Card from '../components/Card';

const Search = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {query = ""} = queryString.parse(location.search);
    const [search, setSearch] = useState({});
    const [heros, setHeros] = useState([]);

    const handleChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`?query=${search.search}`);
    }

    const getHeros = () => {
        axios.get(`https://www.superheroapi.com/api.php/1960408360797918/search/${query}`)
        .then(response => {
            setHeros(response.data.results);
            return response.data.results;
        });
    }

    useEffect(() => {
        getHeros();
    }, [query]);
    
  return (
    <>
        <h1>Search</h1>
        <form className='container row g-3' onSubmit={handleSubmit}>
            <div className="col-auto">
                <label htmlFor="search" className="visually-hidden">Search</label>
                <input type="text" className="form-control" id="search" placeholder="search" 
                name='search' defaultValue={search.search} onChange={handleChange}/>
            </div>
            <div className="col-auto">
            <button type="submit" className="btn btn-primary">Search</button>
        </div>
        </form>
        <div className='container d-flex justify-content-center align-items-center'>
        <div className='row'>
                <h3>Results: </h3>
                {heros?.map(hero => {
                    return (
                        <div className='col-md-4 col-lg-6'>
                            <Card key={hero.id} {...hero} />
                        </div>)
                })}
        </div>
        </div>
    </>
  )
}

export default Search