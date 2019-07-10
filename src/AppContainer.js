import { createAppContainer, createStackNavigator } from 'react-navigation'

import Chat from './components/Chat'

const AppNavigator = createStackNavigator({
  Chat: { screen: Chat }
})

const AppContainer = createAppContainer(AppNavigator)

export default AppContainer
