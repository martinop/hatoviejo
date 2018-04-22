import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    TextInput
} from 'react-native'
import { connect } from 'react-redux'
import Metrics from '../Themes/Metrics'
import FullButton from '../Components/FullButton'
import { isEmpty } from 'lodash'

class Cart extends Component {
    state = {
        name: '',
        location: '',
        phone: '',
        email: '',
        message: ''
    }
    render(){
        if(!isEmpty(this.props.products))
            return (
                <ScrollView style={styles.container}>
                    <Text style={styles.title}>Contenido</Text>
                    <Text>{JSON.stringify(this.props.products)}</Text>
                    <Text style={styles.label}>Nombre de empresa o negocio</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({ name: text})}
                    />
                    <Text style={styles.label}>Ubicación</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({ location: text})}
                    />
                    <Text style={styles.label}>Número teléfonico</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({ phone: text})}
                    />
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({ email: text})}
                    />
                    <Text style={styles.label}>Mensaje</Text>
                    <TextInput
                        style={styles.input}
                        numberOfLines={4}
                        onChangeText={(text) => this.setState({ message: text})}
                        multiline
                    />
                    <View style={styles.btnContainer}>
                        <FullButton
                            textStyle={{color: 'white'}}
                            containerStyle={styles.buttonContainer}
                            style={styles.button}
                            text='Enviar solicitud'
                        />
                    </View>
                </ScrollView>
            )
        return (
            <View style={styles.containerEmpty}>
                <Text style={styles.empty}>Aun no has agregado ningun producto al carrito</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#a6cbe2',
        flex: 1,
    },
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerEmpty: {
        backgroundColor: '#a6cbe2',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    empty: {
        fontSize: 32,
        fontWeight: '500',
        textAlign: 'center',
        color: '#d58a36',
    },
    input: {
        backgroundColor: 'white', 
        width: Metrics.screenWidth * 0.87, 
        marginLeft: Metrics.screenWidth * 0.06
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        padding: 20,
        color: '#d58a36',
        textAlign: 'left'
    },
    label: {
        fontSize: 18,
        fontWeight: '500',
        padding: 20,
        color: '#d58a36',
        textAlign: 'left'
    },
    button: {
        backgroundColor: '#d58a36',
    },
    buttonContainer: {
        borderBottomWidth: 0,
        width: Metrics.screenWidth * 0.8,
        marginTop: 20,
        marginBottom: 20,
    }
})

function mapStateToProps(state, props) {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Cart)