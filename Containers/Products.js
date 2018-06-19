import React, {Component} from 'react';
import {
    StyleSheet,
	Text,
	Image,
    ScrollView,
    View,
    TouchableOpacity,
    Linking,
    Modal
} from 'react-native';
import Metrics from '../Themes/Metrics'

import Images from '../Images'

import data from '../products'
const Productos = (props) => {
    return (
		<ScrollView style={styles.main} contentContainerStyle={styles.container}>
			{data.map((perfil, index) =>
				<TouchableOpacity
					key={index}
                    activeOpacity={0.7}
                    onPress={() => props.navigation.navigate('Product', {image: perfil.image, title: perfil.title, text: perfil.text, header: perfil.header})}
					style={styles.itemContainer}
				>
					<View style={styles.item}>
						<Image
							resizeMode='contain'      
							source={perfil.image}
							style={styles.image}
						/>
						<Text style={styles.text}>{perfil.title}</Text>
					</View>
				</TouchableOpacity>
			)}

		</ScrollView>
    );
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#a6cbe2'
    },
	container: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    itemContainer: {
        width: '50%',
        padding: 10,
    },
    mediaContainer: {
        width: '100%',
        paddingVertical: 5
    },
    item: {
        backgroundColor: '#b4ddfb',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 5,
        justifyContent: 'flex-start'
    },
    text: {
        fontWeight: '500',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        color: '#d58a36'
    },
    image: {
        width: '100%',
        height: 100
    }
});
export default Productos