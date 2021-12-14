import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated'
import AddButton from '../components/AddButton'
import colors from '../constants/colors'

export function withAddButton<T>(Component: React.ComponentType<T>) {
  const WrappedComponent = (props: T) => {
    const [isAddButtonPressed, setIsAddButtonPressed] = useState<boolean>(false)
    const opacityVal = useSharedValue(1)

    const containerStyle = useAnimatedStyle(() => {
      return {
        opacity: withTiming(opacityVal.value),
      }
    })

    const onButtonPress = () => {
      opacityVal.value = isAddButtonPressed ? 1 : 0.3
      setIsAddButtonPressed(!isAddButtonPressed)
    }

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.animatedContainer, containerStyle]}>
          <Component isAddButtonPressed={isAddButtonPressed} {...props} />
        </Animated.View>
        <AddButton
          onButtonPress={onButtonPress}
          isAddButtonPressed={isAddButtonPressed}
        />
      </View>
    )
  }

  return WrappedComponent
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  animatedContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.backgroundColor,
  },
})
