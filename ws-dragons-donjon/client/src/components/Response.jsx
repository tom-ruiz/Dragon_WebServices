import React from 'react'

export default function Response({response}) {
    return (
        <><div>Response</div><div>
            <pre>
                {JSON.stringify(response,null,2)}
            </pre> 
        </div></>
    )
}
