import React from 'react'

export default function Body({bodyContent, handleChangeContent}) {

    return (
        <div>

            <div>
                Body
            </div>
            <textarea name="body" cols="40" rows="5" value={bodyContent} onChange={handleChangeContent}></textarea>
            {bodyContent}
        </div>
    )
}
