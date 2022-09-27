import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ info }) => {
    return (
        <Link to={`/detalle/${info.id}`} className="camisetas">
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4'>
                        <img src={info.img} alt="" />
                        <h4>Nombre: {info.name}</h4>
                        <p>Precio: {info.price}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item