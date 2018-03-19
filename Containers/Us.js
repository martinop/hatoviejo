import React from 'react';
import {
  	StyleSheet,
	Text,
	Image,
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
				style={styles.btn}
				onPress={()=>props.navigation.navigate('Historyy')}
				containerStyle={{marginBottom: 15}}
			/>
			<FullButton
				text='Misión y Visión'
				style={styles.btn}
				onPress={()=>props.navigation.navigate('MisionVision')}
				containerStyle={{marginBottom: 15}}
			/>
			<FullButton
				text='Perfil Corporativo'
				style={styles.btn}
				onPress={()=>props.navigation.navigate('Perfil')}
				containerStyle={{marginBottom: 15}}
			/>
			
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		padding: 10,
		paddingBottom: 30
	},
	text: {
		textAlign: 'center',
		fontSize: 18,
		marginBottom: 10
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