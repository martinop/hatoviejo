import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
	Text,
	ScrollView,
  View
} from 'react-native';
import BackgroundImageWithLogo from '../Components/BackgroundImageWithLogo'
import FullButton from '../Components/FullButton'
import Metrics from '../Themes/Metrics'
import Images from '../Images'
export default class Home extends Component {

  render() {
    const verticalPositionAnimation = {
      toValue: -350,
      duration: 45000
    }
    return (
      <BackgroundImageWithLogo
        contentContainerStyle={styles.content}
        backgroundImage={Images.background}
        contentHeight={200}
        logoActiveOpacity={1}
        verticalPositionAnimation={verticalPositionAnimation}
      >
				<View>
					<FullButton
						text='Nosotros'
						style={styles.comunBtn}
						onPress={()=>this.props.navigation.navigate('Us')}
						containerStyle={{marginBottom: 15}}
					/>
					<FullButton
						text='Productos'
						style={styles.comunBtn}
						containerStyle={{marginBottom: 15}}
					/>
					<FullButton
						text='Recetas'
						style={styles.comunBtn}
						containerStyle={{marginBottom: 15}}
					/>
					<FullButton
						style={styles.loginBtn}
						containerStyle={{marginBottom: 15}}
						text='Otros'
					/>
				</View>
      </BackgroundImageWithLogo>
    )
  }
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		width: Metrics.screenWidth * 0.9,
    marginLeft: Metrics.screenWidth * (1 - 0.9) / 2,
	},
	comunBtn: {
		backgroundColor: '#e69847'
	},
	loginBtn: {
		backgroundColor: '#855a35'
	}
});