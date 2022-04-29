import React from 'react'

export default function Response({ response }) {
    if (response !== "reponse is undefined") {
        if (response.presentation && response.carte) {
            for (var [cle, valeur] of Object.entries(response)) {
                return (
                    <>
                        <div>Voici la réponse généré par votre requête :</div><div>
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
                        <div>Une erreur ? Tu vois bien le code de retour non? Il doit bien y avoir un autre message quelque part...</div>

                    </>
                )
            }
        } else {
            return (
                <>
                    <div>Voici la réponse généré par votre requête :</div><div>
                        <pre>
                            {JSON.stringify(response, null, 2)}
                        </pre>
                    </div>
                    <div>Une erreur ? Tu vois bien le code de retour non? Il doit bien y avoir un autre message quelque part...</div>
                </>
            )
        }
    }
}
