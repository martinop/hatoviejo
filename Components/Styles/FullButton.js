import { StyleSheet } from 'react-native'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'black',
    borderBottomColor: '#a6cbe2',
    borderBottomWidth: 8
    
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#b4ddfb'
  },
  buttonText: {
    flex: 1,
    paddingVertical: 12,
    textAlign: 'center',
    color: '#d58a36',
    backgroundColor: 'transparent',
    fontSize: 22,
    fontWeight: '500'
  },
  iconWrapper: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40
  }
})
