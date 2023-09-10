import axios from 'axios';

export const CEPApi = axios.create({
    baseURL: 'http://viacep.com.br/ws/'
})