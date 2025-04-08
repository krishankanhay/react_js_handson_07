import React from 'react'

const Table = () => {
    return (
        <>
            <div className='students'>
                <h1>Students Details</h1>
                <button className='add' onClick={() => { nav('/addnew') }}>Add new student</button>
            </div>
            
        </>
    )
}

export default Table
