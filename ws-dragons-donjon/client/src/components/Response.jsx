import React from 'react'

export default function Response({ response }) {
    if (response !== "reponse is undefined") {
        if (response.presentation && response.carte) {
            for (var [cle, valeur] of Object.entries(response)) {
                return (
                    <>
                        <div>Response</div><div>
                            <pre>
                                {JSON.stringify(response.presentation, null, 2)}

                            </pre>
                            <pre>
                                <ul>
                                    {response.carte.map(location => {
                                        return <li>{location}</li>
                                    })}
                                </ul>
                            </pre>
                        </div>

                    </>
                )
            }
        } else {
            return (
                <>
                    <div>Response</div><div>
                        <pre>
                            {JSON.stringify(response, null, 2)}
                        </pre>
                    </div>
                </>
            )
        }
    }
}
