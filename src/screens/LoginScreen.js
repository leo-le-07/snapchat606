import React, { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'

import firebaseSvc from '../FirebaseSvc'

const LoginScreen = (props) => {
  const [name, setName] = useState('Mr Leo')
  const [email, setEmail] = useState('leo@gmail.com')
  const [password, setPassword] = useState('llllll')

  const onPressLogin = () => {
    const user = {
      email,
      password
    }
    firebaseSvc.login(user, loginSuccess, loginFailed)
  }

  const loginSuccess = async () => {
    const currentUser = firebaseSvc.getCurrentUser()
    await currentUser.updateProfile({
      displayName: name,
    })

    props.navigation.navigate('Chat', {
      email,
      name,
    })
  }

  const loginFailed = () => {
    alert('Login failure, please try again')
  }

  return (
    <View>
      <Text style={styles.title}>Tên</Text>
      <TextInput
        value={name}
        style={styles.input}
        onChangeText={value => setName(value)}
      />
      <Text style={styles.title}>Email</Text>
      <TextInput
        value={email}
        style={styles.input}
        onChangeText={value => setEmail(value)}
      />
      <Text style={styles.title}>Mật khẩu</Text>
      <TextInput
        value={password}
        style={styles.input}
        onChangeText={value => setPassword(value)}
        secureTextEntry
      />
      <View style={styles.loginButton}>
        <Button
          title="Đăng nhập"
          onPress={onPressLogin}
        />
      </View>
    </View>
  )
}

const offset = 24
const styles = StyleSheet.create({
  input: {
    height: offset * 2,
    marginTop: offset/3,
    marginHorizontal: offset,
    paddingHorizontal: offset - 10,
    borderColor: '#111111',
    borderWidth: 1,
  },
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset - 2,
  },
  loginButton: {
    marginTop: offset,
  },
})

export default LoginScreen
