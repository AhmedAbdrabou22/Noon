import React from 'react'
import { Link } from 'react-router-dom'

const Suptitle = ({title , othertitle}) => {
    return (
        <div className='d-flex justify-content-between align-items-center'>
            <div className='fs-2' style={{fontWeight:"bolder"}}>{title}</div>
            {
                othertitle !== "" ? (
                    (othertitle === "شوف كله") ? (
                        <Link to="/products" style={{textDecoration:"none"}}>
                            <div className='otherTitle' style={{cursor:"pointer"}}>{othertitle}</div>
                        </Link>
                    ):(<div className='otherTitle' style={{cursor:"pointer"}}>{othertitle}</div>)
                ):null
            }
        </div>
    )
}

export default Suptitle
