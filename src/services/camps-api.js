const BASE_URL = "/api/camps";
export default {getAll};


export function getAll() {
    const options = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
        },
    };
    return fetch(`${BASE_URL}/search`, options).then(res => res.json());
}

