import { useState, useEffect } from 'react';
import ItemCount from './ItemCount'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const camisetas = [
    {
        id: 1,
        name: "Camiseta Titular Boca Juniors",
        price: "12500",
        img: 'https://bocashop.vteximg.com.br/arquivos/ids/168359-1000-1000/HE6323_1.jpg?v=637922173219300000',
        category: "titulares"
    },
    {
        id: 2,
        name: "Camiseta Titular River Plate",
        price: "12500",
        img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/42f6e0d4f39047e8b476aee60109bc4c_9366/Camiseta_Titular_River_Plate_22-23_Blanco_GB7592_01_laydown.jpg',
        category: "titulares"

    },
    {
        id: 3,
        name: "Camiseta  Independiente de Avellaneda",
        price: "10000",
        img: 'https://sporting.vtexassets.com/arquivos/ids/377655-800-800?v=637692450793900000&width=800&height=800&aspect=true',
        category: "titulares"

    },
    {
        id: 4,
        name: "Camiseta Suplente Boca Juniors",
        price: "9500",
        img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/d94fbf4a70884a228009af01016426f0_9366/Camiseta_Alternativa_Boca_Juniors_22-23_Blanco_IB9458_01_laydown.jpg",
        category: "suplentes"
    },
];


const ItemListContainer = () => {

    const [data, setData] = useState([]);

    const { categoriaId } = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(camisetas);
            }, 1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(camisetas => camisetas.category === categoriaId)));

        } else {
            getData.then(res => setData(res))
        }

    }, [categoriaId])



    return (
        <div>
            <ItemList data={data} />
        </div>
    )
}

export default ItemListContainer