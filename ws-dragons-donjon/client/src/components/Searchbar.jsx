import React, { useState } from 'react'

export default function SearchBar({requestURL, handleURLChange, requestType, handleRequestType, sendRequest}) {    

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
            <button onClick={sendRequest} >
                valider la requete
            </button>
        </>
    )
}
