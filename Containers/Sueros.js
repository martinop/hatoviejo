import React from 'react';
import {
	ScrollView,
} from 'react-native';
import Metrics from '../Themes/Metrics'
import Images from '../Images'
import Products from '../Components/Products'

const data = [
    {
        image: Images.suero,
        title: 'Suero de Leche',
        text: "Nuestro delicioso suero Hato Viejo. Para tus arepas, panes y postres, es un ingrediente perfecto para darle más sabor a tus comidas, es de fuerte valor nutricional, ya que viene de proteínas lácteas.",
        params: {
            empaque: 'Botella plástica',
            almacenamiento: 'Mantener bajo refrigeración a una temperatura no mayor de 4°',
            registro: 'A-112-362'
        }
    },
]
const Sueros = props => {
	return (
		<Products data={data} />
	);
}

export default Sueros