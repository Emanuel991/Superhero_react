import React, { useContext, useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import HeroContext from '../contexts/HeroContext'

const Card = (props) => {
  const {team, setTeam} = useContext(HeroContext);
  let teamGood = [];
  let teamBad = [];
  const navigate = useNavigate();

  useEffect(() => {
    teamGood = team.filter((hero) => {
      return hero.biography.alignment === 'good';
    })
    teamBad = team.filter((hero) => {
      return hero.biography.alignment === 'bad';
    })
  }, [team])
  

  const handleAdd = (e) => {
    e.preventDefault();
    if(team.length < 6){
      if(teamGood.length < 3 || teamBad.length < 3){
        setTeam([...team, props]);
        alert('Se agregó el superheroe al equipo!')
        navigate('/home'); 
      }else {
        alert('no se pudo agregar el superheroe al equipo, solo pueden haber tres heroes buenos y tres malos')
      }
    }else{
      alert('El equipo ya está completo');
    }
  }

  const handleDelete = (e) => {
    e.preventDefault();
    setTeam(team.filter((hero) => {
      return hero.id !== props.id
    }));
  }

  return (
    <>
        <div className="card m-3" style={{ width: '18rem' }}>
            <img src={props.image.url} className="card-img-top" alt="img hero" />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <button className='btn btn-success' onClick={handleAdd}>add at team</button>
                <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
                <ul>
                  <li>Intelligence: {props.powerstats.intelligence}</li>
                  <li>Strength: {props.powerstats.strength}</li>
                  <li>Speed: {props.powerstats.speed}</li>
                  <li>Durability: {props.powerstats.durability}</li>
                  <li>Power: {props.powerstats.power}</li>
                  <li>Combat: {props.powerstats.combat}</li>
                </ul>
                <NavLink to={`/superhero/${props.id}`}>View more</NavLink>
            </div>
        </div>
    </>
  )
}

export default Card