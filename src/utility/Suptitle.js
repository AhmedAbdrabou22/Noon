import React from 'react'

const Suptitle = ({title , othertitle}) => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div className='fs-2' style={{fontWeight:"bolder"}}>{title}</div>
            {
                othertitle !== "" ? (
                    <div className='otherTitle' style={{cursor:"pointer"}}>{othertitle}</div>
                ):null
            }
        </div>
    )
}

export default Suptitle
