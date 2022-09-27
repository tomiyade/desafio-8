import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({ info }) => {
    return (
        <Link to={`/detalle/${info.id}`} className="camisetas">
            {/* <div className="col-md-4" >
                <div className="text-center card-box">
                    <div className="member-card pt-2 pb-2">
                        <div className="thumb-lg member-thumb mx-auto">
                            <img
                                src={info.img}
                                className="rounded-circle img-thumbnail"
                                alt="profile-image"
                            />
                        </div>
                        <div>
                            <h4>Nombre: {info.name}</h4>
                            <p className="text-muted">Precio: {info.price}</p>
                            <button>Agregar al Carrito</button>
                        </div>
                    </div>
                </div>
            </div > */}
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