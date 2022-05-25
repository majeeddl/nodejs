
import axios from 'axios'

const getFetch = async (url, params) => {
    const queryString = Object.entries(params).map(param => {
        return `${param[0]}=${params[1]}`
    }).join('&');

    return await axios.get(`${url}?${queryString}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    })
}


export {
    getFetch
}

