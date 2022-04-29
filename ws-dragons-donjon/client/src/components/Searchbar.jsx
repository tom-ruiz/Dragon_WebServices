import React, { useState } from 'react'

export default function SearchBar({requestURL, handleURLChange, requestType, handleRequestType, sendRequest, handleBodyContent, bodyContent}) {    

    return (
        <>
            <label for="pet-select">Type de requete:</label>

            <select value={requestType} onChange={handleRequestType} defaultValue={"GET"} name="requestType">
                <option  value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
            </select>

            <input type="text" value={requestURL} onChange={handleURLChange} />
            <div>
                {requestURL}
            </div>
            <textarea name="body" cols="40" rows="5" value={bodyContent} onChange={handleBodyContent}></textarea>
            <button onClick={sendRequest} >
                valider la requete
            </button>
        </>
    )
}
