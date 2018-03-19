import axios from 'axios';

const url = 'http://localhost:3001';

export const getMedia = () => {
    const filteredUrl = `${url}/media`
    return axios.get(filteredUrl);
}

export const getMediaByTitle = (title) => {
    const filteredUrl = `${url}/media?title=${title}`
    return axios.get(filteredUrl);
}


