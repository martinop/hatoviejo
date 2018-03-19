import React from 'react';
import {
  Platform,
  StyleSheet,
	Text,
	Image,
	ScrollView,
  View
} from 'react-native';
import Metrics from '../Themes/Metrics'
import Images from '../Images'
import FullButton from '../Components/FullButton'

const Productos = props => {
	return (
		<ScrollView style={styles.container}>
			<Text style={styles.text}>Conoce la variedad de productos que tenemos para ti!</Text>
			<FullButton
				text='Cremas'
				style={styles.btn}
				onPress={()=>props.navigation.navigate('Cremas')}
				containerStyle={{marginBottom: 15}}
			/>
			<FullButton
				text='Jugos'
				style={styles.btn}
				onPress={()=>props.navigation.navigate('Jugos')}
				containerStyle={{marginBottom: 15}}
			/>
			<FullButton
				text='Mantequilla'
				style={styles.btn}
				onPress={()=>props.navigation.navigate('Mantequilla')}
				containerStyle={{marginBottom: 15}}
			/>
			<FullButton
				text='Quesos'
				style={styles.btn}
				onPress={()=>props.navigation.navigate('Quesos')}
				containerStyle={{marginBottom: 15}}
			/>
            <FullButton
				text='Sueros'
				style={styles.btn}
				onPress={()=>props.navigation.navigate('Sueros')}
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
	}
});
export default Productos