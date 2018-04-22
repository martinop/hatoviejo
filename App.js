import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import store from './store';
import PropTypes from 'prop-types'
import { StackNavigator } from 'react-navigation'
import Historyy from './Containers/History'
import Home from './Containers/Home'
import MisionVision from './Containers/MisionVision'
import Perfil from './Containers/Perfil'
import Us from './Containers/Us'
import Productos from './Containers/Products'
import Product from './Containers/Product'
import Pedidos from './Containers/Pedidos'
import Tiendas from './Containers/Tiendas'
import Cart from './Containers/Cart'

import Cremas from './Containers/Cremas'
import Jugos from './Containers/Jugos'
import Mantequilla from './Containers/Mantequilla'
import Quesos from './Containers/Quesos'
import Sueros from './Containers/Sueros'


const AppNavigator = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  Us: {
    screen: Us,
    navigationOptions: ({navigation}) => ({
      title: 'Nosotros'
    }) 
  },
  Historyy: {
    screen: Historyy,
    navigationOptions: ({navigation}) => ({
      title: 'Historia'
    })
  },
  MisionVision: {
    screen: MisionVision,
    navigationOptions: ({navigation}) => ({
      title: 'Mision y Vision'
    })
  },
  Perfil: {
    screen: Perfil,
    navigationOptions: ({navigation}) => ({
      title: 'Perfil Corporativo'
    })
  },
  Pedidos: {
    screen: Pedidos,
    navigationOptions: ({navigation}) => ({
      title: 'Pedidos'
    })
  },
  Cart: {
    screen: Cart,
    navigationOptions: ({navigation}) => ({
      title: 'Carrito de compras'
    })
  },
  Tiendas: {
    screen: Tiendas,
    navigationOptions: ({navigation}) => ({
      title: 'Tiendas Afiliadas'
    })
  },
  Productos: {
    screen: Productos,
    navigationOptions: ({navigation}) => ({
      title: 'Productos'
    })
  },
  Product: {
    screen: Product,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.title
    })
  },
  Cremas: {
    screen: Cremas,
    navigationOptions: ({navigation}) => ({
      title: 'Cremas'
    })
  },
  Jugos: {
    screen: Jugos,
    navigationOptions: ({navigation}) => ({
      title: 'Jugos'
    })
  },
  Mantequilla: {
    screen: Mantequilla,
    navigationOptions: ({navigation}) => ({
      title: 'Mantequilla'
    })
  },
  Quesos: {
    screen: Quesos,
    navigationOptions: ({navigation}) => ({
      title: 'Quesos'
    })
  },
  Sueros: {
    screen: Sueros,
    navigationOptions: ({navigation}) => ({
      title: 'Sueros'
    })
  }
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: { 
      backgroundColor: '#b4ddfb', 
      borderBottomColor: '#a6cbe2', 
      borderBottomWidth: 8,
      height: 70
    },
    headerTitleStyle: { 
      fontWeight: '500', 
      color: '#d58a36',
    }
  }
})

export default () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
)
  