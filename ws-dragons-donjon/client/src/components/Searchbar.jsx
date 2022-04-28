import React from 'react'

export default function SearchBar() {
    const handleRequest = () => {
        console.log('requete lancée')
    }
    return (
        <>
            <label for="pet-select">Type de requete:</label>

            <select name="requestType">
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
            </select>

            <input type="text" />
            <button onClick={handleRequest}>
                valider la requete
            </button>
        </>
    )
}
