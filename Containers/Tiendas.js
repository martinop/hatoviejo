import React from 'react';
import {
 	StyleSheet,
	Text,
	ScrollView,
	View
} from 'react-native';

const data = [
	{location: 'Zona Sur', shops: ['Supermercado', 'Supermercado', 'Supermercado', 'Supermercado', 'Supermercado']},
	{location: 'Zona Norte', shops: ['Supermercado', 'Supermercado', 'Supermercado', 'Supermercado', 'Supermercado']},
	{location: 'San Francisco', shops: ['Supermercado', 'Supermercado', 'Supermercado', 'Supermercado', 'Supermercado']},
	{location: 'Costa Oriental', shops: ['Supermercado', 'Supermercado', 'Supermercado', 'Supermercado', 'Supermercado']}
]
const Tiendas = () => {
	return (
		<ScrollView style={styles.container}>
			{data.map((e, index) => (
				<View key={index}>
					<Text style={styles.title}>{e.location}</Text>
					{e.shops.map((shop, i) => 
						<Text key={i} style={styles.text}>- {shop}</Text>
					)}
				</View>
			))}			
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		backgroundColor: '#a6cbe2',
	},
	title: {
		fontSize: 36,
		color: '#d58a36',
		fontWeight: '500',
	},
	text: {
		fontSize: 18,
		marginBottom: 5
	}
});
export default Tiendas