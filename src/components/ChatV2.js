import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

import firebaseSvc from '../FirebaseSvc'

class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('email'),
  })

  constructor(props) {
    super(props)

    this.currentUser = firebaseSvc.getUser()

    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    this.listenForMessages()
  }

  componentWillUnmount() {
    this.unsubsribe()
  }

  listenForMessages = () => {
    this.unsubsribe = firebaseSvc.getQuery().onSnapshot((snapshot) => {
      const newMessages = []

      snapshot.docChanges().forEach((change) => {
        const rawMessage = change.doc.data()
        const message = {
          ...rawMessage,
          createdAt: rawMessage.createdAt.toDate(),
        }
        newMessages.push(message)
      })

      this.setState((prevState) => ({
        messages: GiftedChat.append(prevState.messages, newMessages),
      }))
    })
  }

  sendMessage = (newMessages) => {
    const message = newMessages[0]
    firebaseSvc.sendMessage(message)
  }

  render() {
    return (
      <GiftedChat
        onSend={this.sendMessage}
        messages={this.state.messages}
        user={{ ...this.currentUser }}
      />
    )
  }
}

export default Chat
