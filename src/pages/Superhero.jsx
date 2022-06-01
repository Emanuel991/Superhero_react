import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

const Superhero = () => {
    const param = useParams();
    const [hero, setHero] = useState({})
    const {appearance} = hero;
    
    useEffect(() => {
        getHero();
    }, [])

    const getHero = () => {
       axios.get(`https://www.superheroapi.com/api.php/1960408360797918/${param.id}`)
        // .then(res => res)
        .then(dataHero => {
            console.log('img ',dataHero.data);
            const {data} = dataHero;
            setHero(data);
            return data;
        })
        .catch(error => console.log(error))
    }
    
  return (
    <>
        <h1>Hero details</h1>
        <div className='container'>
            <img src={`${hero.image?.url}`} alt="img hero" />
            
            <h3>{hero.name}</h3>
            <ul>
                <li>Gender: {appearance?.gender}</li>
                <li>Height: {appearance?.height[1]}</li>
                <li>Weight: {appearance?.weight[1]}</li>
                {/* <li>Eyes color: {appearance?.eye_color}</li> */}
                <li>work base: {hero.work?.base}</li>
            </ul>
        </div>
    </>
  )
}

export default Superhero