"use client"

import React, { useState } from 'react';
import TarjetaParticipante from './TarjetaParticipante';
import FilterIcon from './FilterIcon';



function TablaParticipantes(props) {
    const data = props.partis
    //console.log(data)

    const [query, setQuery] = useState('');
  
    // set the value of our useState query anytime the user types on our input
    const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase())
    }
    
    //Our search filter function
    const searchFilter = (array) => {
      return array.filter(
        (item) => item.name.toLowerCase().includes(query) || item.masks[0].name.toLowerCase().includes(query) || item.masks[1].name.toLowerCase().includes(query)
      )
      }
    
    //Applying our search filter function to our array of countries recieved from the API
    const filtered = searchFilter(data)


    return (
      <>
      <div className='flex justify-around mt-16'>
        <div className='flex'>
          <FilterIcon />
          <input className='border px-4 py-2 rounded-md border-2 border-brownsugar w-96' onChange={handleChange} type='text' placeholder='Filtra por nombre o máscara' />
        </div>
      </div>
        {(data.length > 0) ? 
        (
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2">
            {filtered.map((item) => (
                <div key={item.id}> 
                  <TarjetaParticipante name={item.name} mask1={item.masks[0]} mask2={item.masks[1]} />
                </div>
              ))}
          </div>
        )
        : 
        (
          <p>No hay participantes</p>
        )}   
      </>
    );
}

export default TablaParticipantes;