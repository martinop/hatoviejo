import React from 'react';
import {
	ScrollView,
} from 'react-native';
import Metrics from '../Themes/Metrics'
import Images from '../Images'
import Products from '../Components/Products'

const data = [
    {
        image: Images.mantequilla,
        title: 'Mantequilla Hato Viejo',
        text: "La mantequilla hato viejo, es muy versátil y cremosa, ya que puede prepararse en algunas comidas como: en los espaguetis, en un almuerzo nutritivo y ligero hasta en postres. Se funde fácilmente, aporta principalmente grasa, las grasas son necesarias para la adsorción de vitaminas A, D, E, K y son fuente de energía en el organismo.",
        params: {
            empaque: 'Tina plástica',
            almacenamiento: 'Mantener bajo refrigeración a una temperatura no mayor de 4°',
            registro: 'A-36-598.'
        }
    }
]
const Mantequilla = props => {
	return (
		<Products data={data} />
	);
}

export default Mantequilla