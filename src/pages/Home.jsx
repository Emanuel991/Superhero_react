import React, { useContext, useEffect, useRef, useState } from 'react';
import Card from '../components/Card';
import HeroContext from '../contexts/HeroContext';

const Home = () => {
  const {team} = useContext(HeroContext);
  const [powerstats, setPowerstats] = useState({});
  const totalRef = useRef(0);  
  const strengthRef = useRef(0);
  const speedRef = useRef(0);
  const durabilityRef = useRef(0);
  const powerRef = useRef(0);
  const combatRef = useRef(0);
  let totalIntelligence;
  let totalStrength;
  let totalSpeed;
  let totalDurability;
  let totalPower;
  let totalCombat;

  useEffect(() => {
    setPowerstats({
      intelligence: totalIntelligence,
      strength: totalStrength,
      speed: totalSpeed,
      durability: totalDurability,
      power: totalPower,
      combat: totalCombat
    }); 
    console.log('team: ', team)
    totalRef.current = 0;
    strengthRef.current = 0;
    speedRef.current = 0;
    durabilityRef.current = 0;
    powerRef.current = 0;
    combatRef.current = 0;
  },[totalRef.current, strengthRef.current, speedRef.current, durabilityRef.current, powerRef.current, combatRef.current])

  const maxKey = (data) => {  
    var maxProp = null
    var maxValue = -1
    for (var prop in data) {
      if (data.hasOwnProperty(prop)) {
        var value = data[prop]
        if (value > maxValue) {
          maxProp = prop
          maxValue = value
        }
      }
    }
    return {maxProp, maxValue};
  }

  return (
    <>
        <h1 className='text-center m-2'>Super hero team</h1>
        {team.length !== 0 ? (<h4 className='m-3'>Maximun powerstat: {maxKey(powerstats).maxProp}: {maxKey(powerstats).maxValue}</h4>) : <h4 className='m-3'>Team empty</h4>}
        <div className='container'>
          {team?.map(hero => { 
            // setPowerstats(hero.powerstats.intelligence)
            totalIntelligence = Number(hero.powerstats.intelligence) + Number(totalRef.current)
            totalRef.current = totalIntelligence;
            totalStrength = Number(hero.powerstats.strength) + Number(strengthRef.current)
            strengthRef.current = totalStrength;
            totalSpeed = Number(hero.powerstats.speed) + Number(speedRef.current)
            speedRef.current = totalSpeed;
            totalDurability = Number(hero.powerstats.durability) + Number(durabilityRef.current)
            durabilityRef.current = totalDurability;
            totalPower = Number(hero.powerstats.power) + Number(powerRef.current)
            powerRef.current = totalPower;
            totalCombat = Number(hero.powerstats.combat) + Number(combatRef.current)
            combatRef.current = totalCombat;
            return (<Card key={hero.id} {...hero}/>) }
          )} 
        </div>
    </>
  )
}

export default Home