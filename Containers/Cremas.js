import React from 'react';
import {
	ScrollView,
} from 'react-native';
import Metrics from '../Themes/Metrics'
import Images from '../Images'
import Products from '../Components/Products'

const data = [
    {
        image: Images.cremaLeche,
        title: 'Crema de leche',
        text: "La crema de leche, es una sustancia de consistencia grasa y tonalidad blanca o amarillenta que se encuentra de forma emulsionada en la leche recién ordeñada o cruda; es decir, en estado natural y que no ha pasado por ningún proceso artificial que elimina elementos grasos. \n\n Por otro lado, es un lácteo que posee una textura agradable al tacto de los consumidores. Este producto constituido principalmente por glóbulos de materia grasa que se encuentra flotando en la superficie de la leche cruda; por esto se dice que es una emulsión de grasa en agua. \n\n Esta capa se puede apreciar dejando cierta cantidad de leche cruda, sin homogeneizar ni descremar. Sin embargo, la crema de leche HATO VIEJO pasa por un proceso de estandarización considerándola como una crema saludable y baja en grasa en comparación al resto de las demás."
    },
    {
        image: Images.cremaLeche,
        title: 'Crema de especias',
        subtitle: 'Ajo, cebolla y perejil.',
        text: "La crema de leche, es una sustancia de consistencia grasa y tonalidad blanca o amarillenta que se encuentra de forma emulsionada en la leche recién ordeñada o cruda; es decir, en estado natural y que no ha pasado por ningún proceso artificial que elimina elementos grasos. \n Por otro lado, es un lácteo que posee una textura agradable al tacto de los consumidores. Este producto constituido principalmente por glóbulos de materia grasa que se encuentra flotando en la superficie de la leche cruda; por esto se dice que es una emulsión de grasa en agua. \n Esta capa se puede apreciar dejando cierta cantidad de leche cruda, sin homogeneizar ni descremar. Sin embargo, la crema de leche HATO VIEJO pasa por un proceso de estandarización considerándola como una crema saludable y baja en grasa en comparación al resto de las demás.",
        params: {
            empaque: 'Tina plástica',
            almacenamiento: 'Mantener bajo refrigeración a una temperatura no mayor de 4°.',
            registro: 'A-114-203'
        }
    }
]
const Cremas = props => {
	return (
		<Products data={data} />
	);
}

export default Cremas