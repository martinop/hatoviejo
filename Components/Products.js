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

const Products = props => {
	return (
		<ScrollView style={styles.container}>
			{props.data.map((producto, index) => {
				return (
					<View key={index} style={{paddingBottom: 25}}>
						<Text style={styles.title}>{producto.title}</Text>
						<Image
							source={producto.image}
							resizeMode='contain'
							style={styles.image}
						/>
						{producto.subtitle && 
							<Text style={styles.subtitle}>{producto.subtitle}</Text>
						}
						<Text style={styles.text}>{producto.text}</Text>
						{producto.params && 
							<View style={{marginTop: 20}}>
								<Text style={Styles.text}>Tipo de empaque: {producto.params.empaque}</Text>
								<Text style={Styles.text}>Almacenamiento: {producto.params.almacenamiento}</Text>
								<Text style={Styles.text}>Registro Sanitario: {producto.params.registro}</Text>

							</View>
						}
					</View>
				)
			})}
            
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		padding: 10,
		paddingBottom: 30
    },
    title: {
		fontSize: 26,
		color: '#FFB74D',
		textAlign: 'center'
	},
	subtitle: {
		fontSize: 24,
		color: '#FFB74D',
		textAlign: 'left'	
	},
	text: {
		textAlign: 'left',
		fontSize: 18,
		marginBottom: 10
	},
	btn: {
		backgroundColor: '#FFB74D'
    },
    image:{
		width: Metrics.screenWidth,
		height: Metrics.screenHeight * 0.25
	}
});
export default Products