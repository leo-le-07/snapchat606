import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation'

import AuthLoadingScreen from './screens/AuthLoadingScreen'
import LoginScreen from './screens/LoginScreen'
import ChatScreen from './screens/ChatScreen'
import MeScreen from './screens/MeScreen'

const AuthNavigator = createStackNavigator({
  Login: LoginScreen,
})

const AppNavigator = createBottomTabNavigator({
  Chat: { screen: ChatScreen },
  Me: { screen: MeScreen },
})

const AppContainer = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppNavigator,
    Auth: AuthNavigator,
  },
  {
    initialRouteName: 'AuthLoading',
  }
))

export default AppContainer
