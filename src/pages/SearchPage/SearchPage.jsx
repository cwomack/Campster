import React from "react";

function SearchPage(props) {
    fetch("https://ridb.recreation.gov/api/v1/campsites", {
        method: "GET",
        headers: {
            "X-Auth-Token": "7bac1ade-6eba-41f5-834c-569eb0ab7935",
            "Content-Type": "application/json",
        },
    })
        .then(response => response.json())
        .then((response) => {
            console.log(response)
        })
        .catch(error => console.error(error));


    return (
        <>
            <h1>Search Camps</h1>
            
        </>
    );
}


export default SearchPage;