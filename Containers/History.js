import React from 'react';
import {
  	StyleSheet,
	Text,
	ScrollView,
	Image,
	View
} from 'react-native';
import Images from '../Images'
import Metrics from '../Themes/Metrics'

const Historyy = props => {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.header}>
				<Image
					source={Images.history}
					resize="contain"
					style={styles.image}
				/>
			</View>
			<Text style={styles.text}>
				Nuestra empresa, nació el 13 de septiembre del año 1982 ya a tres décadas de presencia en el mercado
				occidental. Nos iniciamos como una pequeña empresa familiar en las mismas áreas que hoy ocupamos,
				con trabajo y mucha dedicación crecemos hasta convertirnos en una unidad empresarial del tipo: 
				Pequeña industria pasando de la producción de quesos de fabricación artesanal a líneas actuales de quesos
				y otros derivados lácteos de fabricación industrial.
			</Text>
			<Text style={styles.text}>
				En nuestros inicios la cobertura geográfica del mercado era específicamente local,
				atendiendo el segmento geográfico de la ciudad de Maracaibo, principalmente. 
			</Text>
			<Text style={[styles.text,{paddingBottom: 30}]}>
				Hoy somos una marca registrada a nivel nacional, que atiende el segmento geográfico del occidente del país con
				presencia en entidades federales: Zulia, Falcón, Trujillo, Mérida y Barquisimeto incursionando además en 
				los mercados del centro del país: Valencia y Maracay. La historia en productos de la empresa pasa de la 
				fabricación básica de quesos hasta una mayor transformación de derivados de la leche en crema de leche,
				crema de especies, sueros y mantequilla como también productos de consumo frecuentes como los juegos. 
				Teniendo como posicionamiento deseado la preferencia que poseen los consumidores con relación a nuestra
				marca “HATO VIEJO” y de esta manera satisfacer las necesidades de nuestro mercado objetivo.
			</Text>
			
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: '#a6cbe2',
 	},
	text: {
		textAlign: 'center',
		fontSize: 18,
		marginBottom: 10
	},
	header: {
		flex: 1, 
		alignItems: 'center'
	},
	image: {
		width: Metrics.screenWidth, 
		height: Metrics.screenWidth / 1.5
	}
});
export default Historyy