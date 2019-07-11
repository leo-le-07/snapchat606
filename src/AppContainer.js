import { createAppContainer, createStackNavigator } from 'react-navigation'

import Chat from './components/Chat'
import Login from './components/Login'

const AppNavigator = createStackNavigator({
  Login: { screen: Login },
  Chat: { screen: Chat },
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
