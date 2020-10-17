const BASE_URL = "/api/camps";
const APIKey = process.env.REACT_APP_API_KEY
export default {getAll};


export function getAll() {
    const options = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            "APIKey": APIKey
        },
    };
    return fetch(`${BASE_URL}/search`, options).then(res => res.json());
}

