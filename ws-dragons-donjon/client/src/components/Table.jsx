import React from 'react'
import Body from './Body'
import '../style/table.scss'

export default function Table() {
    return (
        <>
            <div>Header</div>
            <table className='table-main'>
                <tr className='table-head'>
                    <td>Key</td>
                    <td>Value</td>
                    <td>Description</td>
                </tr>
                <tr>
                    <td>key1</td>
                    <td>value1</td>
                    <td>desc1</td>
                </tr>

            </table>
            {/* // <Params /> */}
            <Body />
            {/* // <Headers /> */}
        </>
    )
}
