import React from 'react'
export default function Sort({handleSortChange,sortOption}){
    return (
        <div>
            <label>Sort by: </label>
            <select onChange={handleSortChange} value={sortOption}>
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="time">Time to Prepare</option>
            <option value="rating">Rating</option>
            </select>
      </div>
    )
}