import axios from '../configs/axios.config'
// import 

export const fetchSearchResult = async(pageNumber, search , controller) => {
    const query = `/search.json?q=${search}&page=${pageNumber}&limit=10`;
    try{
        const result = await axios.get(query, {
            signal: controller.signal,
        });
        return result
    }
    catch(err){
        if(err.name !== 'CanceledError')
        console.error(err, 'error message')
    }

}

export const fetchSubjectResult = async(pageNumber , controller) => {
    const query = `/subjects/love.json?page=${pageNumber}&limit=10`;
    try{
        const result = await axios.get(query, {
            signal: controller.signal,
        });
        return result
    }
    catch(err){
        if(err.name !== 'CanceledError')
        console.error(err, 'error message')
    }

}