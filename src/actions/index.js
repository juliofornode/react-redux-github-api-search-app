import axios from 'axios';

const clientId = '885985c102a1891a0258';
const clientSecret = 'cd7cd3eca544209f4eeb129eb059675894242f5e';

export function fetchData(usuario) {
    const url = `https://api.github.com/users/${usuario}?client_id=885985c102a1891a0258&client_secret_=cd7cd3eca544209f4eeb129eb059675894242f5e`;
    const request = axios.get(url);
    return {
        type: 'FETCH_DATA',
        payload: request
    }
}

export function fetchRepos(usuario) {
    const url = `https://api.github.com/users/${usuario}/repos?per_page=5&client_id=885985c102a1891a0258&client_secret_=cd7cd3eca544209f4eeb129eb059675894242f5e&sort=created`;
    const request = axios.get(url);
    return {
        type: 'FETCH_REPOS',
        payload: request
    }
}
