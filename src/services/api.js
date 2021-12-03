import axios from 'axios';

// URL Filmes em Cartaz:
// https://api.themoviedb.org/3/movie/now_playing?api_key=3a39e2462b893e8769e722ecc4c85504&language=pt-BR&page=1

export const key = '3a39e2462b893e8769e722ecc4c85504'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;