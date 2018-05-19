import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
    TextInput,
    Modal,
    TouchableOpacity
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
        message: '',
        modal: false
    }

    sendEmail(){
        const { name, location, phone, email: userEmail, message } = this.state
        const products = Object.keys(this.props.products).map(product => {
            return `${product}: ${this.props.products[product].qtty}`
        })
        fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer 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',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "personalizations": [
                    {
                    "to": [
                        {
                        "email": "d.graficohv@gmail.com"
                        }
                    ],
                    "subject": `${name} ha realizado un pedido`
                    }
                ],
                "from": {
                    "email": userEmail
                },
                "content": [
                    {
                    "type": "text/html",
                    "value": `
                        <h3>${name} solicita: </h3>
                        <ul>
                            ${products.map(product => `<li>${product}</li>`).join("")}
                        </ul>
                        <h3>Telefono: ${phone}</h3>
                        <h3>Email: ${userEmail}</h3>
                        <h3>Ubicación: ${location}</h3>
                        <h3>Mensaje: </h3>
                        <p>${message}</p>
                    `
                    }
                ]
            })
        })
        .then(() => {
            this.setState({ modal: true, response: 'Su solicitud ha sido procesada exitosamente. \n\n En breve le contactará nuestro equipo de ventas para formalizar el pedido.'})
        })
        .catch((error) => {
                this.setState({ modal: true, response: 'Error enviando tu solicitud, intentalo mas tarde.'})
        })
    }
    render(){
        if(!isEmpty(this.props.products))
            return (
                <ScrollView style={styles.container}>
                    <Text style={styles.title}>Contenido</Text>
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
                            onPress={() => this.sendEmail()}
                        />
                    </View>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={this.state.modal}
                        onRequestClose={() => this.setState({ modal: false, response: null })}
                    >
                        <TouchableOpacity 
                            style={styles.modalContainer}
                            onPress={() => this.setState({ modal: false, response: null})}
                        >
                            <View style={styles.modal}>
                                <Text style={[styles.text, {marginTop: 10, marginBottom: 20}]}>
                                    {this.state.response}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </Modal>
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
    modalContainer: {
        backgroundColor: 'rgba(52, 52, 52, 0.65)',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        width: Metrics.screenWidth * 0.8,
        backgroundColor: '#b4ddfb',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30
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
    text: {
        fontWeight: '500',
        fontSize: 16,
        textAlign: 'center',
        color: '#d58a36',
        paddingHorizontal: 20
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