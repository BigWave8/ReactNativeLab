import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import colors, { getColorByBackgroundColor } from '../constants/colors'
import { RootStackParamList } from '../types/types'
import { renderTaskWord } from '../constants/renderTaskCount'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export interface IProps {
  id: number
  name: string
  taskCount: number
  color: string
  isAddButtonPressed: boolean
  navigateOnPress: (categoryId: number) => void
}

const List = ({
  id,
  name,
  taskCount,
  color,
  isAddButtonPressed,
  navigateOnPress,
}: IProps) => {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={isAddButtonPressed ? undefined : () => navigateOnPress(id)}
    >
      <Text style={[styles.name, { color: getColorByBackgroundColor(color) }]}>
        {name}
      </Text>
      <Text
        style={[styles.taskCount, { color: getColorByBackgroundColor(color) }]}
      >
        {taskCount + ' ' + renderTaskWord(taskCount)}
      </Text>
    </TouchableOpacity>
  )
}

export default List

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    marginVertical: 4,
    borderRadius: 10,
    padding: 12,
  },
  name: {
    fontSize: 16,
  },
  taskCount: {
    fontSize: 12,
    opacity: 0.5,
    color: colors.textColor,
  },
})
