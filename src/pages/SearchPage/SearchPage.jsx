import React, {useState, useEffect} from "react";
import campsAPI from "../../services/camps-api";

function SearchPage(props) {
    const [camps, setCamps] = useState([]);

    useEffect(() => {
        campsAPI.getAll().then(res => setCamps(res))
    }, []);
    console.log(camps) 

    return (
        <>
            <h1>Search Camps</h1>
            
        </>
    );
}


// function SearchPage() {
//     const [error, setError] = useState(null);
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [items, setItems] = useState([]);

//     // Note: the empty deps array [] means
//     // this useEffect will run once
//     // similar to componentDidMount()
//     useEffect(() => {
//         fetch("https://api.example.com/items")
//             .then(res => res.json())
//             .then(
//                 (result) => {
//                     setIsLoaded(true);
//                     setItems(result);
//                 },
//                 // Note: it's important to handle errors here
//                 // instead of a catch() block so that we don't swallow
//                 // exceptions from actual bugs in components.
//                 (error) => {
//                     setIsLoaded(true);
//                     setError(error);
//                 }
//             )
//     }, [])

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     } else if (!isLoaded) {
//         return <div>Loading...</div>;
//     } else {
//         return (
//             <ul>
//                 {items.map(item => (
//                     <li key={item.name}>
//                         {item.name} {item.price}
//                     </li>
//                 ))}
//             </ul>
//         );
//     }
// }

export default SearchPage;