import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView,
} from 'react-native'
import Metrics from '../Themes/Metrics'
import FullButton from '../Components/FullButton'

import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'

import * as Actions from '../Actions'

let to;
class Product extends Component {
    state = {
        visible: false
    }

    addProduct({qtty, name}){
        this.props.addProduct({qtty, name })
        this.setState({ visible: true })
        to = setTimeout(() => {
            clearTimeout(to)
            this.setState({ visible: false})
        }, 3000)
    }
    
    componentWillUnmount(){
        clearTimeout(to)
    }

    render(){
        const { params } = this.props.navigation.state
        const text = params ? params.text : null
        const header = params ? params.header : null
    
        return (
            <ScrollView contentContainerStyle={styles.contentContainer} style={styles.container}>
                {header && <Image
                    source={header}
                    resizeMode='contain'
                    style={styles.header}
                />}
                <Text style={styles.text}>{text}</Text>
                {this.state.visible && (
                    <Text style={styles.indicator}>{`Se agrego (${1}) ${params.title} al carrito`}</Text>
                )}
                <FullButton
                    textStyle={{color: 'white'}}
                    containerStyle={styles.buttonContainer}
                    style={styles.button}
                    text='Añadir producto'
                    onPress={()=> this.addProduct({ qtty: 1, name: params.title })}
                />
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#a6cbe2',
        flex: 1,
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
	header:{
        marginTop: 20,
		width: Metrics.screenWidth,
		height: Metrics.screenHeight * 0.33
    },
    text: {
		fontSize: 20,
        textAlign: 'center',
        paddingTop: 10,
        paddingHorizontal: 20,
        marginBottom: 15
    },
    indicator: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '500',
        color: '#d58a36'
    },
    button: {
        backgroundColor: '#d58a36',
    },
    buttonContainer: {
        borderBottomWidth: 0,
        width: Metrics.screenWidth * 0.8,
        marginTop: 10,
        marginBottom: 20,
    }
})

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(null, mapDispatchToProps)(Product)