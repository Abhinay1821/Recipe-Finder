import React, { Children } from 'react'

const APIContext = React.createContext();

export function UseAPI(){
    return React.useContext(APIContext)
}

export function APIProvider(props){
    const [data,setData] = React.useState([])
    const [filterData,setFilterData] = React.useState([])

    
    async function fetchData(){
        try{
            const result = await fetch('https://dummyjson.com/recipes')
            const response = await result.json()
            setData(response.recipes)
            setFilterData(response.recipes)
        }
        catch(err){
            console.log(err)
        }

    }

    return (
        <APIContext.Provider value={{data,fetchData,setData,filterData,setFilterData}}>
            {props.children}
        </APIContext.Provider>
    )
}