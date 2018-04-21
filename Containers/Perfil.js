import React, {Component} from 'react';
import {
    StyleSheet,
	Text,
	Image,
    ScrollView,
    View,
    TouchableOpacity,
    Modal
} from 'react-native';
import Metrics from '../Themes/Metrics'

import Images from '../Images'

const perfiles = [
    {image: Images.rrhh, text: 'Recursos Humanos'},
    {image: Images.contabilidad, text: 'Contabilidad'},
    {image: Images.mercadeo, text: 'Mercadeo'},
    {image: Images.produccion, text: 'Producción'},
    {image: Images.admin, text: 'Administracion'},
    {image: Images.ventas, text: 'Ventas'},
    {image: Images.sistemas, text: 'Sistemas'},
    {image: Images.diseno, text: 'Diseño Gráfico'}

]
class Perfil extends Component {
    state = {
        modal: false,
    }
    render(){
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {perfiles.map((perfil, index) =>
                    <TouchableOpacity
                        key={index}
                        activeOpacity={0.7}
                        style={styles.itemContainer}
                        onPress={() => this.setState({ modal: true })}
                    >
                        <View style={styles.item}>
                            <Image
                                resizeMode='contain'      
                                source={perfil.image}
                                style={styles.image}
                            />
                            <Text style={styles.text}>{perfil.text}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modal}
                    onRequestClose={() => this.setState({ modal: false })}
                    style={{backgroundColor:'rgba(255,255,255,0.5'}}
                >
                    <View style={{marginTop: 22}}>
                        <Text>Hello World!</Text>
                    </View>
                </Modal>
            </ScrollView>
        );
    }

}
const styles = StyleSheet.create({
	container: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: '#a6cbe2'
    },
    itemContainer: {
        width: '50%',
        padding: 10,
    },
    item: {
        backgroundColor: '#b4ddfb',
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 5
    },
    text: {
        fontWeight: '500',
        fontSize: 18,
        textAlign: 'center',
        color: '#d58a36'
    },
    image: {
        width: '100%',
        height: 100
    }
});
export default Perfil