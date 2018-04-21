import React from 'react';
import {
  	StyleSheet,
	Text,
	Image,
	View,
	ScrollView,
} from 'react-native';
import Metrics from '../Themes/Metrics'
import Images from '../Images'
import FullButton from '../Components/FullButton'

const Us = props => {
	return (
		<ScrollView style={styles.container}>
			<Image
				source={Images.todos}
				resizeMode='cover'
				style={styles.header}
			/>
			<Text style={styles.text}>
            En Hato Viejo estamos comprometidos con alimentar saludablemente a los consumidores,
            somos una organización inteligente que logra prosperidad colectiva de manera persistente, sostenible y sustentable.
			</Text>
			<FullButton
				text='Historia'
				onPress={()=>props.navigation.navigate('Historyy')}
			/>
			<FullButton
				text='Misión y Visión'
				onPress={()=>props.navigation.navigate('MisionVision')}
			/>
			<FullButton
				text='Perfil Corporativo'
				onPress={()=>props.navigation.navigate('Perfil')}
			/>			
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#a6cbe2',
		flex: 1
	},
	text: {
		textAlign: 'center',
		fontSize: 18,
		marginBottom: 10,
		paddingVertical: 20,
		paddingHorizontal: 10
	},
	btn: {
		backgroundColor: '#FFB74D'
	},
	header:{
		width: Metrics.screenWidth,
		height: Metrics.screenHeight * 0.33
	}
});
export default Us