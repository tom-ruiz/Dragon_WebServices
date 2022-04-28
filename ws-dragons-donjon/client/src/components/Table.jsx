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
                    <td><input type="text" placeholder='key'/></td>
                    <td><input type="text" placeholder='value'/></td>
                    <td><input type="text" placeholder='value'/></td>
                </tr>

            </table>
            {/* // <Params /> */}
            <Body />
            {/* // <Headers /> */}
        </>
    )
}
