
import axios from 'axios'
import { API_URL } from '../../components/constants/Constants';

export const getRecipes= async(searchedquery)=>{
    try{
        let response =await axios.get(`${API_URL}/search?q=${searchedquery}`);
        return response.data;
    }

    catch(error){
        console.log(`Error while calling the api` ,error.message)
        return error.response;
    }
}


export const getRecipe= async (searchedquery)=>{
    try{
        let response =await axios.get(`${API_URL}/get?rId=${searchedquery}`);
        return response.data;
    }

    catch(error){
        console.log(`Error while calling the api` ,error.message)
        return error.response;
    }
}
export default getRecipes