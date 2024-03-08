import React, { useEffect } from 'react'
import Search from '../components/common/Search'
import RecipeList from '../components/common/RecipeList'
import { getRecipes } from './services/Api'
import { useState } from 'react'

const Recipes = () => {
    const[searchedquery,setSearchedquery]=useState('PIZZA');    
    const[recipes,setRecipes]=useState([]);

    useEffect(()=>{
      getSearchResult();
    },[searchedquery])
    const getSearchResult= async ()=>{
      let result= await getRecipes(searchedquery);
      if(result && result.recipes){
        setRecipes(result.recipes);
      }
    }
  return (
    <div>
        <>
        <Search setSearchedquery={setSearchedquery}/>
        <RecipeList recipes={recipes} searchedquery={searchedquery} />
        </>
    </div>
  )
}

export default Recipes