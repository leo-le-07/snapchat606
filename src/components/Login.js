import React, { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'

import firebaseSvc from '../FirebaseSvc'

const Login = (props) => {
  const [email, setEmail] = useState('leo@gmail.com')
  const [password, setPassword] = useState('llllll')

  const onPressLogin = () => {
    const user = {
      email,
      password
    }
    firebaseSvc.login(user, loginSuccess, loginFailed)
  }

  const loginSuccess = () => {
    props.navigation.navigate('Chat', { email })
  }

  const loginFailed = () => {
    alert('Login failure, please try again')
  }

  return (
    <View>
      <Text>Login screen</Text>
      <TextInput
        value={email}
        style={styles.emailInput}
        onChangeText={value => setEmail(value)}
      />
      <TextInput
        value={password}
        style={styles.emailInput}
        onChangeText={value => setPassword(value)}
        secureTextEntry
      />
      <Button
        title="Navigate to Chat"
        onPress={onPressLogin}
      />
    </View>
  )
}

const offset = 24
const styles = StyleSheet.create({
  emailInput: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
})

export default Login
