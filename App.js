import React from 'react';
import { StackNavigator } from 'react-navigation'

import Historyy from './Containers/History'
import Home from './Containers/Home'
import MisionVision from './Containers/MisionVision'
import Perfil from './Containers/Perfil'
import Us from './Containers/Us'
import Productos from './Containers/Products'
import Cremas from './Containers/Cremas'
import Jugos from './Containers/Jugos'
import Mantequilla from './Containers/Mantequilla'
import Quesos from './Containers/Quesos'
import Sueros from './Containers/Sueros'

export default StackNavigator({
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
  Productos: {
    screen: Productos,
    navigationOptions: ({navigation}) => ({
      title: 'Productos'
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
    headerStyle: { backgroundColor: '#F57C00' },
    headerTitleStyle: { fontWeight: '300' }
  }
})
