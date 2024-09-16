import React from 'react';
import { allCuisines } from './utils';
import { UseAPI } from './APIProvider';

export default function Filter({handleCuisineChange,selectedCuisine}){
    const {data} = UseAPI()
    const cuisines = allCuisines(data)
    return (
        <div>
            <label>Filter by Cuisine: </label>
            <select onChange={handleCuisineChange} value={selectedCuisine}>
                {
                    cuisines.map(val=>{
                        return (
                            <option value={val}>{val}</option>
                        )
                    })
                }
            </select>
      </div>

    )
}