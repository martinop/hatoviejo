import React from 'react';
import {
    StyleSheet,
	Text,
	Image,
    ScrollView,
    View
} from 'react-native';
import Metrics from '../Themes/Metrics'

import Images from '../Images'
const Perfil = props => {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.text}>
                Los departamentos que conforman nuestra empresa Uprocosa, tienen la misión de trabajar conjuntamente para lograr
                todos los objetivos propuestos de una manera colaborativa y ágil manteniendo el posicionamiento de nuestra marca 
                Hato viejo en el mercado de lácteos.
			</Text>
            <View style={styles.iconContainer}>
                <Image
                    source={Images.rrhh}
                    resizeMode='cover'
                    style={styles.icon}
                />
            </View>
			<Text style={styles.title}>Recursos Humanos</Text>
            <Text style={styles.text}>Selección, capacitación y supervisión del personal de Hato viejo.</Text>
            <View style={styles.iconContainer}>
                <Image
                    source={Images.ventas}
                    resizeMode='cover'
                    style={styles.icon}
                />
            </View>
			<Text style={styles.title}>Administracion</Text>
            <Text style={styles.text}>Planificar, organizar dirigir y controlar todos los procesos administrativos
                de nuestra empresa orientado a la gestión financiera, fiscal, compras, humana y tecnológica.</Text>
            <View style={styles.iconContainer}>
                <Image
                    source={Images.admin}
                    resizeMode='cover'
                    style={styles.icon}
                />
            </View>
			<Text style={styles.title}>Produccion</Text>
            <Text style={styles.text}>Procesos de manufactura, logística, abastecimiento, calidad y mantenimiento, garantizando
                la eficiencia y eficacia en la gestión de los costos operacionales.</Text>
            <View style={styles.iconContainer}>
                <Image
                    source={Images.mercadeo}
                    resizeMode='cover'
                    style={styles.icon}
                />
            </View>
			<Text style={styles.title}>Mercadeo</Text>
            <Text style={[styles.text, {marginBottom: 30}]}>Investigación de mercados, ejecución y planificación de estrategias relacionadas a las 4 P del mercado,
                márgenes de utilidad, imagen y posicionamiento de marcas. Lanzamiento de nuevos productos, para el desarrollo de 
                negocios con la finalidad de satisfacer a nuestros consumidores.</Text>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
        padding: 10,
	},
	text: {
		textAlign: 'center',
		fontSize: 18,
		marginBottom: 10
	},
	btn: {
		backgroundColor: '#FFB74D'
    },
    icon:{
        height: Metrics.screenHeight * 0.15,
        width: Metrics.screenHeight * 0.15,
    },
    title: {
		fontSize: 26,
		color: '#FFB74D',
		textAlign: 'center'
    },
    iconContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default Perfil