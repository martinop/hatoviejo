import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
	Text,
	ScrollView,
	Image,
  View
} from 'react-native';
import BackgroundImageWithLogo from '../Components/BackgroundImageWithLogo'
import FullButton from '../Components/FullButton'
import Metrics from '../Themes/Metrics'
import Images from '../Images'
export default class Home extends Component {

  render() {
    return (
			<ScrollView contentContainerStyle={styles.flex}>
				<View style={styles.flex}>
					<Image
						source={Images.headerHome}
						style={styles.header}
					/>
				</View>
				<View>
					<FullButton
							text='Nosotros'
							onPress={()=>this.props.navigation.navigate('Us')}
						/>
						<FullButton
							text='Productos'
							onPress={()=>this.props.navigation.navigate('Productos')}
						/>
						<FullButton
							text='Recetas'
						/>
						<FullButton
							text='Otros'
						/>
				</View>
			</ScrollView>
    )
  }
}

const styles = StyleSheet.create({
	flex: {
		flex: 1
	},
	header: {
		flex: 1, 
		width: Metrics.screenWidth
	}
});