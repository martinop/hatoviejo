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

const Pedidos = (props) => {
    return (
        <ScrollView style={styles.main} contentContainerStyle={styles.container}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.itemContainer}
                onPress={()=> props.navigation.navigate('Cart')}
            >
                <View style={styles.item}>
                    <Image
                        resizeMode='contain'      
                        source={Images.carrito}
                        style={styles.image}
                    />
                    <Text style={styles.text}>Carrito de compras</Text>
                </View>
            </TouchableOpacity>
            {/*<TouchableOpacity
                activeOpacity={0.7}
                style={styles.itemContainer}
            >
                <View style={styles.item}>
                    <Image
                        resizeMode='contain'      
                        source={Images.contacto}
                        style={styles.image}
                    />
                    <Text style={styles.text}>Contacto</Text>
                </View>
            </TouchableOpacity>
            */}
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.itemContainer}
                onPress={()=> props.navigation.navigate('Tiendas')}
            >
                <View style={styles.item}>
                    <Image
                        resizeMode='contain'      
                        source={Images.tiendas}
                        style={styles.image}
                    />
                    <Text style={styles.text}>Tiendas Afiliadas</Text>
                </View>
            </TouchableOpacity>
            <View
                activeOpacity={0.7}
                style={styles.itemContainer}
            >
                <View style={styles.item}>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.mediaContainer}
                        onPress={()=> Linking.openURL('https://www.instagram.com/phatoviejo/')}
                    >
                        <Image
                            resizeMode='contain'      
                            source={Images.instagram}
                            style={styles.media}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.mediaContainer}
                        onPress={()=> Linking.openURL('https://www.facebook.com/ProductosHatoViejo/')}
                    >
                        <Image
                            resizeMode='contain'      
                            source={Images.facebook}
                            style={styles.media}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.mediaContainer}
                        onPress={()=> Linking.openURL('https://twitter.com/PHatoViejo')}
                    >
                        <Image
                            resizeMode='contain'      
                            source={Images.twitter}
                            style={styles.media}
                        />
                    </TouchableOpacity>
                    <Text style={styles.text}>Redes Sociales</Text>
                </View>
            </View>
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
        justifyContent: 'flex-end'
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
    },
    media: {
        width: '100%',
        height: 25
    }
});
export default Pedidos