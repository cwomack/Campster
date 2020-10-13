const BASE_URL = "/api/trips";

export function getAll() {
    return fetch(BASE_URL).then(res => res.json());
}

export function create(trip) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(trip)
    }).then(res => res.json());
}

export function update(trip) {
    return fetch(`${BASE_URL}/${trip._id}`, {
        method: "PUT",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(trip)
    }).then(res => res.json());
}

export function deleteTrip(id) {
    return fetch(`${BASE_URL}/${id}`,{
        method: "DELETE"
    }).then(res => res.json());
}