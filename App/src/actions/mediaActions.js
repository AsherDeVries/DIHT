import axios from 'axios';
import config from '../config/server-url.json';

const url = config.serverurl;

export const getMedia = () => {
    const filteredUrl = `${url}/media`
    return axios.get(filteredUrl);
}

export const getMediaByTitle = (title) => {
    const filteredUrl = `${url}/media?title=${title}`
    return axios.get(filteredUrl);
}


