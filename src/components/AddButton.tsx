import React from "react";
import { StyleSheet, View } from "react-native";
import {
  TapGestureHandler,
  TapGestureHandlerGestureEvent,
} from "react-native-gesture-handler";
import Animated, {
  interpolateColor,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Plus from "../../assets/Plus.svg";
import colors from "../constants/colors";
import CreationContainer from "./CreationContainer";

interface IProps {
  onButtonPress: () => void;
  isAddButtonPressed: boolean;
}

const AddButton = ({ onButtonPress, isAddButtonPressed }: IProps) => {
  const progress = useDerivedValue(() => {
    return isAddButtonPressed ? withTiming(1) : withTiming(0);
  }, [isAddButtonPressed]);
  const rotation = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [colors.backgroundColor, colors.iconsColor]
    );

    return {
      backgroundColor: backgroundColor,
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  const gestureHandler =
    useAnimatedGestureHandler<TapGestureHandlerGestureEvent>({
      onActive: () => {
        rotation.value = isAddButtonPressed ? withSpring(0) : withSpring(225);
      },
    });

  return (
    <View>
      {isAddButtonPressed && <CreationContainer />}
      <TapGestureHandler
        onGestureEvent={gestureHandler}
        onActivated={onButtonPress}
      >
        <Animated.View style={[styles.container, animatedStyle]}>
          <Plus
            color={isAddButtonPressed ? colors.backgroundColor : colors.iconsColor}
          />
        </Animated.View>
      </TapGestureHandler>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 16,
    bottom: 30,
    width: 60,
    height: 60,
    borderRadius: 60,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    backgroundColor: colors.backgroundColor,
  },
});
