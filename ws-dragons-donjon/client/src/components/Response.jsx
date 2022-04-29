import React from 'react'

export default function Response({response}) {
    if(response !== "reponse is undefined"){
        if(response.presentation && response.carte){
            for (var [cle, valeur] of Object.entries(response)){
                console.log(cle + ' ' + valeur);
                return(
                    <>
                    <div>Response</div><div>
                        <pre>
                            <div>
                                <p>{valeur}</p>
                            </div>
                        </pre> 
                    </div>
                    </>
                )
              }
        }else{
            return (
                <>
                    <div>Response</div><div>
                        <pre>
                            {JSON.stringify(response,null,2)}
                        </pre> 
                    </div>
                </>
            )
        }
    }
}
