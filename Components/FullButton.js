import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './Styles/FullButton'

export default class FullButton extends React.Component {

  static defaultProps = {
    activeOpacity: 0.8,
    text: '',
    iconSize: 20,
    iconColor: '#fff',
    disabled: false
  }

  render () {
    const {
      onPress,
      activeOpacity,
      colors,
      text,
      textStyle,
      iconSize,
      iconColor,
      iconStyle,
      iconName,
      containerStyle,
      disabled,
      wrapperStyle
    } = this.props
    const Wrapper = colors ? LinearGradient : View
    const wrapperProps = colors ? { colors } : {}

    return (
      <View style={[styles.buttonContainer, containerStyle]}>
        <TouchableOpacity disabled={disabled} style={[styles.button, this.props.style]} onPress={onPress} activeOpacity={activeOpacity}>
          <Wrapper {...wrapperProps} style={[styles.wrapper, wrapperStyle]}>
            {iconName && (
              <View style={styles.iconWrapper}>
                <Icon name={iconName} size={iconSize} color={iconColor} style={[iconStyle]} />
              </View>
            )}
            <Text style={[styles.buttonText, textStyle]}>{text}</Text>
            {iconName && (
              <View style={styles.iconWrapper} />
            )}
          </Wrapper>
        </TouchableOpacity>
      </View>
    )
  }
}
