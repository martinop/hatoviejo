import React from 'react';
import {
	ScrollView,
} from 'react-native';
import Metrics from '../Themes/Metrics'
import Images from '../Images'
import Products from '../Components/Products'

const data = [
    {
        image: Images.jugoNaranja,
        title: 'Jugo de naranja',
        text: "Los jugos y néctares son bebidas saludables que posee un valor vitamínico, las cuales son fuentes de energías para el desarrollo de sus actividades diarias. Los jugos de hato viejo, ofrecen una variedad de sabores provenientes de las mejores pulpas del mercado donde, la manzana, la pera y el durazno son exportadas de Chile y Argentina mientras que la naranja es totalmente criollas “Venezuela”.",
        params: {
            empaque: 'Envase de cartón',
            almacenamiento: 'Mantener bajo refrigeración a una temperatura no mayor de 4°',
            registro: 'A-114.016'
        }
    },
    {
        image: Images.nectarPera,
        title: 'Nectar de pera',
        text: "Los jugos y néctares son bebidas saludables que posee un valor vitamínico, las cuales son fuentes de energías para el desarrollo de sus actividades diarias. Los jugos de hato viejo, ofrecen una variedad de sabores provenientes de las mejores pulpas del mercado donde, la manzana, la pera y el durazno son exportadas de Chile y Argentina mientras que la naranja es totalmente criollas “Venezuela”.",
        params: {
            empaque: 'Envase de cartón',
            almacenamiento: 'Mantener bajo refrigeración a una temperatura no mayor de 4°',
            registro: 'A-114.017'
        }
    },
    {
        image: Images.nectarDurazno,
        title: 'Nectar de durazno',
        text: "Los jugos y néctares son bebidas saludables que posee un valor vitamínico, las cuales son fuentes de energías para el desarrollo de sus actividades diarias. Los jugos de hato viejo, ofrecen una variedad de sabores provenientes de las mejores pulpas del mercado donde, la manzana, la pera y el durazno son exportadas de Chile y Argentina mientras que la naranja es totalmente criollas “Venezuela”.",
        params: {
            empaque: 'Envase de cartón',
            almacenamiento: 'Mantener bajo refrigeración a una temperatura no mayor de 4°',
            registro: 'A-114.018'
        }
    },
    {
        image: Images.nectarManzana,
        title: 'Nectar de manzana',
        text: "Los jugos y néctares son bebidas saludables que posee un valor vitamínico, las cuales son fuentes de energías para el desarrollo de sus actividades diarias. Los jugos de hato viejo, ofrecen una variedad de sabores provenientes de las mejores pulpas del mercado donde, la manzana, la pera y el durazno son exportadas de Chile y Argentina mientras que la naranja es totalmente criollas “Venezuela”.",
        params: {
            empaque: 'Envase de cartón',
            almacenamiento: 'Mantener bajo refrigeración a una temperatura no mayor de 4°',
            registro: 'A-114.019'
        }
    }
]
const Jugos = props => {
	return (
		<Products data={data} />
	);
}

export default Jugos