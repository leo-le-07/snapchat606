import React from 'react'
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  AsyncStorage,
} from 'react-native'

import firebaseSvc from '../FirebaseSvc'
import { OFFSET } from '../utils/constants'

const IntroductionScreen = (props) => {
  const onEnterRoom = () => {
    props.navigation.navigate('Chat')
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="Vào phòng" onPress={onEnterRoom} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

IntroductionScreen.navigationOptions = ({ navigation }) => ({
  title: "Chào mừng đến phòng 606"
})

export default IntroductionScreen
