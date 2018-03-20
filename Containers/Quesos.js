import React from 'react';
import {
	ScrollView,
} from 'react-native';
import Metrics from '../Themes/Metrics'
import Images from '../Images'
import Products from '../Components/Products'

const data = [
    {
        image: Images.quesoBlanco,
        title: 'Queso Blanco',
        text: "El queso blanco de Hato Viejo, es un alimento muy nutritivo con el podrás complacer el paladar de toda tu familia, conocido y amigo. Es una solución práctica que te permite realizar cualquier plato de comida."        ,
        params: {
            empaque: 'Bolsa Plástica Fermoencogible',
            almacenamiento: 'Mantener bajo refrigeración a una temperatura no mayor de 4°',
            registro: 'A-37-407.'
        }
    },
    {
        image: Images.quesoMozarella,
        title: 'Queso Mozarella',
        text: "El queso mozzarella de Hato Viejo, su textura es suave y muy bajo en sal, es utilizados en platos principales como: comida que se puede gratinar, pizza entre otras comidas.",
        params: {
            empaque: 'Envase de cartón',
            almacenamiento: 'Mantener bajo refrigeración a una temperatura no mayor de 4°',
            registro: 'A-36-595'
        }
    }
]
const Quesos = props => {
	return (
		<Products data={data} />
	);
}

export default Quesos