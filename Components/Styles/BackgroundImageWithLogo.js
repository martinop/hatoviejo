import { StyleSheet } from 'react-native'
import Metrics from '../../Themes/Metrics'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0)'
  },
  content: {
    marginTop: Metrics.baseMargin,
    flex: 1
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  screenBackground: {
    flex: 1
  },
  coverImage: {
    flex: 1,
    height: null,
    width: null
  },
  logoOuterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  logoButton: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  logoInnerContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%'
  }
})
