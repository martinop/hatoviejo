import React from 'react';
import {
 	StyleSheet,
	Text,
	ScrollView,
	FlatList,
	View
} from 'react-native';
import Metrics from '../Themes/Metrics'
import maracaibo from '../maracaibo'
import sur from '../sur'
const data = [
	{location: 'Maracaibo', shops: maracaibo},
	{location: 'Zona Sur', shops: sur},
]
const Tiendas = () => {
	return (
		<ScrollView style={styles.container}>
		
			{data.map((e, index) => (
				<View key={index}>
					<Text style={styles.title}>{e.location}</Text>
					<FlatList
						data={e.shops}
						keyExtractor={(item, index) => index.toString()}
						renderItem={({ item: shop }) => (
							<View>
								<Text style={styles.text}>{shop.nombre}</Text>
								{shop.contacto.trim() !== '' && shop.telefono.trim() !== '' &&
									<Text style={styles.miniText}>{shop.contacto} - {shop.telefono}</Text>
								}
								{shop.direccion.trim() !== '' && 
									<Text style={styles.miniText}>{shop.direccion}</Text>
								}
								<View style={styles.divider} />
							</View>
						)}
					/>
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
		marginBottom: 5,
		fontWeight: 'bold'
	},
	miniText: {
		fontSize: 14
	},
	divider: {
		height: 3,
		width: Metrics.screenWidth,
		backgroundColor: '#d58a36',
		marginVertical: 7
	}
});
export default Tiendas