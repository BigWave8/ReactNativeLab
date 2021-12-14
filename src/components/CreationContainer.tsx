import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Task from "../../assets/Task.svg";
import Lists from "../../assets/Lists.svg";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import colors from "../constants/colors";

const CreationContainer = () => {
  const width = useSharedValue(100);
  const height = useSharedValue(80);

  useEffect(() => {
    width.value = withSpring(200);
    height.value = withSpring(120);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: height.value,
    };
  });

  return (
    <Animated.View style={[styles.creationContainer, animatedStyle]}>
      <TouchableOpacity style={[styles.creationButton, styles.bottomLine]}>
        <Task />
        <Text style={styles.text}>Task</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.creationButton}>
        <Lists />
        <Text style={styles.text}>List</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default CreationContainer;

const styles = StyleSheet.create({
  creationContainer: {
    justifyContent: "center",
    height: 0,
    width: 0,
    borderRadius: 16,
    backgroundColor: "white",
    position: "absolute",
    right: 16,
    bottom: 112,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
  },
  creationButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  bottomLine: {
    borderBottomColor: colors.iconsBorderColor,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
    color: colors.iconsColor,
    marginLeft: 12,
  },
});
