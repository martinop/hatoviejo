import React from 'react';
import {
 	StyleSheet,
	Text,
	ScrollView,
} from 'react-native';

const MisionVision = props => {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.title}>MISIÓN</Text>
			<Text style={styles.text}>
				Ser una empresa líder, reconocida y sólida, en la fabricación, distribución y
				comercialización de productos lácteos tales como: Leche, Mantequilla, Queso Mozzarella,
				Queso Pasteurizado, jugos y más; con un alto grado nutricional y un exquisito sabor criollo, 
				ofreciendo un producto al mercado occidental de nuestro país Venezuela de calidad y aun precio justo.
			</Text>
			<Text style={styles.title}>VISIÓN</Text>
			<Text style={styles.text}>
				Ser una empresa líder en la fabricación y distribución de productos lácteos y bebidas con
				reconocimiento en el mercado nacional, apoyado en nuevas inversiones, para mejorar nuestra
				capacidad productiva, manteniendo un crecimiento económico sostenido, incursionando en el mercado
				con nuevos productos, con la calidad que nos caracteriza.
			</Text>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: '#a6cbe2',
	},
	title: {
		fontSize: 42,
		color: '#d58a36',
		fontWeight: '500',
		textAlign: 'center'
	},
	text: {
		textAlign: 'center',
		fontSize: 18,
		marginBottom: 10
	}
});
export default MisionVision