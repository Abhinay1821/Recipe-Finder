import React,{useState} from 'react'
import Search from './Components/Search'
import { UseAPI } from './Components/APIProvider'
import Card from './Components/Card'
import Filter from './Components/Filter'
import Sort from './Components/Sort'

export default function Recepie(){
    const [selectedCuisine, setSelectedCuisine] = useState('All');
    const [sortOption, setSortOption] = useState('');
    const {fetchData,data,filterData,setFilterData} = UseAPI()
    const [input,setInput] = React.useState('')
    console.log(filterData)
    
    const handleCuisineChange = (e) => {
        const cuisine = e.target.value;
        setSelectedCuisine(cuisine);

    
        // Filter recipes based on selected cuisine
        const filteredRecipes = cuisine === 'All'
          ? data
          : data.filter(recipe => recipe.cuisine === cuisine);
          setFilterData(filteredRecipes);
      }
    
    const handleSearch = () =>{
        const filteredData = filterData.filter(obj=>obj.name.toLowerCase().startsWith(input.toLowerCase()))
        setFilterData(filteredData)
    }

    const handleSortChange = (e) => {
        const option = e.target.value;
        setSortOption(option);
    
        const sortedRecipes = [...filterData].sort((a, b) => {
          if (option === 'name') return a.name.localeCompare(b.name);
          if (option === 'time') return a.time - b.time;
          if (option === 'rating') return b.rating - a.rating;
          return 0;
        });
        setFilterData(sortedRecipes);
    }

    React.useEffect(()=>{
        fetchData()
    },[])

    if(data.length === 0) return (<h1>Loading...</h1>)

    return (
        <>
            <Search input={input} onChange={(e)=>setInput(e.target.value)} buttonClick={handleSearch}/>
            <Filter handleCuisineChange={(e)=>handleCuisineChange(e)} selectedCuisine={selectedCuisine}/>
            <Sort handleSortChange={(e)=>handleSortChange(e)} sortOption={sortOption}/>
            <div className='cards-container'>
                {filterData.length > 0 && (
                    filterData.map(dataObj=>{
                        return (
                            <Card dataObj={dataObj}/>
                        )
                    })
                )
                }
            </div>
            
        </>
    )

}