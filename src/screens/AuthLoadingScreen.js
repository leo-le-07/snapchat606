import React from 'react'
import { View, Text, AsyncStorage, ActivityIndicator, StatusBar } from 'react-native'

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props)

    this.bootstrapAsync()
  }

  bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken')
    this.props.navigation.navigate(userToken ? 'App' : 'Auth')
  }

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    )
  }
}

export default AuthLoadingScreen
