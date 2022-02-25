import { Response, Resultado } from '../interface/response';

const baseUrl = 'http://localhost:3001'
const fetchMovies = (endpoint: string, data?: any, method = 'GET') => {

    const url = `${baseUrl}/${endpoint}`

    if (method === 'GET') {
        return fetch(url);

    }else {
        return fetch(url, {method, headers: {'Content-type': 'application/json'}, body: JSON.stringify(data)})
    }

}

export {fetchMovies}