import React, { useState } from 'react'

export default function SearchBar({requestURL, handleURLChange}) {
    console.log("requestURL :" +  requestURL);
    const [requestType, setRequestType] = useState("");

    const handleRequest = () => {
        console.log('requete lancée')
    }
    const handleRequestType = (event) => {
        setRequestType(event.target.value)
        console.log(event.target.value);
    }
    return (
        <>
            <label for="pet-select">Type de requete:</label>

            <select value={requestType} onChange={handleRequestType} name="requestType">
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
            </select>

            <input type="text" value={requestURL} onChange={handleURLChange} />
            <div>
                {requestURL}
            </div>
            <button onClick={handleRequest} >
                valider la requete
            </button>
        </>
    )
}
