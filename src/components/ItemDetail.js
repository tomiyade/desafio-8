import React, { useState } from 'react'
import { useCartContext } from "../context/CartContext";
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'



const ItemDetail = ({ data }) => {
    const [alCarrito, setAlCarrito] = useState(false);
    const { addProduct } = useCartContext();


    const onAdd = (quantity) => {
        setAlCarrito(true);
        addProduct(data, quantity)
    }

    return (
        <div className="col-lg-4">
            <div className="text-center card-box">
                <div className="member-card pt-2 pb-2">
                    <div className="thumb-lg member-thumb mx-auto">
                        <img
                            src={data.img}
                            className="rounded-circle img-thumbnail"
                            alt="profile-image"
                        />
                    </div>
                    <div>
                        <h4>Nombre: {data.name}</h4>
                    </div>
                    {
                        alCarrito
                            ? <Link className='finalizar-compra' to='/cart'>Finalizar Compra</Link>
                            : <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail