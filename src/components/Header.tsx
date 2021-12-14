import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { SvgProps } from 'react-native-svg'
import { getColorByBackgroundColor } from '../constants/colors'
import { renderTaskWord } from '../constants/renderTaskCount'

export interface IProps {
  text: string
  taskCount?: number
  backgroundColor: string
  RightIcon: React.FC<SvgProps>
}

const Header = ({ taskCount, backgroundColor, text, RightIcon }: IProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.topPart}>
        <Text
          style={[
            styles.text,
            { color: getColorByBackgroundColor(backgroundColor) },
          ]}
        >
          {text}
        </Text>
        <TouchableOpacity>
          <RightIcon
            color={getColorByBackgroundColor(backgroundColor)}
            height={24}
            width={24}
            style={styles.rightIcon}
          />
        </TouchableOpacity>
      </View>
      {taskCount && (
        <Text
          style={[
            styles.countText,
            { color: getColorByBackgroundColorr(backgroundColor) },
          ]}
        >
          {taskCount + ' ' + renderTaskWord(taskCount)}
        </Text>
      )}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginBottom: 20,
    paddingLeft: '12%',
  },
  topPart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  countText: {
    fontSize: 14,
    opacity: 0.5,
  },
  rightIcon: {
    marginRight: 16,
  },
})
