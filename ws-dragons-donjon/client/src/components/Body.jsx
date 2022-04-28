import React, { useState } from 'react'

export default function Body() {
    const [bodyContent, setBodyContent] = useState('')
    const handleChangeContent = (event) => {
        setBodyContent(event.target.value)
    }
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
