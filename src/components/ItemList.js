import React from 'react'
import Item from './Item'

const ItemList = ({ data = [] }) => {
    return (
        data.map(camisetas => <Item key={camisetas.id} info={camisetas} />)
    )
}

export default ItemList