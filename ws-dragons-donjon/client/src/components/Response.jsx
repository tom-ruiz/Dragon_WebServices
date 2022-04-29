import React from 'react'

export default function Response({response}) {
    if(response !== "reponse is undefined"){
        if(response.presentation && response.carte){
            for (var [cle, valeur] of Object.entries(response)){
                console.log(cle + ' ' + valeur);
                return(
                    <>
                    <div>Voici la réponse généré par votre requête :</div><div>
                        <pre>
                            <div>
                                <p>{valeur}</p>
                            </div>
                        </pre> 
                    </div>
                    <div>Une erreur ? Tu vois bien le code de retour non? Il doit bien y avoir un autre message quelque part...</div>
                    </>
                )
              }
        }else{
            return (
                <>
                    <div>Voici la réponse généré par votre requête :</div><div>
                        <pre>
                            {JSON.stringify(response,null,2)}
                        </pre> 
                    </div>
                    <div>Une erreur ? Tu vois bien le code de retour non? Il doit bien y avoir un autre message quelque part...</div>
                </>
            )
        }
    }
}
